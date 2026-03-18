const RELEASE_BASE_URL = "https://static.sandcdn.com/kian-releases/";
const MAC_MANIFEST_URL = `${RELEASE_BASE_URL}latest-mac.yml`;
const WINDOWS_MANIFEST_URL = `${RELEASE_BASE_URL}latest.yml`;
// 使用非 CDN 源站地址获取最新版本号，避免缓存
const LATEST_VERSION_URL =
  "https://sandai-fe-builds.oss-cn-hongkong.aliyuncs.com/kian-releases/latest.txt";

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
  version: "0.0.13",
  publishedAt: "2026-03-07T18:48:57.313Z",
  assets: [
    {
      id: "mac-apple-silicon",
      platform: "macOS",
      label: "Apple Silicon",
      description: "适用于 M1 / M2 / M3 / M4 芯片",
      fileName: "0.0.13/Kian-0.0.13-arm64.dmg",
      href: buildAssetUrl("0.0.13/Kian-0.0.13-arm64.dmg"),
      extension: "DMG",
      size: null,
    },
    {
      id: "mac-intel",
      platform: "macOS",
      label: "Intel",
      description: "适用于 Intel 处理器 Mac",
      fileName: "0.0.13/Kian-0.0.13.dmg",
      href: buildAssetUrl("0.0.13/Kian-0.0.13.dmg"),
      extension: "DMG",
      size: null,
    },
  ],
  manifestUrls: {
    mac: MAC_MANIFEST_URL,
    windows: WINDOWS_MANIFEST_URL,
  },
};

async function fetchLatestVersion(): Promise<string | null> {
  try {
    const response = await fetch(LATEST_VERSION_URL, {
      // 禁用缓存，确保每次从源站获取最新版本号
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const text = (await response.text()).trim();
    return text || null;
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

export async function getLatestDownloads(): Promise<LatestDownloads> {
  const version = await fetchLatestVersion();

  if (!version) {
    return FALLBACK_DOWNLOADS;
  }

  // Temporarily publish only macOS installers on public pages.
  const assets: DownloadAsset[] = [
    toDownloadAsset({
      id: "mac-apple-silicon",
      platform: "macOS",
      label: "Apple Silicon",
      description: "适用于 M1 / M2 / M3 / M4 芯片",
      fileName: `${version}/Kian-${version}-arm64.dmg`,
      size: null,
    }),
    toDownloadAsset({
      id: "mac-intel",
      platform: "macOS",
      label: "Intel",
      description: "适用于 Intel 处理器 Mac",
      fileName: `${version}/Kian-${version}.dmg`,
      size: null,
    }),
  ];

  return {
    version,
    // 使用当前时间作为发布时间（服务器时间）
    publishedAt: new Date().toISOString(),
    assets,
    manifestUrls: {
      mac: MAC_MANIFEST_URL,
      windows: WINDOWS_MANIFEST_URL,
    },
  };
}
