import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { getSubject } from "@/lib/subjects";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/faecher/$subject")({
  loader: ({ params }) => {
    const subject = getSubject(params.subject);
    if (!subject) throw notFound();
    return { subject };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.subject.name ?? "Fach";
    const desc = loaderData?.subject.short ?? "";
    return {
      meta: [
        { title: `${name} Nachhilfe – Mistudia` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} Nachhilfe – Mistudia` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/faecher/${loaderData?.subject.slug ?? ""}` },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { subject } = Route.useLoaderData();
  const Icon = subject.icon;
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] opacity-70" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/faecher" className="text-sm text-primary hover:underline">← Alle Fächer</Link>
          <div className="mt-6 flex items-center gap-4">
            <span className={`grid h-14 w-14 place-items-center rounded-2xl ${subject.colorClass}`}>
              <Icon className="h-7 w-7" />
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{subject.name}</h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subject.short}</p>
          <p className="mt-2 text-sm font-semibold text-primary">Geeignet für: {subject.grades}</p>
          <div className="mt-8">
            <Button asChild variant="hero" size="lg"><Link to="/termin-buchen">Termin buchen <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Was im Unterricht behandelt wird</h2>
            <ul className="mt-6 space-y-3">
              {subject.topics.map((t: string) => (
                <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-muted/40 p-8">
            <h3 className="text-xl font-semibold">So läuft die Nachhilfe ab</h3>
            <ol className="mt-4 space-y-4 text-muted-foreground">
              <li><span className="font-semibold text-foreground">1. Kostenloses Kennenlernen</span> – Wir sprechen über Ziele, Fach und Wunschtermine.</li>
              <li><span className="font-semibold text-foreground">2. Individueller Lernplan</span> – Wir erstellen einen Plan, der zu deinem Kind passt.</li>
              <li><span className="font-semibold text-foreground">3. Regelmäßige Online-Stunden</span> – Flexibel und ohne Anfahrt.</li>
              <li><span className="font-semibold text-foreground">4. Fortschritt sichtbar machen</span> – Rückmeldung an Schüler und Eltern.</li>
            </ol>
            <div className="mt-6">
              <Button asChild variant="hero"><Link to="/termin-buchen">Jetzt Termin buchen</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}