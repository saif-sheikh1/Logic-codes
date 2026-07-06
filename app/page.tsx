"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  Check,
  ChevronDown,
  Globe2,
  Headphones,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  PhoneCall,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  X,
  Zap,
} from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const serviceGroups = [
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    summary: "Human-like phone agents that qualify, route, and book customers around the clock.",
    items: [
      "Inbound Calling",
      "Outbound Calling",
      "Appointment Booking",
      "Lead Qualification",
      "CRM Integration",
    ],
  },
  {
    icon: MessageCircle,
    title: "AI Chatbots",
    summary: "Conversion-ready chat experiences for every channel your buyers already use.",
    items: [
      "Website Bots",
      "WhatsApp Bots",
      "Messenger Bots",
      "Instagram Bots",
      "Knowledge Base AI",
    ],
  },
  {
    icon: Globe2,
    title: "Web Development",
    summary: "Premium websites, dashboards, apps, and funnels engineered for speed and trust.",
    items: [
      "Corporate Websites",
      "Landing Pages",
      "Custom Dashboards",
      "Web Applications",
      "Funnels",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    summary: "Executive dashboards and prediction systems that make the next move obvious.",
    items: ["Power BI", "Business Dashboards", "Sales Analytics", "Reports", "Predictions"],
  },
];

