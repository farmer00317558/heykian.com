const workflows = [
  {
    label: "知识管理",
    title: "把日常输入直接沉淀进知识库",
    prompt: "帮我写一篇今天的日记，整理成 Markdown 并保存到 docs/日记。",
    accent: "#5eb8b0",
    surface: "rgba(94, 184, 176, 0.06)",
  },
  {
    label: "视频创作",
    title: "把创意拆成可执行的视频镜头",
    prompt: "帮我创作一条 30 秒产品宣传片脚本，分 5 个镜头，科技感风格。",
    accent: "#c8956c",
    surface: "rgba(200, 149, 108, 0.06)",
  },
  {
    label: "媒体管理",
    title: "批量整理媒体素材",
    prompt: "把 assets/图片 目录下所有 PNG 批量转换成 JPG，并统一命名。",
    accent: "#e8c9a0",
    surface: "rgba(232, 201, 160, 0.05)",
  },
  {
    label: "应用开发",
    title: "一句话生成本地可运行的小应用",
    prompt: "做一个番茄钟计时器应用，界面要好看一点，支持手机操作。",
    accent: "#2a9d8f",
    surface: "rgba(42, 157, 143, 0.06)",
  },
  {
    label: "计划任务",
    title: "把重复工作变成后台任务",
    prompt: "每天早上 8 点自动抓取今日新闻，生成摘要并存到 docs/新闻。",
    accent: "#5eb8b0",
    surface: "rgba(94, 184, 176, 0.05)",
  },
  {
    label: "广播推送",
    title: "把产出继续推送到外部渠道",
    prompt: "把刚才生成的周报内容发送到飞书团队群。",
    accent: "#c8956c",
    surface: "rgba(200, 149, 108, 0.05)",
  },
];

const memoryFiles = [
  {
    name: "SOUL.md",
    description: "定义行为准则、价值观与默认行动方式。",
  },
  {
    name: "USER.md",
    description: "记录用户偏好、习惯与长期协作上下文。",
  },
  {
    name: "IDENTITY.md",
    description: "定义 AI 的名字、语气与人格设定。",
  },
  {
    name: "PROJECT.md",
    description: "为单个项目附加专属工作上下文与角色。",
  },
];

const connectors = [
  "本地目录读写",
  "浏览器自动化",
  "Webhook 广播",
  "计划任务调度",
];

const journeySteps = [
  {
    id: "01",
    title: "理解输入意图",
    description: "从一句话指令开始，识别文件、任务、网页与目标产出。",
  },
  {
    id: "02",
    title: "调度合适工具",
    description: "按场景连接目录、脚本、浏览器、计划任务与广播渠道。",
  },
  {
    id: "03",
    title: "生成结果并继续流转",
    description: "把结果写入工作区、推送出去，或交给后台任务持续运行。",
  },
];

export default function UseCases() {
  return (
    <section id="scenarios" className="relative scroll-mt-24 py-28">
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-[620px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 22% 24%, rgba(94,184,176,0.06), transparent 26%), radial-gradient(circle at 80% 22%, rgba(200,149,108,0.08), transparent 28%)",
        }}
      />

      {/* Separator */}
      <div className="glow-line mx-auto mb-28 max-w-md" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="self-start lg:sticky lg:top-28">
            <div className="max-w-[28rem]">
              <p className="section-kicker mb-4">真实工作流</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                一句话，让想法直接流进结果
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
                Kian 不只是回答问题，而是把目录、文件、任务、网络与消息渠道接在一起，把一次输入继续变成可交付的工作流。
              </p>

              <div className="mt-8 space-y-4">
                {journeySteps.map((step) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-[10px]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(200,149,108,0.08)] font-display text-sm italic text-[var(--color-accent)]">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {connectors.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative rounded-[26px] border border-white/[0.06] p-4 md:rounded-[30px] md:p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,26,30,0.6), rgba(20,20,22,0.4))",
              boxShadow: "0 28px 72px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            {/* Corner accent glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at top right, rgba(200,149,108,0.05), transparent 26%), radial-gradient(circle at bottom left, rgba(94,184,176,0.04), transparent 28%)",
              }}
            />

            <div className="relative mb-5 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  工作流样例
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  从知识沉淀到广播推送，每张卡片都是一句真实可执行的工作指令。
                </p>
              </div>
              <div className="hidden text-right md:block">
                <div className="font-display text-sm italic text-[var(--color-muted)]">
                  6 个场景
                </div>
              </div>
            </div>

            <div className="relative grid gap-4 md:grid-cols-2">
              {workflows.map((workflow, index) => (
                <article
                  key={workflow.title}
                  className={`relative overflow-hidden rounded-[22px] border border-white/[0.06] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.1] ${
                    index % 2 === 1 ? "lg:translate-y-6" : ""
                  }`}
                  style={{
                    background: `linear-gradient(180deg, rgba(26,26,30,0.7), ${workflow.surface})`,
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    aria-hidden
                    className="absolute inset-x-6 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, ${workflow.accent}, transparent)`,
                      opacity: 0.4,
                    }}
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[var(--color-foreground)]"
                    >
                      {workflow.label}
                    </span>
                    <span
                      className="font-display text-sm italic"
                      style={{ color: workflow.accent, opacity: 0.6 }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[1.6rem] font-semibold leading-[1.22] tracking-tight text-[var(--color-foreground)]">
                    {workflow.title}
                  </h3>

                  <div
                    className="mt-5 rounded-[18px] border border-white/[0.06] bg-white/[0.02] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-6 w-1 rounded-full"
                        style={{ background: workflow.accent }}
                      />
                      <div
                        className="text-[0.68rem] font-bold tracking-[0.22em] uppercase"
                        style={{ color: workflow.accent }}
                      >
                        示例指令
                      </div>
                    </div>
                    <p className="mt-4 pl-4 text-[15px] leading-relaxed text-[var(--color-foreground)]/70">
                      {workflow.prompt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Memory panel */}
        <div
          className="relative mt-20 grid gap-8 overflow-hidden rounded-[24px] border border-white/[0.06] p-8 md:rounded-[30px] lg:grid-cols-[0.82fr_1.18fr]"
          style={{
            background:
              "linear-gradient(135deg, rgba(14,14,16,0.95) 0%, rgba(20,20,22,0.95) 44%, rgba(30,20,16,0.95) 100%)",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.35)",
          }}
        >
          {/* Decorative glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-20 right-8 h-52 w-52 rounded-full bg-[rgba(200,149,108,0.1)] blur-[80px]" />
            <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[rgba(94,184,176,0.08)] blur-[80px]" />
          </div>

          <div className="relative">
            <p className="section-kicker mb-4">
              Persistent Memory
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
              不止会话上下文，还有长期人格与项目记忆
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-[var(--color-muted)]">
              每次长对话结束后，Kian 可以把关键信息归档到会话文档里。你也可以通过几份简单的 Markdown 文件，持续塑造它的行为方式、协作习惯和项目角色。
            </p>
          </div>

          <div className="relative grid gap-4 md:grid-cols-2">
            {memoryFiles.map((item) => (
              <div
                key={item.name}
                className="rounded-[20px] border border-white/[0.08] p-5 transition-all duration-400 hover:-translate-y-1 hover:border-[rgba(200,149,108,0.15)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="font-display text-base italic text-[var(--color-accent)]">
                  {item.name}
                </div>
                <div className="mt-3 h-px w-10 bg-white/[0.1]" />
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
