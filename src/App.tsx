import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  FileText,
  Copy,
  Check,
  Award,
  BookOpen,
  Sparkles,
  Cpu,
  Database,
  Workflow,
} from "lucide-react";

/* --------------------------- Shared bits --------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
} as const;

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span className="text-[color:var(--accent)]">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span>{children}</span>
    </div>
  );
}

function MonoTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-1 border border-border rounded text-muted-foreground bg-[color:var(--surface)]/40">
      {children}
    </span>
  );
}

/* ------------------------------- Nav ------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    ["work", "Work"],
    ["experience", "Experience"],
    ["research", "Research"],
    ["contact", "Contact"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          vt<span className="text-[color:var(--accent)]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-muted-foreground">
          {items.map(([href, label]) => (
            <a key={href} href={`#${href}`} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:tiwarivanshaj089@gmail.com"
          className="font-mono text-xs px-3 py-2 border border-border rounded hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
        >
          get in touch
        </a>
      </div>
    </header>
  );
}

/* ------------------------------ Hero ------------------------------ */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.07] blur-[120px] bg-[color:var(--accent)]" />

      <motion.div style={{ y }} className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent)] opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--accent)]" />
            </span>
            available - AI Engineer roles - Jul 2026
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] font-medium max-w-5xl"
          >
            Applied AI Engineer building{" "}
            <span className="text-muted-foreground">retrieval systems,</span>{" "}
            <span className="text-muted-foreground">data pipelines,</span> and automation that ship.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 font-mono text-sm text-muted-foreground max-w-2xl"
          >
            IEEE-published - ex-HCL Data Engineering - currently building{" "}
            <span className="text-foreground">NyayaSetu</span> - a hybrid RAG legal AI platform.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#nyayasetu"
              className="group inline-flex items-center gap-2 bg-[color:var(--accent)] text-[color:var(--accent-foreground)] font-mono text-sm px-5 py-3 rounded hover:opacity-90 transition-opacity"
            >
              See NyayaSetu
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded border border-border hover:border-foreground transition-colors"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="https://github.com/Vanshaj089"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded border border-border hover:border-foreground transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div variants={fadeUp} className="mt-20 pt-8 border-t border-border">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
              trusted credentials
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              {[
                ["IEEE", "Published Research"],
                ["HCL Technologies", "Data Engineering"],
                ["3PointOcypher", "AI Automation"],
                ["National Award", "Innovation, 4th"],
              ].map(([t, s]) => (
                <div key={t}>
                  <div className="font-display font-medium">{t}</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">{s}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------ About ----------------------------- */

function About() {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionLabel index="01">About</SectionLabel>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6 text-lg leading-relaxed max-w-2xl"
          >
            <p>
              I'm Vanshaj - an AI/ML engineer who likes the messy middle between{" "}
              <span className="text-[color:var(--accent)]">research</span> and{" "}
              <span className="text-[color:var(--accent)]">production</span>.
            </p>
            <p className="text-muted-foreground">
              Most of my work lives at the intersection of retrieval-augmented systems, data
              engineering at scale, and automation that removes human bottlenecks. At HCL
              Technologies, I engineered ETL pipelines processing 500K+ records daily on PySpark and
              SQL. At 3PointOcypher, I shipped 15+ automation bots that cut repetitive workload by
              60%.
            </p>
            <p className="text-muted-foreground">
              In parallel, I built <span className="text-foreground">NyayaSetu</span> - a
              hybrid-retrieval legal AI platform whose architecture was accepted as an IEEE
              publication.
            </p>
            <p className="text-muted-foreground">
              I'm not interested in models that only look good in notebooks. I care about latency,
              eval quality, observability, and the unglamorous plumbing that decides whether an AI
              product actually works.
            </p>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:sticky lg:top-24 self-start"
          >
            <div className="border border-border rounded-lg p-6 bg-[color:var(--surface)]/40 space-y-5 font-mono text-xs">
              {[
                ["status", "Open to AI roles"],
                ["available", "July 2026"],
                ["based in", "Lucknow, India"],
                ["working on", "NyayaSetu - RAG"],
                ["learning", "Eval frameworks, MLOps"],
                ["degree", "B.Tech CSE (AI & ML)"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-muted-foreground uppercase tracking-wider">{k}</span>
                  <span className="text-foreground text-right">{v}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Featured: NyayaSetu --------------------- */

function NyayaSetu() {
  return (
    <section id="nyayasetu" className="py-32 border-t border-border relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionLabel index="02">Featured Case Study</SectionLabel>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs px-2 py-1 rounded bg-[color:var(--accent)] text-[color:var(--accent-foreground)]">
                  IEEE PUBLISHED
                </span>
                <span className="font-mono text-xs text-muted-foreground">2026</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-medium tracking-tight">
                NyayaSetu
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                A scalable AI legal platform using hybrid retrieval (RAG + PageIndex) with
                role-based FIR workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "Transformers", "NLP", "DuckDB", "SQLite"].map((t) => (
                <MonoTag key={t}>{t}</MonoTag>
              ))}
            </div>
          </div>

          {/* Architecture diagram (custom SVG-ish via grid) */}
          <div className="border border-border rounded-lg bg-[color:var(--surface)]/30 p-8 md:p-12 overflow-hidden">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-8">
              system architecture // hybrid retrieval pipeline
            </div>
            <div className="grid md:grid-cols-5 gap-3 items-stretch">
              {[
                { label: "Query", sub: "user input", icon: Sparkles },
                { label: "PageIndex", sub: "structural filter", icon: BookOpen },
                { label: "Vector RAG", sub: "embeddings", icon: Cpu },
                { label: "Reranker", sub: "fusion + score", icon: Workflow },
                { label: "Response", sub: "cited answer", icon: ArrowUpRight },
              ].map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative border border-border rounded-md p-4 bg-background"
                >
                  <node.icon className="w-4 h-4 text-[color:var(--accent)] mb-3" />
                  <div className="font-display font-medium text-sm">{node.label}</div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                    {node.sub}
                  </div>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-3 h-px bg-[color:var(--accent)]/40" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-px bg-border rounded-lg overflow-hidden border border-border">
            {[
              ["40%", "fewer irrelevant outputs"],
              ["Hybrid", "RAG + PageIndex"],
              ["Real-time", "FastAPI backend"],
              ["IEEE", "accepted paper"],
            ].map(([m, l]) => (
              <div key={l} className="bg-background p-6">
                <div className="font-display text-3xl md:text-4xl font-medium text-[color:var(--accent)]">
                  {m}
                </div>
                <div className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                  {l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-xl font-medium mb-3">The problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Legal corpora are vast, hierarchical, and brutal for pure vector retrieval - top-k
                results bury structure and surface noise. FIR workflows demand role-aware, cite-able
                answers, not vibes.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-medium mb-3">The approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                A hybrid retriever pairs vector RAG with PageIndex - a structural filter exploiting
                document hierarchy - and a reranker fuses both signals. Result: 40% fewer irrelevant
                outputs, with citations the user can audit.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------- Other Work --------------------------- */

const projects = [
  {
    name: "SmartServe",
    year: "2025",
    line: "Automated WhatsApp customer-support layer built on n8n workflows.",
    metric: "Real-time query resolution",
    stack: ["n8n", "WhatsApp API", "Webhooks"],
    icon: Workflow,
  },
  {
    name: "Stock Market Predictor",
    year: "2024",
    line: "ML + DL forecasting models for stock-trend direction with engineered features.",
    metric: "87% directional accuracy",
    stack: ["Python", "Scikit-learn", "Pandas", "NLTK"],
    icon: Cpu,
  },
  {
    name: "ETL @ HCL",
    year: "2024-25",
    line: "10+ production ETL pipelines on PySpark, SQL, Hadoop - daily 500K+ records.",
    metric: "30% processing lift",
    stack: ["PySpark", "SQL", "Hadoop"],
    icon: Database,
  },
];

function Work() {
  return (
    <section id="work" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionLabel index="03">Selected Work</SectionLabel>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative bg-background p-8 md:p-10 hover:bg-[color:var(--surface)]/50 transition-colors"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[color:var(--accent)] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="flex items-start justify-between mb-6">
                <p.icon className="w-5 h-5 text-[color:var(--accent)]" />
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <h3 className="font-display text-2xl font-medium mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
                {p.line}
              </p>
              <div className="font-mono text-xs text-[color:var(--accent)] mb-5">{p.metric}</div>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <MonoTag key={s}>{s}</MonoTag>
                ))}
              </div>
            </motion.article>
          ))}
          {/* Filler "more on github" card */}
          <motion.a
            href="https://github.com/Vanshaj089"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-background p-8 md:p-10 hover:bg-[color:var(--surface)]/50 transition-colors flex flex-col justify-between"
          >
            <Github className="w-5 h-5 text-[color:var(--accent)]" />
            <div>
              <div className="font-display text-2xl font-medium mb-2">More on GitHub</div>
              <div className="font-mono text-xs text-muted-foreground">vanshaj089</div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Experience ---------------------------- */

const experience = [
  {
    role: "Automation & Workflow Intern",
    company: "3PointOcypher Technologies",
    date: "May 2025 - Jul 2025",
    bullets: [
      "Shipped 15+ AI automation bots & API workflows, removing 60% of manual workload.",
      "Identified workflow bottlenecks; improved process execution by 35%.",
      "Integrated automation across 5+ business modules.",
    ],
    stack: ["n8n", "Python", "REST APIs"],
  },
  {
    role: "Data Engineering Trainee",
    company: "HCL Technologies",
    date: "Oct 2024 - Mar 2025",
    bullets: [
      "Engineered 10+ ETL pipelines, improving processing efficiency by 30%.",
      "Processed 500K+ records daily on PySpark, SQL, Hadoop with high data accuracy.",
      "Automated validation workflows; cut manual QA effort by 40%.",
    ],
    stack: ["PySpark", "SQL", "Hadoop", "ETL"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionLabel index="04">Experience</SectionLabel>
        <div className="space-y-px bg-border border border-border rounded-lg overflow-hidden">
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background p-8 md:p-10 grid md:grid-cols-[200px_1fr] gap-6"
            >
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {e.date}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                  <h3 className="font-display text-xl font-medium">{e.role}</h3>
                  <span className="text-muted-foreground">-</span>
                  <span className="text-[color:var(--accent)] font-mono text-sm">{e.company}</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-muted-foreground text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-[color:var(--accent)] mt-1.5 shrink-0">-</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <MonoTag key={s}>{s}</MonoTag>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Skills ----------------------------- */

const skillGroups = [
  {
    title: "Languages",
    items: [
      ["Python", "core"],
      ["SQL", "core"],
    ],
  },
  {
    title: "AI / ML",
    items: [
      ["Transformers", "core"],
      ["Scikit-learn", "core"],
      ["TensorFlow", "working"],
      ["NLP", "core"],
      ["OpenCV", "working"],
      ["Mediapipe", "working"],
    ],
  },
  {
    title: "Data & Backend",
    items: [
      ["FastAPI", "core"],
      ["PySpark", "working"],
      ["DuckDB", "working"],
      ["Pandas", "core"],
      ["NumPy", "core"],
      ["Hadoop", "working"],
    ],
  },
  {
    title: "Tooling",
    items: [
      ["Git", "core"],
      ["n8n", "core"],
      ["Jupyter", "core"],
      ["VS Code", "core"],
      ["PyCharm", "working"],
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionLabel index="05">Skills</SectionLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {skillGroups.map((g) => (
            <div key={g.title} className="bg-background p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
                {g.title}
              </div>
              <ul className="space-y-3">
                {g.items.map(([name, level]) => (
                  <li key={name} className="flex items-center justify-between">
                    <span className="text-sm">{name}</span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        level === "core"
                          ? "text-[color:var(--accent-foreground)] bg-[color:var(--accent)]"
                          : "text-muted-foreground border border-border"
                      }`}
                    >
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Research ----------------------------- */

function Research() {
  return (
    <section id="research" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionLabel index="06">Research & Recognition</SectionLabel>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="border border-border rounded-lg p-8 md:p-12 bg-[color:var(--surface)]/30"
        >
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-[color:var(--accent)] mt-1 shrink-0" />
            <div className="flex-1">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                IEEE - 2026
              </div>
              <h3
                className="font-display text-2xl md:text-3xl font-medium mb-3 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                NyayaSetu: Hybrid Retrieval for AI-Driven Legal Intelligence and FIR Automation
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Presents a hybrid retrieval architecture combining vector RAG with PageIndex
                structural filtering to reduce irrelevant outputs by 40% on legal corpora, paired
                with role-based FIR workflows powered by a FastAPI service layer.
              </p>
              <div className="mt-6 font-mono text-xs text-muted-foreground">
                Vanshaj Tiwari - accepted at IEEE for AI-driven legal intelligence
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden mt-px">
          {[
            { t: "IEEE Acceptance", s: "NyayaSetu, 2026", icon: BookOpen },
            { t: "National Innovation Award", s: "4th Place - Panipat, Haryana", icon: Award },
            { t: "Navonmesh Hackathon", s: "Finalist - AKTU, Lucknow", icon: Sparkles },
          ].map((a) => (
            <div key={a.t} className="bg-background p-6">
              <a.icon className="w-5 h-5 text-[color:var(--accent)] mb-4" />
              <div className="font-display font-medium">{a.t}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{a.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Education ----------------------------- */

function Education() {
  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionLabel index="07">Education</SectionLabel>
        <div className="space-y-px bg-border border border-border rounded-lg overflow-hidden">
          {[
            [
              "2022 - 2026",
              "B.Tech, Computer Science (AI & ML)",
              "Bansal Institute of Engineering and Technology, Lucknow",
              "CGPA 7.8 / 10",
            ],
            [
              "2021 - 2022",
              "Class XII - Science with Computer Science",
              "Kendriya Vidyalaya, Unnao, UP",
              "",
            ],
            ["2019 - 2020", "Class X", "Kendriya Vidyalaya, Unnao, UP", ""],
          ].map(([date, deg, school, note]) => (
            <div
              key={deg}
              className="bg-background p-6 grid md:grid-cols-[180px_1fr_auto] gap-4 items-start"
            >
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {date}
              </div>
              <div>
                <div className="font-display font-medium">{deg}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{school}</div>
              </div>
              {note && <div className="font-mono text-xs text-[color:var(--accent)]">{note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Contact ----------------------------- */

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "tiwarivanshaj089@gmail.com";
  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionLabel index="08">Contact</SectionLabel>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.02] tracking-tight">
              Let's build
              <br />
              something.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Open to AI Engineer / ML Engineer / Applied AI roles at startups and product teams.
              Available July 2026 - Remote-friendly - Usually reply within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 bg-[color:var(--accent)] text-[color:var(--accent-foreground)] font-mono text-sm px-5 py-3 rounded hover:opacity-90 transition-opacity"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "copied!" : email}
              </button>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded border border-border hover:border-foreground transition-colors"
              >
                <Mail className="w-4 h-4" /> Send email
              </a>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 bg-[color:var(--surface)]/40 space-y-5 font-mono text-xs">
            {[
              {
                label: "linkedin",
                value: "vanshaj-tiwari-3a599a247",
                href: "https://www.linkedin.com/in/vanshaj-tiwari-3a599a247",
                Icon: Linkedin,
              },
              {
                label: "github",
                value: "Vanshaj089",
                href: "https://github.com/Vanshaj089",
                Icon: Github,
              },
              { label: "phone", value: "+91 8299439877", href: "tel:+918299439877", Icon: Mail },
              { label: "resume", value: "Download PDF", href: "#", Icon: FileText },
            ].map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0 group"
              >
                <span className="text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" /> {label}
                </span>
                <span className="text-foreground group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-1">
                  {value} <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Footer ----------------------------- */

function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div>(c) 2026 Vanshaj Tiwari - Designed and built for the web</div>
        <div>// end of file</div>
      </div>
    </footer>
  );
}

/* ----------------------------- Portfolio --------------------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <NyayaSetu />
        <Work />
        <Experience />
        <Skills />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
