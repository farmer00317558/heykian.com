import {
  AppstoreIcon,
  BroadcastIcon,
  BrowserIcon,
  FileTextIcon,
  LayersIcon,
  MemoryIcon,
  PictureIcon,
  TerminalIcon,
  VideoCameraIcon,
} from "./Icons";

const modules = [
  {
    icon: <FileTextIcon />,
    title: "Docs",
    subtitle: "知识管理",
    description:
      "围绕 Markdown 的知识工作区。笔记、日记、会议纪要、学习记录都能直接写入 `docs/` 目录，便于长期归档、检索与二次整理。",
    directory: "docs/",
    sample: "写日记、会议纪要、知识库整理、检索总结",
    points: ["全 Markdown 读写", "适合笔记 / 日记 / 会议纪要", "支持知识检索与总结"],
    accent: "var(--color-teal)",
    accentBg: "rgba(94, 184, 176, 0.08)",
  },
  {
    icon: <VideoCameraIcon />,
    title: "Creation",
    subtitle: "视频创作",
    description:
      "面向音视频创作的镜头级工作台。支持文生视频、图生视频、数字人视频生成与多镜头编排，项目资产统一沉淀在 `creation/`。",
    directory: "creation/",
    sample: "产品宣传片、分镜脚本、数字人讲解、镜头资源编排",
    points: ["分场分镜式创作", "文生视频 / 图生视频 / 数字人", "镜头资源全链路管理"],
    accent: "var(--color-accent)",
    accentBg: "rgba(200, 149, 108, 0.08)",
  },
  {
    icon: <PictureIcon />,
    title: "Assets",
    subtitle: "媒体管理",
    description:
      "统一管理图片、音频、视频素材。无论是查找、整理还是批量处理文件，Kian 都可以直接围绕 `assets/` 目录执行。",
    directory: "assets/",
    sample: "素材检索、批量转换、统一命名、图片与视频资产调度",
    points: ["图片 / 视频 / 音频统一入口", "支持查阅、检索、批量处理", "为创作和开发提供素材支撑"],
    accent: "var(--color-accent-light)",
    accentBg: "rgba(232, 201, 160, 0.06)",
  },
  {
    icon: <AppstoreIcon />,
    title: "App",
    subtitle: "应用开发",
    description:
      "内置前端应用开发流，基于 React / Vite 快速生成小应用、工具或小游戏。新版本还可以直接调用本地摄像头、麦克风等设备。",
    directory: "app/",
    sample: "番茄钟、小游戏、摄像头工具、实时录音波形应用",
    points: ["快速生成前端应用", "可做工具 / 游戏 / 小实验", "支持摄像头与麦克风调用"],
    accent: "var(--color-teal-deep)",
    accentBg: "rgba(42, 157, 143, 0.08)",
  },
];

const abilities = [
  {
    icon: <TerminalIcon />,
    title: "编程与系统自动化",
    description:
      "可以委托 Coding Agent 处理复杂代码任务，也可以直接在 macOS 上执行 Bash 与 AppleScript，打通文件系统和本地环境。",
    points: ["复杂代码修复与重构", "Bash / AppleScript 系统级操作", "适合脚本、批处理、开发协作"],
  },
  {
    icon: <LayersIcon />,
    title: "异步任务与定时任务",
    description:
      "长耗时脚本、编译、导出任务可以后台运行，不阻塞当前对话；也可以通过 Cron 调度按天、按周、按小时自动执行。",
    points: ["后台长任务管理", "自然语言创建计划任务", "完成后通知与衔接下游动作"],
  },
  {
    icon: <BrowserIcon />,
    title: "网络浏览与信息搜集",
    description:
      "内置可视化浏览器能力，可打开网页、点击交互、提取 DOM、表格与截图，适合研究、采集、监控等场景。",
    points: ["自动打开和操作网页", "提取复杂页面内容", "支持截图与信息汇总"],
  },
  {
    icon: <BroadcastIcon />,
    title: "广播与消息推送",
    description:
      "可以在广播渠道中配置飞书或企业微信 Webhook，把生成的周报、通知、更新说明自动推送到外部群组或频道。",
    points: ["飞书 / 企业微信广播", "支持与自动化任务联动", "适合日报、通知、部署播报"],
  },
  {
    icon: <LayersIcon />,
    title: "PDF、设计与 HTML PPT",
    description:
      "从 PDF OCR、表格提取、拆分合并，到海报设计和带动效的网页版 PPT，Kian 都能直接生成可交付结果。",
    points: ["PDF 文本 / 表格 / OCR", "海报与插画设计", "前端代码式幻灯片输出"],
  },
  {
    icon: <MemoryIcon />,
    title: "长效记忆与人格设定",
    description:
      "通过 SOUL.md、USER.md、IDENTITY.md 与 PROJECT.md，持续塑造 Kian 的角色、语气、偏好与项目级上下文。",
    points: ["会话自动归档", "多层人格与偏好文件", "支持项目级专属工作设定"],
  },
];

export default function Features() {
  return (
    <section id="modules" className="relative scroll-mt-24 py-28">
      <div className="orb orb-3" />

      {/* Decorative separator */}
      <div className="glow-line mx-auto mb-28 max-w-md" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-4">Core Modules</p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            四大核心模块
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            从知识沉淀、视频创作、素材管理到本地应用开发，Kian 把原本分散的工作流程收束到同一个 AI 客户端里。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {modules.map((module) => (
            <article
              key={module.title}
              className="module-card flex h-full flex-col p-8"
            >
              {/* Subtle corner glow */}
              <div
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full blur-[60px] opacity-40"
                style={{ background: module.accentBg.replace('0.08', '0.5') }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] text-xl"
                    style={{
                      background: module.accentBg,
                      color: module.accent,
                      boxShadow: `0 0 30px ${module.accentBg}`,
                    }}
                  >
                    {module.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-baseline gap-3">
                      <h3 className="font-display text-2xl">{module.title}</h3>
                      <span className="text-sm text-[var(--color-muted)]">
                        {module.subtitle}
                      </span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                      {module.description}
                    </p>
                  </div>
                </div>

                <span className="hidden rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] md:inline-flex">
                  {module.directory}
                </span>
              </div>

              <div className="relative mt-6 rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  Typical Work
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-foreground)]/70">
                  {module.sample}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {module.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)]"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Skill tree separator */}
        <div className="glow-line mx-auto mt-28 mb-16 max-w-xs" />

        <div id="skills" className="scroll-mt-24 mb-16 text-center">
          <p className="section-kicker mb-4">Capability Graph</p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            进阶技能树
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            真正有用的 AI 客户端，不只是一个聊天框，还要能接代码、接网络、接消息、接系统、接文件。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {abilities.map((ability, index) => (
            <article key={ability.title} className="capability-card p-8">
              <div className="capability-index">0{index + 1}</div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(200,149,108,0.08)] text-xl text-[var(--color-accent)]">
                  {ability.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl">{ability.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {ability.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {ability.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
