import Link from "next/link";
import {
  getLanguageSwitcherItems,
  type SupportedLocale,
  getHomeCopy,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: SupportedLocale;
};

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const items = getLanguageSwitcherItems();
  const copy = getHomeCopy(currentLocale);

  return (
    <nav
      className="inline-flex w-full max-w-[23rem] items-center justify-center gap-1 rounded-full border border-white/[0.08] bg-[rgba(8,11,24,0.42)] p-1 shadow-[0_18px_36px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[20px] sm:w-auto"
      aria-label={copy.languageSwitcherAriaLabel}
    >
      {items.map((item) => {
        const isActive = item.locale === currentLocale;

        return (
          <Link
            key={item.locale}
            href={item.href}
            hrefLang={item.hrefLang}
            className={`inline-flex min-h-[2.3rem] min-w-0 flex-1 items-center justify-center rounded-full px-3 text-[0.78rem] font-bold tracking-[0.02em] transition-[color,background-color,transform,box-shadow] duration-200 sm:flex-none sm:px-4 sm:text-[0.82rem] ${
              isActive
                ? "bg-[linear-gradient(135deg,rgba(117,162,255,0.28),rgba(142,243,213,0.18))] text-[#f8fbff] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "text-[rgba(245,247,255,0.66)] hover:-translate-y-px hover:text-[rgba(245,247,255,0.95)]"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="hidden sm:inline">{item.label}</span>
            <span className="sm:hidden">{item.shortLabel}</span>
          </Link>
        );
      })}
    </nav>
  );
}
