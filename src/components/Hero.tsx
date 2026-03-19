import type { LatestDownloads } from "@/lib/releases";
import { getHomeCopy, type SupportedLocale } from "@/lib/i18n";
import { AppleIcon, DownloadIcon, GitHubIcon, WindowsIcon } from "./Icons";
import LanguageSwitcher from "./LanguageSwitcher";
import ParticleField from "./ParticleField";

type HeroProps = {
  locale: SupportedLocale;
  downloads: LatestDownloads;
};

export default function Hero({ locale, downloads }: HeroProps) {
  const copy = getHomeCopy(locale);
  const isEnglish = locale === "en";

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
            <a
              href="https://github.com/SandAI-org/kian"
              target="_blank"
              rel="noreferrer"
              className="hero-github-link"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>{copy.hero.githubStarLabel}</span>
            </a>
            <h1 className={`hero-title ${isEnglish ? "hero-title-english" : ""}`}>
              <span className="block">{copy.hero.title}</span>
            </h1>
          </div>
          <div className="hero-feature-block">
            <div
              className="hero-tag-row"
              aria-label={copy.hero.featureTagsAriaLabel}
            >
              {copy.hero.featureTags.map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div
              className="hero-support-row"
              aria-label={copy.hero.nativeSupportsAriaLabel}
            >
              <div className="hero-support-tags">
                {copy.hero.nativeSupports.map((item) => (
                  <span key={item} className="hero-support-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="hero-download-row"
            aria-label={copy.hero.downloadsAriaLabel}
          >
            {downloads.assets.map((asset) => {
              const label =
                asset.id === "windows" ? copy.hero.windowsReleaseLabel : asset.label;
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
                    <span className="hero-download-label">{label}</span>
                  </span>
                  <span className="hero-download-action">
                    <DownloadIcon className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>
          <p className="hero-latest-version">
            {copy.hero.latestVersionLabel} v{downloads.version}
          </p>
          <div className="flex w-full max-w-[68rem] justify-center pt-1">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
