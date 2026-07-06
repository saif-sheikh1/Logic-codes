"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CalendarCheck,
  Check,
  ChevronDown,
  CirclePlay,
  Database,
  Globe2,
  Headphones,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  PhoneCall,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const navItems = ["Home", "Services", "Solutions", "Testimonials", "FAQ", "Contact"];

const demoVideoId = "aircAruvnKk";

const trustBadges = ["Secure Process", "Fast Delivery", "Enterprise Ready", "Dedicated Support"];

const painPoints = [
  "Teams spend hours repeating manual tasks that should already be automated.",
  "High-intent leads disappear because nobody responds fast enough.",
  "Customer support slows down when volume rises, and quality becomes inconsistent.",
  "Business data sits in scattered tools, making confident decisions harder.",
  "Workflows rely on people remembering every step instead of systems enforcing them.",
];

const services = [
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    items: ["Inbound Calling", "Outbound Calling", "Appointment Booking", "Lead Qualification", "CRM Integration"],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    items: ["Website Bots", "WhatsApp Bots", "Messenger Bots", "Instagram Bots", "Knowledge Base AI"],
  },
  {
    icon: Globe2,
    title: "Web Development",
    items: ["Corporate Websites", "Landing Pages", "Custom Dashboards", "Web Applications", "Funnels"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    items: ["Power BI", "Business Dashboards", "Sales Analytics", "Reports", "Predictions"],
  },
];

const steps = [
  "Research",
  "Business Analysis",
  "Strategy",
  "UI/UX Design",
  "Development",
  "AI Training",
  "Testing",
  "Deployment",
  "Continuous Optimization",
];

const testimonials = [
  {
    name: "Ayesha Rahman",
    company: "Nexora Health",
    role: "Operations Director",
    quote:
      "Logic Codes replaced our manual appointment flow with an AI calling system that books, qualifies, and updates our CRM without delays.",
    initials: "AR",
  },
  {
    name: "Daniel Brooks",
    company: "ScaleCart",
    role: "Founder",
    quote:
      "Their chatbot lifted our lead capture almost immediately. It feels polished, fast, and trained on the details our buyers actually ask about.",
    initials: "DB",
  },
  {
    name: "Mina Laurent",
    company: "Vertex Advisory",
    role: "Managing Partner",
    quote:
      "We finally have dashboards our leadership team trusts. The sales pipeline, projections, and support metrics are all clear in one place.",
    initials: "ML",
  },
  {
    name: "Omar Siddiqui",
    company: "Prime Estates",
    role: "CEO",
    quote:
      "Our response time went from hours to seconds. The AI agent handles first contact beautifully and hands off only the right prospects.",
    initials: "OS",
  },
  {
    name: "Sofia Chen",
    company: "BrightLedger",
    role: "Head of Growth",
    quote:
      "The funnel they built looks premium and converts. We booked more strategy calls in the first week than the previous month combined.",
    initials: "SC",
  },
  {
    name: "Marcus Hale",
    company: "Atlas Logistics",
    role: "VP Technology",
    quote:
      "Clean execution from discovery to launch. The team understood our workflows, automated the repetitive parts, and kept everything measurable.",
    initials: "MH",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$1,500+",
    description: "For teams that need a focused automation or landing page launched fast.",
    features: ["Strategy call", "Single AI workflow", "Landing page or chatbot", "Basic analytics", "14-day support"],
  },
  {
    name: "Growth",
    price: "$4,500+",
    description: "For businesses ready to automate lead capture, support, and reporting.",
    features: ["Full automation roadmap", "AI voice or chatbot system", "CRM integration", "Conversion landing page", "Dashboard setup", "30-day optimization"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For advanced teams that need custom software, AI training, and scale.",
    features: ["Custom architecture", "Multiple AI agents", "API and database design", "Security review", "Dedicated delivery team", "Ongoing optimization"],
  },
];

const faqs = [
  {
    question: "How quickly can Logic Codes launch an AI automation system?",
    answer:
      "Most focused projects launch in two to four weeks. Larger platforms, custom dashboards, or multi-channel AI agents are scoped after discovery.",
  },
  {
    question: "Can the AI connect with our CRM and existing tools?",
    answer:
      "Yes. We commonly integrate CRMs, calendars, websites, phone systems, analytics tools, n8n, Zapier, and custom REST APIs.",
  },
  {
    question: "Do you build both the AI and the website experience?",
    answer:
      "Yes. We design the full conversion path: landing pages, chatbots, voice agents, dashboards, automations, and backend systems.",
  },
  {
    question: "What platforms do you use for voice AI?",
    answer:
      "Depending on the use case, we work with OpenAI, ElevenLabs, Twilio, Vapi, Deepgram, and custom orchestration layers.",
  },
  {
    question: "Is support included after launch?",
    answer:
      "Every package includes launch support. Growth and Enterprise clients can add ongoing optimization, monitoring, and new automation sprints.",
  },
];

const logos = ["OpenAI", "ElevenLabs", "Twilio", "Vapi", "Deepgram", "n8n", "Zapier", "Prisma"];

const techStack = [
  {
    icon: Layers3,
    title: "Frontend",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "GSAP"],
  },
  {
    icon: Database,
    title: "Backend",
    items: ["NestJS", "PostgreSQL", "Prisma", "JWT", "Redis", "REST API"],
  },
  {
    icon: BrainCircuit,
    title: "AI",
    items: ["OpenAI", "ElevenLabs", "Twilio", "Vapi", "Deepgram"],
  },
  {
    icon: Workflow,
    title: "Automation",
    items: ["n8n", "Zapier", "CRM Workflows", "Lead Routing", "Reporting Pipelines"],
  },
];

