import type { Metadata } from "next";

export const DEFAULT_LOCALE = "zh" as const;
export const NON_DEFAULT_LOCALES = ["en", "ko", "ja"] as const;
export const SUPPORTED_LOCALES = [
  DEFAULT_LOCALE,
  ...NON_DEFAULT_LOCALES,
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export type NonDefaultLocale = (typeof NON_DEFAULT_LOCALES)[number];

export const SITE_NAME = "Kian";
export const SITE_URL = "https://heykian.com";
export const SITE_OG_IMAGE = "/opengraph-image";

type LocaleDefinition = {
  htmlLang: string;
  switcherLabel: string;
  shortLabel: string;
};

type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  languageSwitcherAriaLabel: string;
  hero: {
    title: string;
    featureTags: string[];
    nativeSupports: string[];
    featureTagsAriaLabel: string;
    nativeSupportsAriaLabel: string;
    downloadsAriaLabel: string;
    latestVersionLabel: string;
  };
};

const LOCALE_DEFINITIONS: Record<SupportedLocale, LocaleDefinition> = {
  zh: {
    htmlLang: "zh-CN",
    switcherLabel: "中文",
    shortLabel: "中文",
  },
  en: {
    htmlLang: "en",
    switcherLabel: "English",
    shortLabel: "EN",
  },
  ko: {
    htmlLang: "ko",
    switcherLabel: "한국어",
    shortLabel: "한국어",
  },
  ja: {
    htmlLang: "ja",
    switcherLabel: "日本語",
    shortLabel: "日本語",
  },
};

const HOME_COPY: Record<SupportedLocale, HomeCopy> = {
  zh: {
    metaTitle: "Kian | 你的第一个智能体团队",
    metaDescription:
      "下载 Kian，进入你的第一个智能体团队。支持多智能体协作、本地运行、定时任务、长程任务和多渠道通信。",
    languageSwitcherAriaLabel: "切换站点语言",
    hero: {
      title: "你的第一个智能体团队",
      featureTags: [
        "多智能体协作",
        "本地运行",
        "定时任务",
        "长程任务",
        "多渠道通信",
        "SKILL / MCP 支持",
      ],
      nativeSupports: ["文档管理", "多媒体创作", "应用开发"],
      featureTagsAriaLabel: "功能标签",
      nativeSupportsAriaLabel: "原生支持场景",
      downloadsAriaLabel: "下载 Kian",
      latestVersionLabel: "最新版本",
    },
  },
  en: {
    metaTitle: "Kian | Your First Agent Team",
    metaDescription:
      "Download Kian to launch your first agent team with local execution, multi-agent workflows, scheduled jobs, long-running tasks, and multi-channel delivery.",
    languageSwitcherAriaLabel: "Switch site language",
    hero: {
      title: "Your First Agent Team",
      featureTags: [
        "Multi-agent collaboration",
        "Runs locally",
        "Scheduled tasks",
        "Long-running tasks",
        "Multi-channel communication",
        "SKILL / MCP support",
      ],
      nativeSupports: ["Document management", "Media creation", "App development"],
      featureTagsAriaLabel: "Feature tags",
      nativeSupportsAriaLabel: "Native support areas",
      downloadsAriaLabel: "Download Kian",
      latestVersionLabel: "Latest version",
    },
  },
  ko: {
    metaTitle: "Kian | 당신의 첫 번째 에이전트 팀",
    metaDescription:
      "Kian을 다운로드하고 첫 번째 에이전트 팀을 시작하세요. 멀티 에이전트 협업, 로컬 실행, 예약 작업, 장시간 작업, 멀티채널 연동을 지원합니다.",
    languageSwitcherAriaLabel: "사이트 언어 전환",
    hero: {
      title: "당신의 첫 번째 에이전트 팀",
      featureTags: [
        "멀티 에이전트 협업",
        "로컬 실행",
        "예약 작업",
        "장시간 작업",
        "멀티채널 커뮤니케이션",
        "SKILL / MCP 지원",
      ],
      nativeSupports: ["문서 관리", "멀티미디어 제작", "앱 개발"],
      featureTagsAriaLabel: "기능 태그",
      nativeSupportsAriaLabel: "기본 지원 영역",
      downloadsAriaLabel: "Kian 다운로드",
      latestVersionLabel: "최신 버전",
    },
  },
  ja: {
    metaTitle: "Kian | あなたの最初のエージェントチーム",
    metaDescription:
      "Kian をダウンロードして、最初のエージェントチームを始めましょう。マルチエージェント協業、ローカル実行、定期タスク、長時間タスク、マルチチャネル連携に対応しています。",
    languageSwitcherAriaLabel: "サイト言語を切り替える",
    hero: {
      title: "あなたの最初のエージェントチーム",
      featureTags: [
        "マルチエージェント協業",
        "ローカル実行",
        "定期タスク",
        "長時間タスク",
        "マルチチャネル連携",
        "SKILL / MCP 対応",
      ],
      nativeSupports: ["ドキュメント管理", "マルチメディア制作", "アプリ開発"],
      featureTagsAriaLabel: "機能タグ",
      nativeSupportsAriaLabel: "標準サポート領域",
      downloadsAriaLabel: "Kian をダウンロード",
      latestVersionLabel: "最新バージョン",
    },
  },
};

