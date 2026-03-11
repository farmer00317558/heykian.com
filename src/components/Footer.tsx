export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-lg tracking-tight text-[var(--color-foreground)]">
            Kian
          </div>
          <div className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
            一个把 AI 真正接入工作区的客户端，服务写作、创作、自动化与开发。
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)]">
          <a href="#modules" className="transition-colors hover:text-[var(--color-accent-light)]">
            模块
          </a>
          <a href="#skills" className="transition-colors hover:text-[var(--color-accent-light)]">
            技能树
          </a>
          <a href="#top" className="transition-colors hover:text-[var(--color-accent-light)]">
            下载
          </a>
          <span className="text-white/[0.25]">&copy; 2026 Kian. Built by 磊.</span>
        </div>
      </div>
    </footer>
  );
}
