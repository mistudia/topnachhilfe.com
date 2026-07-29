import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/animechs")({
  head: () => ({
    meta: [
      { title: "Animechs – Ein Projekt von Mistudia" },
      { name: "description", content: "Animechs ist ein weiteres Lern- und Nebenprojekt aus dem Hause Mistudia." },
      { property: "og:title", content: "Animechs – Mistudia" },
      { property: "og:description", content: "Mehr über das Nebenprojekt Animechs erfahren." },
      { property: "og:url", content: "/animechs" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projekt"
        title="Animechs"
        description="Animechs ist ein kreatives Nebenprojekt von Mistudia – hier entstehen neue Ideen, Experimente und Lernwerkzeuge."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-12">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">In Arbeit</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold">Bald mehr Infos</h2>
          <p className="mt-4 text-muted-foreground">
            Wir arbeiten mit Hochdruck an Animechs. Sobald es Neuigkeiten gibt, findest du hier alle Details zum Projekt, den Zielen und wie du dich beteiligen kannst.
          </p>
          <p className="mt-4 text-muted-foreground">
            In der Zwischenzeit: Wenn du neugierig bist oder mitgestalten möchtest, melde dich einfach bei uns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero"><Link to="/kontakt">Kontakt aufnehmen</Link></Button>
            <Button asChild variant="outline"><Link to="/apps">Unsere Apps entdecken</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}