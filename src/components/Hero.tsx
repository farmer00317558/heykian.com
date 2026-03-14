import type { LatestDownloads } from "@/lib/releases";
import { AppleIcon, DownloadIcon, WindowsIcon } from "./Icons";
import ParticleField from "./ParticleField";

const featureTags = [
  "多智能体协作",
  "本地运行",
  "定时任务",
  "长程任务",
  "多渠道通信",
  "SKILL / MCP 支持",
];

const nativeSupports = ["文档管理", "多媒体创作", "应用开发"];

type HeroProps = {
  downloads: LatestDownloads;
};

export default function Hero({ downloads }: HeroProps) {
  return (
    <section
      id="top"
      className="hero-section relative flex h-svh items-center justify-center overflow-hidden px-5 py-10 sm:px-6 lg:px-8"
    >
      <ParticleField />

      <div className="hero-shell relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center">
        <div className="hero-stack w-full">
          <div className="hero-heading">
            <div className="hero-brand" data-text="Kian">Kian</div>
            <h1 className="hero-title">
              <span className="block">你的第一个智能体团队</span>
            </h1>
          </div>
          <div className="hero-feature-block">
            <div className="hero-tag-row" aria-label="Feature tags">
              {featureTags.map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-support-row" aria-label="Native supports">
              <div className="hero-support-tags">
                {nativeSupports.map((item) => (
                  <span key={item} className="hero-support-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-download-row" aria-label="下载 Kian">
            {downloads.assets.map((asset) => {
              const icon =
                asset.platform === "Windows" ? (
                  <WindowsIcon className="h-5 w-5" />
                ) : (
                  <AppleIcon className="h-5 w-5" />
                );

              return (
                <a
                  key={asset.id}
                  href={asset.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-download-button"
                >
                  <span className="hero-download-icon">{icon}</span>
                  <span className="hero-download-copy">
                    <span className="hero-download-platform">{asset.platform}</span>
                    <span className="hero-download-label">{asset.label}</span>
                  </span>
                  <span className="hero-download-action">
                    <DownloadIcon className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>
          <p className="hero-latest-version">
            最新版本 v{downloads.version}
          </p>
        </div>
      </div>
    </section>
  );
}
