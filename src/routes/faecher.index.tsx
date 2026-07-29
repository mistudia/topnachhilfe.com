import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { subjects } from "@/lib/subjects";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faecher/")({
  head: () => ({
    meta: [
      { title: "Fächer – Online-Nachhilfe bei Mistudia" },
      { name: "description", content: "Mathematik, Physik, Spanisch, Deutsch, Englisch und mehr – finde das passende Fach für deine Nachhilfe bei Mistudia." },
      { property: "og:title", content: "Fächer – Mistudia" },
      { property: "og:description", content: "Alle Nachhilfefächer bei Mistudia im Überblick." },
      { property: "og:url", content: "/faecher" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Fächer"
        title="Nachhilfe in den wichtigsten Schulfächern"
        description="Ob Grundschule, Mittelstufe oder Abitur – wir unterstützen dich in dem Fach, in dem du gerade Hilfe brauchst."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <Link
              key={s.slug}
              to="/faecher/$subject"
              params={{ subject: s.slug }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className={`inline-grid h-12 w-12 place-items-center rounded-xl ${s.colorClass}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{s.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-primary">{s.grades}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Mehr erfahren <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-muted/40 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold">Nicht sicher, welches Fach passt?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Vereinbare eine kostenlose Erstberatung – wir finden gemeinsam das passende Angebot.</p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="hero" size="lg"><Link to="/termin-buchen">Termin buchen</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}