const processSteps = [
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
    name: "Ava Mitchell",
    company: "Northline Health",
    role: "Operations Director",
    quote:
      "Logic Codes replaced our slow intake process with an AI agent that books qualified appointments before our team even opens the dashboard.",
    initials: "AM",
  },
  {
    name: "Daniel Brooks",
    company: "Atlas Realty Group",
    role: "Managing Partner",
    quote:
      "We stopped losing after-hours leads. The chatbot and voice workflow now captures, qualifies, and syncs every inquiry into our CRM.",
    initials: "DB",
  },
  {
    name: "Maya Khan",
    company: "BrightCart",
    role: "Founder",
    quote:
      "The landing page and automation stack felt premium from day one. More importantly, it turned traffic into booked calls.",
    initials: "MK",
  },
  {
    name: "Ethan Price",
    company: "Vertex Legal",
    role: "Client Success Lead",
    quote:
      "Their team understood the business problem first, then built AI around it. The result is reliable, measured, and easy to improve.",
    initials: "EP",
  },
  {
    name: "Sofia Reyes",
    company: "Luxe Dental Studio",
    role: "Practice Owner",
    quote:
      "Our front desk workload dropped immediately. Patients get answers, confirmations, and reminders without waiting on hold.",
    initials: "SR",
  },
  {
    name: "Noah Carter",
    company: "ScaleForge",
    role: "CEO",
    quote:
      "Logic Codes gave us the dashboards we needed to see revenue, pipeline, and support bottlenecks in one place.",
    initials: "NC",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$1,500+",
    description: "For teams launching one focused automation or conversion funnel.",
    features: ["AI readiness audit", "Landing page or chatbot", "Core analytics setup", "14-day launch support"],
  },
  {
    name: "Growth",
    price: "$4,500+",
    description: "For businesses ready to connect AI, CRM, websites, and reporting.",
    features: [
      "Voice or chatbot system",
      "CRM and workflow automation",
      "Conversion landing page",
      "Dashboard and reporting",
      "30-day optimization sprint",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For companies that need secure, scalable AI across multiple workflows.",
    features: [
      "Custom AI architecture",
      "Multi-channel integrations",
      "Advanced analytics",
      "Team training",
      "Priority support",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    question: "How fast can Logic Codes launch an AI automation project?",
    answer:
      "Most focused launches take 2 to 6 weeks after discovery. Larger voice, CRM, dashboard, or custom software builds are scoped with clear milestones before development begins.",
  },
  {
    question: "Can you integrate with our existing CRM and tools?",
    answer:
      "Yes. We commonly connect websites, CRMs, calendars, support tools, Twilio, Vapi, OpenAI, n8n, Zapier, analytics platforms, and custom REST APIs.",
  },
  {
    question: "Do AI voice agents sound natural?",
    answer:
      "They can be trained for tone, script logic, qualification rules, handoffs, and booking flows, then tested against real customer scenarios before deployment.",
  },
  {
    question: "Do you only build AI, or do you also build software?",
    answer:
      "We do both. Logic Codes builds landing pages, dashboards, web apps, data systems, and the automation layer that connects them.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We monitor results, improve prompts and workflows, review conversion data, and optimize the system so performance keeps improving after deployment.",
  },
];

const logos = ["OpenAI", "Vapi", "Twilio", "Deepgram", "ElevenLabs", "n8n", "Zapier", "Prisma"];

function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 16 });
  const springY = useSpring(y, { stiffness: 170, damping: 16 });

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-extrabold transition ${
        variant === "primary"
          ? "bg-white text-black shadow-[0_0_34px_rgba(59,59,255,0.45)]"
          : "border border-white/10 bg-white/[0.03] text-white hover:border-white/25"
      }`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#5A5CFF]/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">{children}</span>
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
        duration: 2.2,
        ease: "power3.out",
        snap: { textContent: 1 },
      }
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const glowRef = useRef<HTMLDivElement>(null);

  const doubledLogos = useMemo(() => [...logos, ...logos], []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!glowRef.current) return;
      gsap.to(glowRef.current, {
        x: event.clientX - 180,
        y: event.clientY - 180,
        duration: 0.7,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050318] text-white">
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[360px] w-[360px] rounded-full bg-[#3B3BFF]/10 blur-3xl"
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(90,92,255,0.24),transparent_32%),linear-gradient(135deg,#050318_0%,#0B0725_47%,#17126E_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="bg-[#3B3BFF] px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.08em] text-white sm:text-sm">
          <span className="inline-flex items-center justify-center gap-2">
            <Rocket size={16} aria-hidden="true" />
            Transform Your Business with AI Automation - Book a FREE Strategy Call Today
          </span>
        </div>
        <nav
          className={`transition-all duration-300 ${
            scrolled ? "border-b border-white/10 bg-[#050318]/82 shadow-2xl shadow-black/30 backdrop-blur-xl" : "bg-[#050318]/30 backdrop-blur-md"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
            <a href="#home" className="group flex items-center gap-3" aria-label="Logic Codes home">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white text-sm font-black text-black shadow-[0_0_24px_rgba(59,59,255,0.45)]">
                LC
              </span>
              <span className="text-xl font-black tracking-tight">Logic Codes</span>
            </a>

            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-[#B5B7D8] transition hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <MagneticButton href="#contact">
                Book a Call <ArrowRight size={16} />
              </MagneticButton>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-white/10 bg-[#050318]/95 px-5 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-2 py-5">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-[#B5B7D8] hover:bg-white/[0.04] hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                  <MagneticButton href="#contact">Book a Call</MagneticButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <section id="home" className="relative z-10 px-5 pb-20 pt-44 sm:pt-48 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B5B7D8]">
              <Sparkles size={15} className="text-[#5A5CFF]" />
              AI Automation Agency
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-8xl">
              Scale Your Business with AI That Works 24/7
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#B5B7D8] sm:text-xl">
              We build AI Voice Agents, AI Chatbots, Intelligent Websites, and Data Analytics
              solutions that automate operations, capture leads, and increase revenue.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href="#contact">
                Book Free Consultation <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton href="#demo" variant="ghost">
                <Play size={18} /> Watch Demo
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            id="demo"
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto mt-14 max-w-6xl"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#3B3BFF]/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#12102A] p-2 shadow-2xl shadow-black/40">
              <div className="aspect-video overflow-hidden rounded-[1.15rem] bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1"
                  title="Logic Codes AI automation demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-6"
          >
            <div className="flex items-center gap-3 text-sm font-bold text-white">
              <span className="flex gap-1" aria-label="Five star rating">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={18} className="fill-[#5A5CFF] text-[#5A5CFF]" />
                ))}
              </span>
              120+ Client Reviews
            </div>
            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["Secure Process", "Fast Delivery", "Enterprise Ready", "Dedicated Support"].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-[#B5B7D8]"
                >
                  <Check size={16} className="text-[#5A5CFF]" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] py-6">
        <div className="marquee flex overflow-hidden">
          <div className="marquee-track flex min-w-full items-center gap-4">
            {doubledLogos.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="grid h-12 min-w-36 place-items-center rounded-full border border-white/10 bg-[#12102A]/80 px-8 text-sm font-extrabold text-[#B5B7D8]"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="relative z-10 px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="sticky top-36"
          >
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-[#5A5CFF]">
              The scaling problem
            </p>
            <h2 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Why Most Businesses Struggle to Scale
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8 text-xl leading-9 text-[#B5B7D8]"
          >
            <p>
              Growth usually does not break because demand disappears. It breaks because manual work
              piles up, leads wait too long, support moves slowly, teams cannot see the real numbers,
              and workflows depend on people remembering every small step.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Manual work slows the team",
                "Missed leads leak revenue",
                "Slow support lowers trust",
                "Poor data visibility hides risk",
                "Inefficient workflows cap growth",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-[#12102A]/72 p-5">
                  <Check className="mb-3 text-[#5A5CFF]" size={20} />
                  <p className="text-base font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl font-black text-white">That is where Logic Codes comes in.</p>
            <p>
              We design AI systems that answer instantly, qualify intelligently, book appointments,
              update your CRM, surface performance data, and keep improving as your business learns.
              The result is a cleaner operation, a faster customer journey, and a sales pipeline that
              keeps moving even when your team is offline.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Client Reviews", value: 120, suffix: "+" },
            { label: "Average Response Coverage", value: 24, suffix: "/7" },
            { label: "Lead Capture Lift", value: 41, suffix: "%" },
            { label: "Workflow Hours Saved", value: 900, suffix: "+" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-[#12102A]/70 p-7">
              <p className="text-4xl font-black text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-[#B5B7D8]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 bg-[#0B0725]/80 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-[#5A5CFF]">
              Services
            </p>
            <h2 className="text-balance text-4xl font-black sm:text-6xl">
              Premium AI and software systems built for revenue.
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-4">
            {serviceGroups.map((service, index) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.015 }}
                className="group rounded-3xl border border-white/10 bg-[#12102A] p-7 shadow-2xl shadow-black/20 transition hover:border-[#5A5CFF]/45 hover:shadow-[0_0_50px_rgba(59,59,255,0.2)]"
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-[#3B3BFF] text-white shadow-[0_0_28px_rgba(59,59,255,0.45)]">
                  <service.icon size={26} />
                </div>
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-[#B5B7D8]">{service.summary}</p>
                <div className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white">
                      <Check size={16} className="text-[#5A5CFF]" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-[#5A5CFF]">
            How we work
          </p>
          <h2 className="text-balance text-4xl font-black sm:text-6xl">A clear path from idea to intelligent system.</h2>
        </div>
        <div className="mx-auto mt-14 max-w-4xl">
          {processSteps.map((step, index) => (
            <motion.div
              key={step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-gradient-to-b from-[#5A5CFF] to-white/10" />
              )}
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-[#3B3BFF] text-lg font-black shadow-[0_0_30px_rgba(59,59,255,0.35)]">
                {index + 1}
              </div>
              <div className="w-full rounded-3xl border border-white/10 bg-[#12102A]/74 p-6">
                <h3 className="text-2xl font-black">{step}</h3>
                <p className="mt-2 text-[#B5B7D8]">
                  {index === 0
                    ? "We study your offer, buyers, operations, and bottlenecks before proposing automation."
                    : "Each step moves the system closer to measurable performance, clean handoff, and reliable launch."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="relative z-10 bg-[#0B0725]/80 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-[#5A5CFF]">
                Testimonials
              </p>
              <h2 className="max-w-3xl text-balance text-4xl font-black sm:text-6xl">
                What operators say after the manual work disappears.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-[#B5B7D8]">
              <Star className="fill-[#5A5CFF] text-[#5A5CFF]" size={18} />
              5.0 average client experience
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl"
              >
                <div className="mb-5 flex gap-1">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={17} className="fill-[#5A5CFF] text-[#5A5CFF]" />
                  ))}
                </div>
                <p className="min-h-36 text-[15px] leading-7 text-[#D8DAF7]">"{testimonial.quote}"</p>
                <div className="mt-7 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-white to-[#5A5CFF] text-sm font-black text-black">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-black">{testimonial.name}</p>
                    <p className="text-sm text-[#B5B7D8]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-[#5A5CFF]">
              Packages
            </p>
            <h2 className="text-balance text-4xl font-black sm:text-6xl">Choose the launch path that fits your next stage.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {packages.map((plan) => (
              <motion.article
                key={plan.name}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl border p-8 ${
                  plan.highlighted
                    ? "border-[#5A5CFF]/70 bg-[#12102A] shadow-[0_0_70px_rgba(59,59,255,0.28)]"
                    : "border-white/10 bg-[#12102A]/72"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#3B3BFF] px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-5 text-5xl font-black">{plan.price}</p>
                <p className="mt-4 min-h-20 text-[#B5B7D8]">{plan.description}</p>
                <div className="my-8 h-px bg-white/10" />
                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-[#D8DAF7]">
                      <Check size={16} className="text-[#5A5CFF]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-black transition ${
                    plan.highlighted
                      ? "bg-white text-black shadow-[0_0_34px_rgba(59,59,255,0.45)]"
                      : "border border-white/10 bg-white/[0.03] text-white hover:border-white/25"
                  }`}
                >
                  Start With {plan.name}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 bg-[#0B0725]/80 px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-[#5A5CFF]">
              FAQ
            </p>
            <h2 className="text-balance text-4xl font-black sm:text-6xl">Questions before you automate.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="overflow-hidden rounded-3xl border border-white/10 bg-[#12102A]/78">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-lg font-black"
                >
                  {faq.question}
                  <ChevronDown
                    size={21}
                    className={`shrink-0 text-[#5A5CFF] transition ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <p className="px-6 pb-6 leading-7 text-[#B5B7D8]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-5 py-24 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#12102A] p-8 text-center shadow-[0_0_90px_rgba(59,59,255,0.22)] sm:p-14"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#5A5CFF] to-transparent" />
          <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-2xl bg-[#3B3BFF] shadow-[0_0_38px_rgba(59,59,255,0.5)]">
            <Zap size={30} />
          </div>
          <h2 className="text-balance text-4xl font-black sm:text-6xl">Ready to Automate Your Business?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#B5B7D8]">
            Get a clear strategy for the AI systems, software, and dashboards that can remove friction
            from your business and turn more conversations into revenue.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="mailto:contact@logiccodes.com">
              Book Strategy Call <CalendarCheck size={18} />
            </MagneticButton>
            <MagneticButton href="#demo" variant="ghost">
              Schedule Demo <ArrowRight size={18} />
            </MagneticButton>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Secure Process" },
              { icon: Headphones, label: "Dedicated Support" },
              { icon: Bot, label: "Enterprise Ready" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <item.icon className="mx-auto mb-2 text-[#5A5CFF]" size={22} />
                <p className="text-sm font-bold text-[#D8DAF7]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-[#050318] px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-black text-black">
                LC
              </span>
              <span className="text-xl font-black">Logic Codes</span>
            </div>
            <p className="max-w-sm leading-7 text-[#B5B7D8]">
              AI automation and software development for companies that want cleaner operations,
              stronger funnels, and faster customer response.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-black">Quick Links</h3>
            <div className="space-y-3 text-sm text-[#B5B7D8]">
              {["Home", "Services", "Testimonials", "FAQ", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-black">Services</h3>
            <div className="space-y-3 text-sm text-[#B5B7D8]">
              {["AI Voice Agents", "AI Chatbots", "Web Development", "Data Analytics"].map((item) => (
                <a key={item} href="#services" className="block hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-black">Legal</h3>
            <div className="space-y-3 text-sm text-[#B5B7D8]">
              <a href="#" className="block hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-white">
                Terms
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#B5B7D8] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-[#B5B7D8]">
          Copyright 2026 Logic Codes. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
