import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { BarChart3, Trophy, Gamepad2, Sparkles, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "Lern-Apps – Vokabelspiel & mehr | Mistudia" },
      { name: "description", content: "Das Vokabelspiel von Mistudia macht Vokabellernen zum Spiel – mit Statistiken und Highscores." },
      { property: "og:title", content: "Lern-Apps – Mistudia" },
      { property: "og:description", content: "Vokabeln spielerisch lernen mit dem Vokabelspiel von Mistudia." },
      { property: "og:url", content: "/apps" },
    ],
  }),
  component: Page,
});

const features = [
  { icon: Gamepad2, title: "Spielerisches Lernen", text: "Levels, Missionen und tägliche Herausforderungen sorgen für Motivation." },
  { icon: BarChart3, title: "Statistiken & Schwachstellen", text: "Sieh sofort, welche Vokabeln sitzen – und wo noch geübt werden muss." },
  { icon: Trophy, title: "Highscores mit Freunden", text: "Vergleiche dich mit Mitschülern und finde heraus, wer am besten pauken kann." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Unsere Apps"
        title="Vokabelspiel – Vokabeln lernen wie ein Spiel"
        description="Mit unserer Vokabel-App lernst du effektiv, spielerisch und mit direkter Rückmeldung – ideal für Schüler und Selbstlernende."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="https://vokabelspiel.de" target="_blank" rel="noreferrer">
              vokabelspiel.de öffnen <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg"><Link to="/termin-buchen">Termin buchen</Link></Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-muted/40 p-8 sm:p-12">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Weitere Projekte</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold">Mehr entdecken</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Neben dem Vokabelspiel arbeiten wir an weiteren Lern- und Nebenprojekten. Sieh dir zum Beispiel Animechs an.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline"><Link to="/animechs">Animechs entdecken</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}