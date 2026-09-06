import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Copy,
  Github,
  Globe2,
  Layers3,
  Menu,
  Network,
  Play,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const GITHUB_URL = "https://github.com/indranilbanerjee/digital-marketing-pro";

const capabilities = [
  {
    icon: Search,
    number: "01",
    title: "Build the strategy",
    text: "Turn business context into a measurable marketing system with brand, audience, channel, and KPI intelligence in one flow.",
    tags: ["SEO", "AEO / GEO", "CRO"],
  },
  {
    icon: Bot,
    number: "02",
    title: "Put specialists to work",
    text: "Coordinate 24 role-based agents for content, media, analytics, CRM, PR, growth, localization, and more.",
    tags: ["24 agents", "163 skills", "WAT framework"],
  },
  {
    icon: Radio,
    number: "03",
    title: "Ship with confidence",
    text: "Use deterministic scripts, approvals, quality gates, and performance loops to move from recommendation to execution.",
    tags: ["QA gates", "Approvals", "Performance loops"],
  },
];

const experienceServices = [
  {
    icon: Globe2,
    title: "Experience design",
    text: "User experience, interface systems, and prototypes shaped around the meeting point of user, business, and technical requirements.",
    note: "UX / UI / product thinking",
  },
  {
    icon: Code2,
    title: "Websites & applications",
    text: "Web and application experiences that turn a first impression into a clear, useful, and memorable path through the brand.",
    note: "Web experiences / application surfaces",
  },
  {
    icon: Sparkles,
    title: "Visual communication",
    text: "Graphic design and marketing collateral that make campaigns, launches, and brand systems feel consistent wherever they show up.",
    note: "Brand / digital / print",
  },
  {
    icon: Terminal,
    title: "Corporate presentations",
    text: "Structured visual narratives that give teams the clarity and confidence to communicate important ideas with impact.",
    note: "Story / structure / persuasion",
  },
];

const serviceOffers = [
  {
    icon: Search,
    title: "SEO content systems",
    text: "Keyword research, search-led content planning, on-page optimization, technical recommendations, and performance reporting built around measurable growth.",
    tags: ["SEO", "Content strategy", "Analytics"],
  },
  {
    icon: Sparkles,
    title: "AI content operations",
    text: "AI-assisted workflows for briefs, blogs, product copy, campaigns, and review loops — faster production without losing voice, quality, or control.",
    tags: ["Gen AI", "Workflows", "Quality gates"],
  },
  {
    icon: Globe2,
    title: "E-commerce content",
    text: "Product descriptions, category content, merchandising copy, promotional campaigns, and structured content systems for large catalogs and digital storefronts.",
    tags: ["Product copy", "Catalogs", "Conversion"],
  },
  {
    icon: Code2,
    title: "AI-driven apps & automation",
    text: "Lean digital tools, dashboards, and internal apps that connect content, data, and repeatable processes into a more useful operating layer.",
    tags: ["Vibe coding", "App concepts", "Automation"],
  },
  {
    icon: Radio,
    title: "Conversion copy & campaigns",
    text: "Website copy, email campaigns, social content, launch messaging, sales enablement, and product storytelling designed to move audiences to action.",
    tags: ["Copywriting", "Email", "Social"],
  },
  {
    icon: ShieldCheck,
    title: "Research-led technical content",
    text: "Clear, compliant content for complex topics across SaaS, cloud, AI, finance, banking, engineering, and other specialist industries.",
    tags: ["B2B", "Compliance", "Thought leadership"],
  },
];

const modules = [
  "Content engine",
  "Campaign orchestration",
  "Paid advertising",
  "Analytics & insights",
  "Audience intelligence",
  "Marketing automation",
  "Technical SEO",
  "Growth engineering",
];