export function isSupportedLocale(value: string): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
}

export function isNonDefaultLocale(value: string): value is NonDefaultLocale {
  return NON_DEFAULT_LOCALES.includes(value as NonDefaultLocale);
}

export function getLocalePath(locale: SupportedLocale) {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}

export function getLocaleUrl(locale: SupportedLocale) {
  return new URL(getLocalePath(locale), SITE_URL).toString();
}

export function getHtmlLang(locale: SupportedLocale) {
  return LOCALE_DEFINITIONS[locale].htmlLang;
}

export function getHomeCopy(locale: SupportedLocale) {
  return HOME_COPY[locale];
}

export function getLanguageSwitcherItems() {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    href: getLocalePath(locale),
    hrefLang: getHtmlLang(locale),
    label: LOCALE_DEFINITIONS[locale].switcherLabel,
    shortLabel: LOCALE_DEFINITIONS[locale].shortLabel,
  }));
}

export function resolveRequestLocale(value: string | null): SupportedLocale {
  if (value && isSupportedLocale(value)) {
    return value;
  }

  return DEFAULT_LOCALE;
}

export function getAlternateLanguageUrls() {
  return {
    "x-default": getLocaleUrl(DEFAULT_LOCALE),
    "zh-CN": getLocaleUrl(DEFAULT_LOCALE),
    en: getLocaleUrl("en"),
    ko: getLocaleUrl("ko"),
    ja: getLocaleUrl("ja"),
  };
}

export function createHomeMetadata(locale: SupportedLocale): Metadata {
  const copy = getHomeCopy(locale);
  const pageUrl = getLocaleUrl(locale);

  return {
    applicationName: SITE_NAME,
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: pageUrl,
      languages: getAlternateLanguageUrls(),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      type: "website",
      locale: getHtmlLang(locale).replace("-", "_"),
      images: [
        {
          url: SITE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [
        {
          url: SITE_OG_IMAGE,
          alt: `${SITE_NAME} preview`,
        },
      ],
    },
  };
}

export function createHomeStructuredData(locale: SupportedLocale, version: string) {
  const copy = getHomeCopy(locale);
  const pageUrl = getLocaleUrl(locale);
  const htmlLang = getHtmlLang(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: htmlLang,
        description: copy.metaDescription,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: SITE_NAME,
        url: pageUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "macOS, Windows",
        inLanguage: htmlLang,
        description: copy.metaDescription,
        image: new URL("/kian-logo.png", SITE_URL).toString(),
        screenshot: new URL(SITE_OG_IMAGE, SITE_URL).toString(),
        softwareVersion: version,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: copy.hero.featureTags,
      },
    ],
  };
}
