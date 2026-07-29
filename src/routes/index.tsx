import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, Atom, Languages, BookOpen, Globe2, Sparkles, CheckCircle2, Gamepad2, Star, ArrowRight, Clock, HeartHandshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import heroImage from "@/assets/hero-learning.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mistudia – Professionelle Online-Nachhilfe für jede Altersgruppe" },
      { name: "description", content: "Online-Nachhilfe in Mathematik, Physik, Spanisch, Deutsch und Englisch. Maßgeschneiderte Lernpläne, erfahrene Tutoren und eigene Lern-Apps." },
      { property: "og:title", content: "Mistudia – Professionelle Online-Nachhilfe für jede Altersgruppe" },
      { property: "og:description", content: "Online-Nachhilfe in Mathematik, Physik, Spanisch, Deutsch und Englisch. Maßgeschneiderte Lernpläne, erfahrene Tutoren und eigene Lern-Apps." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Index,
});

const subjects = [
  { name: "Mathematik", to: "/faecher/mathematik", icon: Calculator, color: "bg-[oklch(0.94_0.05_240)] text-[oklch(0.4_0.14_240)]" },
  { name: "Physik", to: "/faecher/physik", icon: Atom, color: "bg-[oklch(0.94_0.05_180)] text-[oklch(0.4_0.12_180)]" },
  { name: "Spanisch", to: "/faecher/spanisch", icon: Languages, color: "bg-[oklch(0.94_0.06_55)] text-[oklch(0.45_0.14_55)]" },
  { name: "Deutsch", to: "/faecher/deutsch", icon: BookOpen, color: "bg-[oklch(0.94_0.05_25)] text-[oklch(0.45_0.14_25)]" },
  { name: "Englisch", to: "/faecher/englisch", icon: Globe2, color: "bg-[oklch(0.94_0.06_150)] text-[oklch(0.4_0.14_150)]" },
  { name: "Sonstiges", to: "/faecher/sonstiges", icon: Sparkles, color: "bg-[oklch(0.94_0.05_300)] text-[oklch(0.45_0.14_300)]" },
];

const benefits = [
  { icon: HeartHandshake, title: "Maßgeschneiderte Lernpläne", text: "Jede Nachhilfe wird an das Tempo, die Ziele und die Stärken deines Kindes angepasst." },
  { icon: Clock, title: "Flexibles Lernen", text: "Termine online buchen – morgens, abends oder am Wochenende. Ganz wie es in den Alltag passt." },
  { icon: Users, title: "Erfahrene Tutoren", text: "Unsere Tutorinnen und Tutoren wissen, wie man Lernstoff verständlich und motivierend erklärt." },
];

const testimonials = [
  { name: "Sabine M.", role: "Mutter, 8. Klasse", text: "Meine Tochter freut sich mittlerweile auf Mathe – ihre Note ist von 4 auf 2 gestiegen." },
  { name: "Jonas K.", role: "Schüler, Oberstufe", text: "Endlich verstehe ich Physik. Die Erklärungen sind super klar und ich fühle mich nie unter Druck." },
  { name: "Familie Weber", role: "Eltern, Grundschule", text: "Flexibel, professionell und mit viel Herz. Wir empfehlen Mistudia allen Eltern in unserem Umkreis." },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Online-Nachhilfe für jede Altersgruppe
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Professionelle Nachhilfe, die wirklich <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">weiterbringt</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Mathe, Physik, Spanisch, Deutsch, Englisch – individuell, flexibel und komplett online. Gemeinsam schließen wir Wissenslücken und wecken Freude am Lernen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/termin-buchen">Termin buchen <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/faecher">Fächer entdecken</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Kostenlose Erstberatung</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> 100% online</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Alle Klassenstufen</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
            <img
              src={heroImage}
              alt="Schüler lernen gemeinsam online mit Mistudia"
              width={1024}
              height={1024}
              className="w-full rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Unsere Fächer</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Für jedes Fach die richtige Unterstützung</h2>
          </div>
          <Link to="/faecher" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Alle Fächer ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className={`inline-grid h-12 w-12 place-items-center rounded-xl ${s.color}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Individuelle Nachhilfe für alle Klassenstufen.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Mehr erfahren <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Warum Mistudia</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Lernen, das zu deinem Leben passt</h2>
            <p className="mt-4 text-muted-foreground">Wir kombinieren fachliche Tiefe mit einer freundlichen, motivierenden Lernumgebung – für nachhaltige Erfolge.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vokabelspiel Teaser */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/3 translate-x-1/3 rounded-full bg-accent-warm opacity-30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-warm/30 px-3 py-1 text-xs font-semibold text-foreground">
                <Gamepad2 className="h-3.5 w-3.5" /> Unsere App
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Vokabeln spielerisch lernen mit dem Vokabelspiel</h2>
              <p className="mt-4 text-muted-foreground">
                Vokabeln pauken war gestern. Unser Vokabelspiel motiviert mit Highscores, deckt Schwachstellen auf und macht Fortschritte sichtbar – für Schüler und Eltern.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Detaillierte Statistiken</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Highscores mit Freunden</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Spielerisches Lernen</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/apps">Zur App-Seite</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://vokabelspiel.de" target="_blank" rel="noreferrer">vokabelspiel.de öffnen</a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Vokabeln gelernt", value: "12.480" },
                { label: "Highscore", value: "9.812" },
                { label: "Trefferquote", value: "94%" },
                { label: "Streak", value: "17 Tage" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-background p-6">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  <p className="mt-1 text-3xl font-bold text-primary">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Stimmen</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Was Familien über Mistudia sagen</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 text-accent-warm">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
                </div>
                <p className="mt-4 text-foreground">"{t.text}"</p>
                <p className="mt-6 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-center text-primary-foreground shadow-[var(--shadow-soft)] sm:p-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bereit für den nächsten Lernschritt?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Vereinbare jetzt deine kostenlose Erstberatung – wir finden gemeinsam die passende Nachhilfe.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="xl" variant="warm">
              <Link to="/termin-buchen">Termin buchen <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
