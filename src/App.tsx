
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ExternalLink,
  Mail,
  Briefcase,
  Code2,
  Layers3,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Award,
} from "lucide-react";
import React from "react";
import {
  ACHIEVEMENT_METRICS,
  CASE_STUDY_DETAILS,
  CERTIFICATIONS,
  CONTACT_INFO,
  CONTACT_METHODS,
  EXPERIENCE,
  FADE_UP,
  IMPACT_AREAS,
  LANGUAGES,
  NAV_ITEMS,
  PROFILE_FACTS,
  PROJECTS,
  RECOGNITIONS,
  RESUME_URL,
  SELECTED_ACHIEVEMENTS,
  SKILLS,
  STAGGER,
  type ProjectTitle,
} from "./constants/app";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "lg";
  className?: string;
  children: React.ReactNode;
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-3xl", className)}>{children}</div>;
}

function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

function Badge({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700",
        className
      )}
    >
      {children}
    </span>
  );
}

function Button({
  asChild,
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500/40";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
    secondary: "bg-white text-slate-900 hover:bg-slate-100",
  } as const;
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 py-3 text-sm",
  } as const;

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(base, variants[variant], sizes[size], "rounded-2xl", className, child.props.className),
      ...props,
    });
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], "rounded-2xl", className)} {...props}>
      {children}
    </button>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectTitle>(PROJECTS[0].title);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[20rem] w-[20rem] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[18rem] w-[18rem] rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-900">Neha Mangla</p>
              <p className="text-xs text-slate-500">Senior Full Stack Engineer</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-blue-600">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-200/60 px-4 py-3 md:hidden">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap text-sm font-medium text-slate-600 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full border border-slate-200 bg-white px-4 py-2">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="[scroll-behavior:smooth]">
        <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-20 pt-16 lg:flex-row lg:items-center lg:px-8 lg:pt-24">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="flex-1">
            <motion.div variants={FADE_UP} className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Code2 className="h-4 w-4" />
              React • TypeScript • Node.js
            </motion.div>

            <motion.h1 variants={FADE_UP} className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Building scalable enterprise frontend systems
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                with React & TypeScript.
              </span>
            </motion.h1>

            <motion.p variants={FADE_UP} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I’m <span className="font-semibold text-slate-900">Neha Mangla</span>, a Senior Full Stack Engineer specializing in React, TypeScript, and Node.js. I build scalable enterprise applications, scheduling systems, and performance-optimized frontend experiences for enterprise products.
            </motion.p>

            <motion.div variants={FADE_UP} className="mt-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <span>📍 Based in India</span>
              <span className="text-slate-300">•</span>
              <span>Open to relocation in Germany / EU</span>
            </motion.div>

            <motion.div variants={FADE_UP} className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ACHIEVEMENT_METRICS.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={FADE_UP} className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  View Resume <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={RESUME_URL} download="Neha_Mangla_Resume.pdf">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex-1"
          >
            <Card className="overflow-hidden border border-slate-200/70 bg-white/80 shadow-2xl shadow-slate-200/60 backdrop-blur">
              <CardContent className="p-0">
                <div className="border-b border-slate-200/70 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8 text-white">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-2xl font-bold ring-1 ring-white/15">
                      NM
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold">Senior Full Stack Engineer</h2>
                      <p className="mt-1 text-sm text-slate-200">Enterprise systems • Frontend architecture • Product-focused engineering</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {PROFILE_FACTS.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">{label}</p>
                      <p className="mt-1 font-semibold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={FADE_UP}
            className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Engineering with clarity, performance, and polish.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                I am a Senior Full Stack Engineer focused on React-driven enterprise applications, with 7+ years of experience building scalable SaaS and enterprise platforms. I specialize in React, TypeScript, and Node.js, with strong experience in building data-intensive interfaces, scheduling systems, and performance-optimized web applications.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Currently working at GlobalLogic on the Calabrio enterprise workforce management platform, contributing to scheduling systems, scalable frontend architecture, backend integration, unit testing, and performance optimization.
              </p>
            </div>

            <Card className="border border-slate-200/70 bg-white/80 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Layers3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">What I bring</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      <li>• Strong frontend architecture for large-scale enterprise applications</li>
                      <li>• Performance-first mindset for complex and data-heavy interfaces</li>
                      <li>• Practical full stack experience across UI, APIs, and product workflows</li>
                      <li>• Clean, reusable, and scalable component-driven development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Featured Projects</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Case studies built around real engineering problems.</h2>
            </motion.div>

            <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
                {PROJECTS.map((project, index) => (
                  <motion.div key={project.title} variants={FADE_UP}>
                    <Card
                      className={cn(
                        "group h-full cursor-pointer border border-slate-200/70 bg-white/80 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
                        activeProject === project.title && "ring-2 ring-blue-500/60 shadow-2xl"
                      )}
                    >
                      <button onClick={() => setActiveProject(project.title)} className="h-full w-full text-left">
                        <CardContent className="flex h-full flex-col p-6">
                          <div className="mb-5 flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                              <Briefcase className="h-5 w-5" />
                            </div>
                            <ChevronRight className={cn("h-5 w-5 transition text-slate-400", activeProject === project.title && "translate-x-1 text-blue-600")} />
                          </div>
                          <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
                          <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.tech.map((item) => (
                              <Badge key={item} className="px-3 py-1 text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>

                          <div className="mt-6 space-y-2 text-sm text-slate-600">
                            {project.highlights.map((highlight) => (
                              <div key={highlight} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-auto pt-8 text-sm font-medium text-blue-600">Project {index + 1}</div>
                        </CardContent>
                      </button>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={FADE_UP} className="h-fit xl:sticky xl:top-28">
                <Card className="border border-slate-200/70 bg-slate-950 text-white shadow-2xl">
                  <CardContent className="p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Interactive Case Study</p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProject}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="mt-5"
                      >
                        <h3 className="text-2xl font-semibold leading-tight">{activeProject}</h3>
                        <div className="mt-6 space-y-6">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Problem</p>
                            <p className="mt-2 text-sm leading-7 text-slate-200">{CASE_STUDY_DETAILS[activeProject].problem}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Solution</p>
                            <p className="mt-2 text-sm leading-7 text-slate-200">{CASE_STUDY_DETAILS[activeProject].solution}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Impact</p>
                            <div className="mt-3 space-y-3">
                              {CASE_STUDY_DETAILS[activeProject].impact.map((point) => (
                                <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blue-400" />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="impact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Engineering Impact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Real engineering improvements delivered in production systems.</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {IMPACT_AREAS.map((item) => (
                <motion.div key={item.title} variants={FADE_UP}>
                  <Card className="border border-slate-200/70 bg-white/80 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Selected Achievements</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Execution highlights that strengthen engineering credibility.</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {SELECTED_ACHIEVEMENTS.map((item) => (
                <motion.div key={item.title} variants={FADE_UP}>
                  <Card className="border border-slate-200/70 bg-white/80 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Tech Stack</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Tools and technologies I use to build reliable products.</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(SKILLS).map(([category, items], categoryIndex) => (
                <motion.div key={category} variants={FADE_UP} transition={{ delay: categoryIndex * 0.08 }}>
                  <Card className="border border-slate-200/70 bg-white/80 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold">{category}</h3>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25, delay: itemIndex * 0.04 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="languages" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Languages</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Communication across global teams.</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {LANGUAGES.map((lang) => (
                <motion.div key={lang.name} variants={FADE_UP}>
                  <Card className="border border-slate-200/70 bg-white/80 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold">{lang.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{lang.level}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="certifications" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Certifications</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Continuous learning, certifications, and AI upskilling.</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATIONS.map((item) => (
                <motion.div key={item.title} variants={FADE_UP}>
                  <Card className="border border-slate-200/70 bg-white/80 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-sm text-blue-600">{item.organization}</p>
                          <p className="mt-1 text-xs text-slate-500">Issued {item.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="awards" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Recognition</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Awards that reflect consistency, ownership, and impact.</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {RECOGNITIONS.map((item) => (
                <motion.div key={item.title} variants={FADE_UP}>
                  <Card className="border border-slate-200/70 bg-white/80 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm font-medium text-blue-600">{item.organization}</p>
                          <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Experience</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A career shaped by product thinking and scalable systems.</h2>
            </motion.div>

            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-slate-300 to-transparent" />
              <div className="space-y-8">
                {EXPERIENCE.map((item) => (
                  <motion.div key={item.company} variants={FADE_UP} className="relative pl-14">
                    <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-lg">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                    <Card className="border border-slate-200/70 bg-white/80 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-xl font-semibold">{item.company}</h3>
                            <p className="text-sm font-medium text-blue-600">{item.role}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border border-slate-200/70 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Contact</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let’s build something meaningful together.</h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                      I’m open to opportunities where I can contribute to high-impact products, scalable frontend systems, and thoughtful engineering experiences across Germany and Europe.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg" variant="secondary" className="text-slate-900" asChild>
                        <a href={`mailto:${CONTACT_INFO.email}`}>
                          Reach Out <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {CONTACT_METHODS.map((item) => {
                      const Icon = item.icon;
                      const isExternal = !item.href.startsWith("mailto:");
                      return (
                        <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                          <div className="flex items-start gap-4">
                            <div className="rounded-xl bg-white/10 p-3">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm text-slate-300">{item.label}</p>
                              <a
                                href={item.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noreferrer" : undefined}
                                className="mt-1 block font-medium text-white transition hover:text-blue-200"
                              >
                                {item.value}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