const workflow = [
  { label: "Context", detail: "Brand, market, audience", color: "blue" },
  { label: "Strategy", detail: "Priorities and KPIs", color: "violet" },
  { label: "Execution", detail: "Content and campaigns", color: "orange" },
  { label: "Learning", detail: "Measure and improve", color: "mint" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [demoRunning, setDemoRunning] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const copyInstall = async () => {
    await navigator.clipboard?.writeText("git clone https://github.com/indranilbanerjee/digital-marketing-pro.git");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const runDemo = () => {
    setDemoRunning(true);
    window.setTimeout(() => setDemoRunning(false), 2200);
  };

  return (
    <main className="site-shell">
      <div className="grain" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Digital Marketing Pro home">
            <span className="brand-mark"><Sparkles size={17} strokeWidth={2.5} /></span>
            <span>digital marketing <b>pro</b></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            <a href="#system" onClick={() => setMenuOpen(false)}>The system</a>
            <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
            <a href="#workflow" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#docs" onClick={() => setMenuOpen(false)}>Docs</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-small button-dark" href="#get-started">Get started <ArrowRight size={15} /></a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal="up">
            <div className="eyebrow"><span className="pulse-dot" /> Prism Technosys / marketing intelligence, reassembled</div>
            <h1>Make every marketing move <em>deliberate.</em></h1>
            <p className="hero-lede">Digital Marketing Pro is an AI operating system for modern growth teams — pairing specialized agents and execution tools with the experience design needed to turn strategy into a product people can use.</p>
            <div className="hero-actions" id="get-started">
              <a className="button button-primary" href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={17} /> Explore the repo <ArrowRight size={16} /></a>
              <button className="button button-quiet" onClick={copyInstall}>{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied" : "Copy install command"}</button>
            </div>
            <div className="hero-footnote"><ShieldCheck size={15} /> MIT licensed <span>·</span> Built for Claude Code, Codex, Cursor, and more</div>
          </div>
          <div className="hero-visual" data-reveal="scale" data-reveal-delay="2" aria-label="A visual map of the marketing operating system">
            <div className="visual-topline"><span><CircleDot size={13} /> SYSTEM STATUS</span><span className="status-live">● LIVE</span></div>
            <div className="visual-core">
              <div className="core-ring ring-outer" />
              <div className="core-ring ring-middle" />
              <div className="core-center"><Sparkles size={27} /><span>MARKETING<br /><b>OS</b></span></div>
              <span className="orbit-label label-top"><span className="mini-node blue" /> Strategy</span>
              <span className="orbit-label label-right"><span className="mini-node orange" /> Activation</span>
              <span className="orbit-label label-bottom"><span className="mini-node mint" /> Intelligence</span>
              <span className="orbit-label label-left"><span className="mini-node violet" /> Brand</span>
            </div>
            <div className="visual-command"><span className="command-prompt">›</span><span className="command-text">/dmp campaign-plan --brand acme</span><span className="command-cursor" /></div>
            <div className="visual-metrics"><div><span className="metric-label">ACTIVE AGENTS</span><strong>24</strong></div><div><span className="metric-label">SKILLS LOADED</span><strong>163</strong></div><div><span className="metric-label">WORKFLOW</span><strong className="green-text">READY</strong></div></div>
          </div>
        </div>
        <div className="container hero-ticker"><span>Built around the WAT framework</span><i /> <span>Workflows</span><ChevronRight size={14} /><span>Agents</span><ChevronRight size={14} /><span>Tools</span><i /> <span>From strategy to signal</span></div>
      </section>

      <section className="stats-strip" data-reveal="fade">
        <div className="container stats-grid">
          <div><strong>163</strong><span>reusable skills</span></div>
          <div><strong>24</strong><span>specialist agents</span></div>
          <div><strong>16</strong><span>marketing modules</span></div>
          <div><strong>530<span className="plus">+</span></strong><span>files of field knowledge</span></div>
          <div className="stats-aside"><span className="label-mono">VERSION</span><b>3.31.1</b><span className="version-pill">LATEST</span></div>
        </div>
      </section>

      <section className="section system-section" id="system" data-reveal="up">
        <div className="container">
          <div className="section-heading split-heading"><div><span className="section-kicker">01 / A complete system</span><h2>Not another prompt pack.<br /><span>A marketing operating system.</span></h2></div><p>Most AI tools give you a blank chat box. Digital Marketing Pro gives your team a shared context, a set of proven motions, and the specialists to carry them through.</p></div>
          <div className="wat-grid">
            <div className="wat-card wat-workflows" data-reveal="up" data-reveal-delay="0"><span className="wat-number">W</span><div className="wat-icon"><Layers3 size={23} /></div><h3>Workflows</h3><p>Structured paths for strategy, planning, execution, and learning — so good work compounds instead of disappearing in a thread.</p><a href="#workflow">Explore workflows <ArrowRight size={15} /></a></div>
            <div className="wat-card wat-agents" data-reveal="up" data-reveal-delay="1"><span className="wat-number">A</span><div className="wat-icon"><Network size={23} /></div><h3>Agents</h3><p>Role-based specialists that think in context. From SEO and content to CRM, paid media, and market intelligence.</p><a href="#capabilities">Meet the agents <ArrowRight size={15} /></a></div>
            <div className="wat-card wat-tools" data-reveal="up" data-reveal-delay="2"><span className="wat-number">T</span><div className="wat-icon"><Code2 size={23} /></div><h3>Tools</h3><p>Deterministic scripts for the work that needs to be repeatable, auditable, and ready to plug into your operating rhythm.</p><a href="#docs">Browse the tools <ArrowRight size={15} /></a></div>
          </div>
        </div>
      </section>

      <section className="section capabilities-section" id="capabilities" data-reveal="up">
        <div className="container">
          <div className="section-heading"><span className="section-kicker">02 / Designed for the whole loop</span><h2>Think clearly. Ship faster.<br /><span>Learn continuously.</span></h2></div>
          <div className="capability-list">
            {capabilities.map(({ icon: Icon, number, title, text, tags }, index) => <article className="capability-row" data-reveal="right" data-reveal-delay={index} key={number}><div className="cap-number">{number}</div><div className="cap-icon"><Icon size={22} /></div><div className="cap-main"><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><ArrowRight className="row-arrow" size={21} /></article>)}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="workflow" data-reveal="fade">
        <div className="container workflow-layout">
          <div className="workflow-copy"><span className="section-kicker warm-kicker">03 / The operating rhythm</span><h2>A loop that gets <em>smarter</em> every time.</h2><p>Start with signal. Move through strategy, activation, and measurement. Bring what you learn back into the system. That’s how AI becomes an advantage, not just an assistant.</p><button className="button button-light" onClick={runDemo}>{demoRunning ? <><span className="button-spinner" /> Running workflow</> : <><Play size={15} fill="currentColor" /> Run a sample workflow</>}</button></div>
          <div className="workflow-map">
            {workflow.map((step, index) => <div className="workflow-step" key={step.label}><div className={`workflow-node ${step.color}`}><span>0{index + 1}</span></div><div><strong>{step.label}</strong><span>{step.detail}</span></div>{index < workflow.length - 1 && <div className="workflow-line" />}</div>)}
            <div className="workflow-loop"><Zap size={14} /> repeat with better context</div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience" data-reveal="up">
        <div className="container experience-layout">
          <div className="experience-intro"><span className="section-kicker">04 / The experience layer</span><h2>Strategy is stronger when it <em>looks and feels</em> right.</h2><p>Prism Technosys brings a design and delivery lens to the system: thoughtful UX, expressive UI, useful websites, application surfaces, visual communication, and presentations that help ideas land.</p><div className="experience-rule"><span /><small>USER + BUSINESS + TECHNICAL REQUIREMENTS</small></div></div>
          <div className="experience-grid">{experienceServices.map(({ icon: Icon, title, text, note }, index) => <article className="experience-card" data-reveal="up" data-reveal-delay={index} key={title}><div className="experience-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><span>{note}</span></article>)}</div>
        </div>
      </section>

      <section className="section services-section" id="services" data-reveal="up">
        <div className="container">
          <div className="section-heading services-heading"><div><span className="section-kicker">05 / What we can offer</span><h2>Content, systems, and <span>the work between them.</span></h2></div><p>Bring a focused brief or a bigger operating challenge. These services combine strategic thinking, practical delivery, and AI-enabled execution.</p></div>
          <div className="service-offer-grid">{serviceOffers.map(({ icon: Icon, title, text, tags }, index) => <article className="service-offer-card" data-reveal="up" data-reveal-delay={index % 3} key={title}><div className="service-offer-top"><span className="service-index">0{index + 1}</span><div className="service-offer-icon"><Icon size={19} /></div></div><h3>{title}</h3><p>{text}</p><div className="service-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
          <div className="service-bottom-line"><span>ENGAGEMENTS CAN START WITH A SINGLE CONTENT SPRINT OR A FULL DIGITAL GROWTH SYSTEM</span><a className="text-link" href="#docs">Start a conversation <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section className="section modules-section" data-reveal="up">
        <div className="container modules-layout">
          <div><span className="section-kicker">06 / Your team, amplified</span><h2>One system.<br /><span>Every growth motion.</span></h2><p className="modules-intro">Go deep where you need to, then connect the dots across the funnel. Each module arrives with its own skills, references, and execution patterns.</p><a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer">See everything in GitHub <ArrowUpRightIcon /></a></div>
          <div className="module-cloud">{modules.map((module, index) => <div className={`module-chip chip-${index + 1}`} key={module}><span className="chip-index">0{index + 1}</span>{module}</div>)}<div className="module-orb"><Sparkles size={20} /><span>GROWTH<br /><b>GRAPH</b></span></div></div>
        </div>
      </section>

      <section className="section docs-section" id="docs" data-reveal="up">
        <div className="container docs-card"><div className="docs-copy"><span className="section-kicker">07 / Start where you are</span><h2>Your next best<br /><span>marketing move</span> is waiting.</h2><p>Clone the open-source repo, bring your brand context, and let the system do the heavy lifting. No black box. No lock-in.</p><a className="button button-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">Read the documentation <ArrowRight size={16} /></a></div><div className="terminal"><div className="terminal-bar"><span className="terminal-dots"><i /><i /><i /></span><span>terminal</span><span className="terminal-path">~/projects</span></div><div className="terminal-body"><div><span className="terminal-muted">$</span> git clone <span className="terminal-accent">github.com/indranilbanerjee/digital-marketing-pro</span></div><div><span className="terminal-muted">$</span> cd digital-marketing-pro</div><div><span className="terminal-muted">$</span> /dmp <span className="terminal-accent">brand-setup</span></div><div className="terminal-result"><Check size={14} /> Brand intelligence loaded</div><div className="terminal-result"><Check size={14} /> Agent team standing by</div><div className="terminal-result"><Check size={14} /> Ready to make your next move<span className="blink-cursor">▍</span></div></div></div></div>
      </section>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><Sparkles size={17} strokeWidth={2.5} /></span><span>digital marketing <b>pro</b></span></a><p>AI marketing systems and experience design for teams that want to move with intent.</p></div><div className="footer-links"><div><span>Explore</span><a href="#system">The system</a><a href="#capabilities">Capabilities</a><a href="#experience">Experience layer</a><a href="#services">Services</a></div><div><span>Resources</span><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub repository</a><a href={`${GITHUB_URL}#readme`} target="_blank" rel="noreferrer">Documentation</a><a href={`${GITHUB_URL}/blob/main/LICENSE`} target="_blank" rel="noreferrer">MIT license</a></div></div></div><div className="container footer-bottom"><span>© 2026 Digital Marketing Pro</span><span>Built in public <span className="footer-dot">●</span> for modern growth teams</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={15} className="arrow-up-right" />;
}

export default Home;
