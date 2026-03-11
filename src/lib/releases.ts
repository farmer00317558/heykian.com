const RELEASE_BASE_URL = "https://static.sandcdn.com/kian-releases/";
const MAC_MANIFEST_URL = `${RELEASE_BASE_URL}latest-mac.yml`;
const WINDOWS_MANIFEST_URL = `${RELEASE_BASE_URL}latest.yml`;

type ReleaseFile = {
  url: string;
  size: number | null;
};

type ReleaseManifest = {
  version: string;
  path: string;
  releaseDate: string;
  files: ReleaseFile[];
};

export type DownloadAsset = {
  id: "mac-apple-silicon" | "mac-intel" | "windows";
  platform: string;
  label: string;
  description: string;
  fileName: string;
  href: string;
  extension: string;
  size: number | null;
};

export type LatestDownloads = {
  version: string;
  publishedAt: string;
  assets: DownloadAsset[];
  manifestUrls: {
    mac: string;
    windows: string;
  };
};

function buildAssetUrl(fileName: string) {
  return new URL(fileName, RELEASE_BASE_URL).toString();
}

const FALLBACK_DOWNLOADS: LatestDownloads = {
  version: "0.0.9",
  publishedAt: "2026-03-07T18:48:57.313Z",
  assets: [
    {
      id: "mac-apple-silicon",
      platform: "macOS",
      label: "Apple Silicon",
      description: "适用于 M1 / M2 / M3 / M4 芯片",
      fileName: "Kian-0.0.9-arm64-mac.zip",
      href: buildAssetUrl("Kian-0.0.9-arm64-mac.zip"),
      extension: "ZIP",
      size: 202663122,
    },
    {
      id: "mac-intel",
      platform: "macOS",
      label: "Intel",
      description: "适用于 Intel 处理器 Mac",
      fileName: "Kian-0.0.9-mac.zip",
      href: buildAssetUrl("Kian-0.0.9-mac.zip"),
      extension: "ZIP",
      size: 208999527,
    },
    {
      id: "windows",
      platform: "Windows",
      label: "Setup",
      description: "适用于 Windows 10 / 11",
      fileName: "Kian Setup 0.0.9.exe",
      href: buildAssetUrl("Kian Setup 0.0.9.exe"),
      extension: "EXE",
      size: 161485575,
    },
  ],
  manifestUrls: {
    mac: MAC_MANIFEST_URL,
    windows: WINDOWS_MANIFEST_URL,
  },
};

function cleanManifestValue(value: string) {
  return value.trim().replace(/^['"]|['"]$/g, "");
}

function parseReleaseManifest(source: string): ReleaseManifest | null {
  const lines = source.split(/\r?\n/);
  const manifest: ReleaseManifest = {
    version: "",
    path: "",
    releaseDate: "",
    files: [],
  };

  let currentFile: ReleaseFile | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line) {
      continue;
    }

    if (line.startsWith("version:")) {
      manifest.version = cleanManifestValue(line.slice("version:".length));
      continue;
    }

    if (line.startsWith("path:")) {
      manifest.path = cleanManifestValue(line.slice("path:".length));
      continue;
    }

    if (line.startsWith("releaseDate:")) {
      manifest.releaseDate = cleanManifestValue(
        line.slice("releaseDate:".length),
      );
      continue;
    }

    if (line.trimStart().startsWith("- url:")) {
      currentFile = {
        url: cleanManifestValue(line.trimStart().slice("- url:".length)),
        size: null,
      };
      manifest.files.push(currentFile);
      continue;
    }

    if (currentFile && line.trimStart().startsWith("size:")) {
      const size = Number.parseInt(
        cleanManifestValue(line.trimStart().slice("size:".length)),
        10,
      );
      currentFile.size = Number.isFinite(size) ? size : null;
    }
  }

  if (!manifest.version || !manifest.path) {
    return null;
  }

  return manifest;
}

async function fetchReleaseManifest(url: string) {
  try {
    const response = await fetch(url, {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      return null;
    }

    return parseReleaseManifest(await response.text());
  } catch {
    return null;
  }
}

function toDownloadAsset(
  asset: Omit<DownloadAsset, "href" | "extension">,
): DownloadAsset {
  const extension = asset.fileName.split(".").pop()?.toUpperCase() ?? "FILE";

  return {
    ...asset,
    href: buildAssetUrl(asset.fileName),
    extension,
  };
}

function getNewestReleaseDate(...dates: Array<string | undefined>) {
  const candidates = dates.filter(Boolean) as string[];

  if (candidates.length === 0) {
    return FALLBACK_DOWNLOADS.publishedAt;
  }

  return candidates.sort().at(-1) ?? FALLBACK_DOWNLOADS.publishedAt;
}

export async function getLatestDownloads(): Promise<LatestDownloads> {
  const [macManifest, windowsManifest] = await Promise.all([
    fetchReleaseManifest(MAC_MANIFEST_URL),
    fetchReleaseManifest(WINDOWS_MANIFEST_URL),
  ]);

  if (!macManifest && !windowsManifest) {
    return FALLBACK_DOWNLOADS;
  }

  const assets: DownloadAsset[] = [];

  if (macManifest) {
    const appleSiliconFile = macManifest.files.find((file) =>
      /arm64/i.test(file.url),
    );
    const intelFile = macManifest.files.find(
      (file) => /(^|-)mac\.zip$/i.test(file.url) && !/arm64/i.test(file.url),
    );

    if (appleSiliconFile) {
      assets.push(
        toDownloadAsset({
          id: "mac-apple-silicon",
          platform: "macOS",
          label: "Apple Silicon",
          description: "适用于 M1 / M2 / M3 / M4 芯片",
          fileName: appleSiliconFile.url,
          size: appleSiliconFile.size,
        }),
      );
    }

    if (intelFile) {
      assets.push(
        toDownloadAsset({
          id: "mac-intel",
          platform: "macOS",
          label: "Intel",
          description: "适用于 Intel 处理器 Mac",
          fileName: intelFile.url,
          size: intelFile.size,
        }),
      );
    }
  }

  if (windowsManifest) {
    const windowsFile =
      windowsManifest.files.find((file) => file.url === windowsManifest.path) ??
      windowsManifest.files[0];

    if (windowsFile) {
      assets.push(
        toDownloadAsset({
          id: "windows",
          platform: "Windows",
          label: "Setup",
          description: "适用于 Windows 10 / 11",
          fileName: windowsFile.url,
          size: windowsFile.size,
        }),
      );
    }
  }

  return {
    version:
      macManifest?.version ??
      windowsManifest?.version ??
      FALLBACK_DOWNLOADS.version,
    publishedAt: getNewestReleaseDate(
      macManifest?.releaseDate,
      windowsManifest?.releaseDate,
    ),
    assets: assets.length > 0 ? assets : FALLBACK_DOWNLOADS.assets,
    manifestUrls: {
      mac: MAC_MANIFEST_URL,
      windows: WINDOWS_MANIFEST_URL,
    },
  };
}
