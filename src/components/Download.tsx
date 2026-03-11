import type { LatestDownloads } from "@/lib/releases";
import { AppleIcon, ArrowRightIcon, DownloadIcon, WindowsIcon } from "./Icons";

type DownloadProps = {
  downloads: LatestDownloads;
};

function formatSize(size: number | null) {
  if (!size) {
    return "大小未知";
  }

  const units = ["B", "KB", "MB", "GB"];
  let value = size;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function formatReleaseDate(value: string) {
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Shanghai",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export default function Download({ downloads }: DownloadProps) {
  return (
    <section
      id="download"
      className="download-section relative overflow-hidden"
    >
      <div className="download-spotlight download-spotlight-a" />
      <div className="download-spotlight download-spotlight-b" />

      <div className="relative z-10 mx-auto w-full">
        <div className="download-shell">
          <div className="download-header">
            <div className="download-copy">
              <div className="download-label">DOWNLOAD</div>
              <h2 className="download-title">下载 Kian</h2>
              <p className="download-subtitle">
                选择与你设备匹配的安装包，版本信息与发布日期保持同步展示。
              </p>
            </div>

            <div className="download-meta-group">
              <div className="download-meta-card">
                <span className="download-meta-label">当前版本</span>
                <strong className="download-meta-value">v{downloads.version}</strong>
              </div>
              <div className="download-meta-card">
                <span className="download-meta-label">最近更新</span>
                <strong className="download-meta-value">{formatReleaseDate(downloads.publishedAt)}</strong>
              </div>
            </div>
          </div>

          <div className="download-grid">
            {downloads.assets.map((asset) => {
              const recommended = asset.id === "mac-apple-silicon";
              const icon =
                asset.platform === "Windows" ? (
                  <WindowsIcon className="h-6 w-6" />
                ) : (
                  <AppleIcon className="h-6 w-6" />
                );

              return (
                <a
                  key={asset.id}
                  href={asset.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`download-card${recommended ? " download-card-featured" : ""}`}
                >
                  <div className="download-card-top">
                    <div className="download-platform-mark">{icon}</div>
                    {recommended ? (
                      <span className="download-badge">推荐</span>
                    ) : null}
                  </div>

                  <div>
                    <div className="download-platform">{asset.platform}</div>
                    <h3 className="download-card-title">{asset.label}</h3>
                    <p className="download-card-description">{asset.description}</p>
                  </div>

                  <div className="download-card-bottom">
                    <div className="download-file-meta">
                      <span className="download-file-chip">{asset.extension}</span>
                      <span>{formatSize(asset.size)}</span>
                    </div>
                    <span className="download-action">
                      <DownloadIcon className="h-4 w-4" />
                      立即下载
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
