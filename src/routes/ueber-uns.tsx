import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Mistudia" },
      { name: "description", content: "Unser Team und unsere Mission: individuelle, wertschätzende Online-Nachhilfe für jede Altersgruppe." },
      { property: "og:title", content: "Über uns – Mistudia" },
      { property: "og:description", content: "Lerne das Team hinter Mistudia kennen und erfahre, wofür wir stehen." },
      { property: "og:url", content: "/ueber-uns" },
    ],
  }),
  component: Page,
});

const values = [
  { icon: Target, title: "Individuell", text: "Wir passen jede Stunde an die Ziele und das Tempo unserer Schüler an." },
  { icon: Heart, title: "Wertschätzend", text: "Lernen funktioniert am besten in einer freundlichen, motivierenden Atmosphäre." },
  { icon: Lightbulb, title: "Verständlich", text: "Wir erklären, bis der Groschen fällt – und feiern jeden Fortschritt." },
  { icon: Users, title: "Nah dran", text: "Enger Austausch mit Schülern und Eltern – transparent und regelmäßig." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Über uns"
        title="Nachhilfe mit Herz, Kopf und Struktur"
        description="Mistudia wurde gegründet, um Nachhilfe neu zu denken: online, flexibel und wirklich individuell. Wir verbinden fachliche Tiefe mit einer freundlichen Lernkultur."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Unsere Mission</h2>
            <p className="mt-4 text-muted-foreground">
              Wir möchten Schülerinnen und Schülern das Selbstvertrauen und die Werkzeuge geben, die sie brauchen, um erfolgreich zu lernen – unabhängig von Vorwissen, Schulform oder Wohnort.
            </p>
            <p className="mt-4 text-muted-foreground">
              Dafür kombinieren wir persönliche 1:1-Betreuung mit modernen digitalen Werkzeugen und eigenen Lern-Apps wie dem Vokabelspiel.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Team</p>
            <h3 className="mt-2 text-2xl font-semibold">Erfahrene Tutorinnen und Tutoren</h3>
            <p className="mt-3 text-muted-foreground">
              Unser Team besteht aus qualifizierten Studierenden, Lehrkräften und Fachexperten mit langjähriger Erfahrung in Nachhilfe und Pädagogik.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Was uns wichtig ist</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild variant="hero" size="lg"><Link to="/termin-buchen">Termin buchen</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}