const contactFields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { id: "company", label: "Company", type: "text", placeholder: "Company name" },
  { id: "budget", label: "Project Budget", type: "text", placeholder: "$1,500 - $10,000+" },
];

const ctaBenefits: { label: string; icon: LucideIcon }[] = [
  { label: "15-minute fit check", icon: CalendarCheck },
  { label: "AI and software roadmap", icon: BrainCircuit },
  { label: "Clear next-step proposal", icon: ShieldCheck },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

function sectionVariant(delay = 0) {
  return {
    initial: { opacity: 0, y: 42 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.7, delay },
  };
}

function MagneticButton({
  children,
  className,
  href = "#contact",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18 });
  const springY = useSpring(y, { stiffness: 240, damping: 18 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`button-ripple inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-black shadow-button transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/60 ${className ?? ""}`}
    >
      {children}
    </motion.a>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const tween = gsap.fromTo(
      ref.current,
      { textContent: 0 },
      {
        textContent: value,
        duration: 2,
        ease: "power3.out",
        snap: { textContent: 1 },
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      },
    );
    return () => {
      tween.kill();
    };
  }, [value]);

  return (
    <>
      <span ref={ref}>0</span>
      {suffix}
    </>
  );
}

function FAQItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="glass rounded-lg">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-extrabold text-white sm:px-7"
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-mist transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-mist sm:px-7">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useTransform(mouseX, [0, 1], ["10%", "90%"]);
  const glowY = useTransform(mouseY, [0, 1], ["5%", "80%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".parallax-glow", {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus("submitting");

    try {
      const formData = new FormData(form);
      const response = await fetch("/api/strategy-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-luxury"
      onMouseMove={(event) => {
        mouseX.set(event.clientX / window.innerWidth);
        mouseY.set(event.clientY / window.innerHeight);
      }}
    >
      <div className="noise" />
      <motion.div
        className="parallax-glow pointer-events-none fixed z-0 h-[34rem] w-[34rem] rounded-full bg-electric/25 blur-[130px]"
        style={{ left: glowX, top: glowY, translateX: "-50%", translateY: "-50%" }}
      />
      <div className="pointer-events-none fixed left-0 top-0 z-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative z-10">
        <div className="bg-electric px-4 py-3 text-center text-sm font-extrabold text-white">
          <Rocket className="mr-2 inline h-4 w-4" aria-hidden="true" />
          Transform Your Business with AI Automation - Book a FREE Strategy Call Today
        </div>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050318]/82 backdrop-blur-2xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
            <a href="#home" className="flex items-center gap-3" aria-label="Logic Codes home">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white text-sm font-black text-black shadow-button">
                LC
              </span>
              <span className="text-lg font-black tracking-wide">Logic Codes</span>
            </a>

            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold text-mist transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <MagneticButton className="min-h-11 px-5 py-2.5" href="#contact">
                Book a Call <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MagneticButton>
            </div>

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {menuOpen ? (
            <div className="border-t border-white/10 bg-[#050318]/96 px-5 py-5 lg:hidden">
              <div className="mx-auto grid max-w-7xl gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg border border-white/10 px-4 py-3 text-sm font-bold text-mist"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </header>

        <section id="home" className="mx-auto max-w-7xl scroll-mt-28 px-5 pb-16 pt-8 text-center sm:pt-12 lg:px-8 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl"
          >
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-black tracking-[0.22em] text-white shadow-glow">
              <Sparkles className="h-4 w-4 text-periwinkle" aria-hidden="true" />
              AI AUTOMATION AGENCY
            </div>
            <h1 className="text-balance text-4xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-6xl xl:text-7xl">
              Scale Your Business with AI That Works 24/7
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-mist sm:text-xl">
              We build AI Voice Agents, AI Chatbots, Intelligent Websites, and Data Analytics solutions that automate
              operations, capture leads, and increase revenue.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href="#contact" className="w-full sm:w-auto">
                Book Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MagneticButton>
              <a
                href="#demo"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                <CirclePlay className="h-5 w-5 text-periwinkle" aria-hidden="true" />
                Watch Demo
              </a>
            </div>
          </motion.div>

          <motion.div
            id="demo"
            {...sectionVariant(0.1)}
            className="glass relative mx-auto mt-6 max-w-5xl overflow-hidden rounded-lg p-2 shadow-glow"
          >
            <div className="absolute inset-x-12 -top-10 h-24 rounded-full bg-electric/35 blur-3xl" />
            <div className="relative aspect-video overflow-hidden rounded-md bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${demoVideoId}?rel=0&modestbranding=1`}
                title="Logic Codes AI automation demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div {...sectionVariant(0.15)} className="mt-9">
            <div className="flex items-center justify-center gap-1 text-periwinkle" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-2 text-sm font-extrabold text-white">120+ Client Reviews</p>
            <div className="mx-auto mt-7 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {trustBadges.map((badge) => (
                <div key={badge} className="glass rounded-lg px-3 py-3 text-sm font-bold text-mist">
                  <Check className="mr-2 inline h-4 w-4 text-periwinkle" aria-hidden="true" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-5" aria-label="Technology partners">
          <div className="marquee flex w-[200%] items-center gap-8">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex min-w-40 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-black text-mist"
              >
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8 lg:py-32">
          <motion.div {...sectionVariant()} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-periwinkle">About Logic Codes</p>
              <h2 className="mt-5 text-balance text-4xl font-black leading-tight sm:text-5xl">
                Why Most Businesses Struggle to Scale
              </h2>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="glass rounded-lg p-5">
                  <p className="text-3xl font-black">
                    <Counter value={24} />/7
                  </p>
                  <p className="mt-2 text-xs font-bold text-mist">Automated coverage</p>
                </div>
                <div className="glass rounded-lg p-5">
                  <p className="text-3xl font-black">
                    <Counter value={3} />x
                  </p>
                  <p className="mt-2 text-xs font-bold text-mist">Faster response</p>
                </div>
                <div className="glass rounded-lg p-5">
                  <p className="text-3xl font-black">
                    <Counter value={120} />+
                  </p>
                  <p className="mt-2 text-xs font-bold text-mist">Client reviews</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-lg leading-9 text-mist">
              <p>
                Growth rarely breaks because the offer is weak. It breaks because the operation behind the offer is
                overloaded. Leads wait too long. Support gets buried. Sales teams chase cold prospects while warm buyers
                slip through the cracks.
              </p>
              <div className="grid gap-4">
                {painPoints.map((point) => (
                  <div key={point} className="glass rounded-lg p-5">
                    <Check className="mr-3 inline h-5 w-5 text-periwinkle" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-black leading-9 text-white">That&apos;s where Logic Codes comes in.</p>
              <p>
                We design AI systems around the revenue moments that matter: answering instantly, qualifying accurately,
                booking cleanly, routing requests, reporting performance, and keeping every customer interaction
                consistent. The result is a business that feels sharper, faster, and easier to run.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8">
          <motion.div {...sectionVariant()} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-periwinkle">Services</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Premium AI and Software Systems</h2>
            <p className="mt-5 text-lg leading-8 text-mist">
              Built for companies that want cleaner operations, faster lead response, and measurable growth.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  {...sectionVariant(index * 0.05)}
                  className="glass group rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-periwinkle/45 hover:bg-white/[0.085]"
                >
                  <div className="mb-8 grid h-14 w-14 place-items-center rounded-lg bg-electric/[0.16] text-periwinkle shadow-glow">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <div className="mt-6 space-y-3">
                    {service.items.map((item) => (
                      <p key={item} className="flex items-center gap-3 text-sm font-bold text-mist">
                        <span className="h-1.5 w-1.5 rounded-full bg-periwinkle shadow-[0_0_18px_rgba(90,92,255,.8)]" />
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div {...sectionVariant()} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-periwinkle">Technology Stack</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Built on Reliable Modern Infrastructure</h2>
            <p className="mt-5 text-lg leading-8 text-mist">
              Every engagement is designed around the right mix of frontend, backend, AI, and automation tools.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {techStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <motion.div key={stack.title} {...sectionVariant(index * 0.05)} className="glass rounded-lg p-6">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg bg-white text-black shadow-button">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black">{stack.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-extrabold text-mist">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div {...sectionVariant()} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-periwinkle">How We Work</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">A Clear Path from Idea to Automation</h2>
          </motion.div>

          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-periwinkle to-transparent sm:block" />
            {steps.map((step, index) => (
              <motion.div key={step} {...sectionVariant(index * 0.035)} className="relative mb-5 flex gap-5 sm:gap-8">
                <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white text-sm font-black text-black shadow-button">
                  {index + 1}
                </div>
                <div className="glass flex min-h-16 flex-1 items-center justify-between rounded-lg px-5 py-4">
                  <p className="text-lg font-black">{step}</p>
                  {index < steps.length - 1 ? <ArrowRight className="h-5 w-5 rotate-90 text-periwinkle" aria-hidden="true" /> : <Check className="h-5 w-5 text-periwinkle" aria-hidden="true" />}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8">
          <motion.div {...sectionVariant()} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-periwinkle">Testimonials</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Trusted by Teams Ready to Move Faster</h2>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                {...sectionVariant(index * 0.04)}
                className="glass rounded-lg p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <div className="flex text-periwinkle" aria-label="Five star testimonial rating">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-6 min-h-32 text-base leading-8 text-mist">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-white to-periwinkle text-sm font-black text-black">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-black text-white">{testimonial.name}</p>
                    <p className="text-sm font-bold text-mist">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8">
          <motion.div {...sectionVariant()} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-periwinkle">Packages</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Choose Your Automation Sprint</h2>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {packages.map((plan, index) => (
              <motion.div
                key={plan.name}
                {...sectionVariant(index * 0.05)}
                className={`glass relative rounded-lg p-7 transition hover:-translate-y-2 ${
                  plan.featured ? "border-periwinkle/70 bg-white/[0.09] shadow-glow lg:scale-105" : ""
                }`}
              >
                {plan.featured ? (
                  <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-black text-black">
                    Most Popular
                  </div>
                ) : null}
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-4 text-4xl font-black">{plan.price}</p>
                <p className="mt-5 min-h-20 text-sm leading-7 text-mist">{plan.description}</p>
                <div className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <p key={feature} className="flex items-center gap-3 text-sm font-bold text-mist">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-periwinkle" aria-hidden="true" />
                      {feature}
                    </p>
                  ))}
                </div>
                <MagneticButton className="mt-8 w-full" href="#contact">
                  Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl scroll-mt-28 px-5 py-24 lg:px-8">
          <motion.div {...sectionVariant()} className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-periwinkle">FAQ</p>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Questions Before We Build?</h2>
          </motion.div>
          <motion.div {...sectionVariant(0.08)} className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 lg:px-8">
          <motion.div
            {...sectionVariant()}
            className="glass relative overflow-hidden rounded-lg px-6 py-16 shadow-glow sm:px-10 lg:px-12 lg:py-16"
          >
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-electric/30 blur-[90px]" />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="text-center lg:text-left">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-periwinkle">Final CTA</p>
                <h2 className="mt-5 text-balance text-4xl font-black leading-tight sm:text-6xl">
                  Ready to Automate Your Business?
                </h2>
                <p className="mt-6 text-lg leading-8 text-mist">
                  Book a strategy call and we&apos;ll map the fastest path from manual work to measurable automation.
                </p>
                <div className="mt-8 grid gap-4 text-left">
                  {ctaBenefits.map(({ label, icon: Icon }) => {
                    return (
                      <div key={label} className="flex items-center gap-3 text-sm font-extrabold text-mist">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {label}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <MagneticButton className="w-full sm:w-auto" href="#lead-form">
                    Book Strategy Call <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </MagneticButton>
                  <a
                    href="#demo"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.07] px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.12] sm:w-auto"
                  >
                    <CirclePlay className="h-5 w-5 text-periwinkle" aria-hidden="true" />
                    Schedule Demo
                  </a>
                </div>
              </div>

              <form
                id="lead-form"
                className="rounded-lg border border-white/10 bg-[#090620]/80 p-5 text-left shadow-glow sm:p-6"
                onSubmit={handleLeadSubmit}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-black">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black">Request Your Free Strategy Call</h3>
                    <p className="mt-1 text-sm text-mist">We&apos;ll reply with available times and a short project checklist.</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {contactFields.map((field) => (
                    <label key={field.id} className="grid gap-2 text-sm font-extrabold text-white" htmlFor={field.id}>
                      {field.label}
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        className="min-h-12 rounded-lg border border-white/10 bg-white/[0.055] px-4 text-sm font-bold text-white outline-none transition placeholder:text-mist/55 focus:border-periwinkle"
                      />
                    </label>
                  ))}
                </div>
                <label className="mt-4 grid gap-2 text-sm font-extrabold text-white" htmlFor="message">
                  What do you want to automate?
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your lead flow, support process, dashboards, or software idea."
                    className="resize-none rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-bold leading-6 text-white outline-none transition placeholder:text-mist/55 focus:border-periwinkle"
                  />
                </label>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="button-ripple mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-black shadow-button transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Request"} <Send className="h-4 w-4" aria-hidden="true" />
                </button>
                {formStatus === "success" ? (
                  <p className="mt-4 rounded-lg border border-periwinkle/35 bg-periwinkle/10 px-4 py-3 text-sm font-bold text-white">
                    Thanks. Your strategy call request has been received. Logic Codes will follow up with next steps.
                  </p>
                ) : null}
                {formStatus === "error" ? (
                  <p className="mt-4 rounded-lg border border-red-400/35 bg-red-500/10 px-4 py-3 text-sm font-bold text-white">
                    Something went wrong. Please email hello@logiccodes.ai or try again in a moment.
                  </p>
                ) : null}
              </form>
            </div>

            <div className="float-card absolute bottom-5 left-5 hidden rounded-lg border border-white/10 bg-panel/80 p-4 text-left backdrop-blur xl:block">
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-periwinkle" aria-hidden="true" />
                <span className="text-sm font-black">AI agent online</span>
              </div>
              <p className="mt-2 text-xs text-mist">Qualifying leads while your team focuses.</p>
            </div>
            <div className="float-card absolute right-5 top-5 hidden rounded-lg border border-white/10 bg-panel/80 p-4 text-left backdrop-blur xl:block">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-periwinkle" aria-hidden="true" />
                <span className="text-sm font-black">Workflow live</span>
              </div>
              <p className="mt-2 text-xs text-mist">CRM, calendar, reports, and follow-up synced.</p>
            </div>
          </motion.div>
        </section>

        <section id="privacy" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <motion.div {...sectionVariant()} className="glass rounded-lg p-6">
              <h2 className="text-2xl font-black">Privacy Policy</h2>
              <p className="mt-4 text-sm leading-7 text-mist">
                Logic Codes only collects the details you submit through the consultation form so we can respond to your
                project request. We do not sell visitor information, and client data is handled through secure project
                workspaces and approved business tools.
              </p>
            </motion.div>
            <motion.div {...sectionVariant(0.05)} id="terms" className="glass scroll-mt-28 rounded-lg p-6">
              <h2 className="text-2xl font-black">Terms</h2>
              <p className="mt-4 text-sm leading-7 text-mist">
                Website content is provided for general information. Project timelines, pricing, and deliverables are
                finalized after discovery and written approval. All custom software, AI workflows, and integrations are
                scoped to your business requirements.
              </p>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.4fr_1fr] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-sm font-black text-black">LC</span>
                <span className="text-lg font-black">Logic Codes</span>
              </div>
              <p className="mt-3 text-sm text-mist">AI automation and software development for scalable operations.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-bold text-mist md:justify-center">
              <a href="#home" className="transition hover:text-white">Home</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#privacy" className="transition hover:text-white">Privacy Policy</a>
              <a href="#terms" className="transition hover:text-white">Terms</a>
            </div>
            <div className="flex gap-3 md:justify-end">
              {[BrainCircuit, MessageCircle, Zap].map((Icon, index) => (
                <a
                  key={index}
                  href="#contact"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-mist transition hover:bg-white hover:text-black"
                  aria-label={`Logic Codes social link ${index + 1}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-7xl text-sm text-mist">Copyright 2026 Logic Codes. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
