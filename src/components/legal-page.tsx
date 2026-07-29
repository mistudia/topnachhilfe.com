import type { ReactNode } from "react";
import { SiteLayout } from "./site-layout";
import { PageHero } from "./page-hero";

export function LegalPage({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <SiteLayout>
      <PageHero eyebrow="Rechtliches" title={title} description={description} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-neutral max-w-none space-y-4 text-foreground [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:text-muted-foreground">
          {children}
        </div>
      </section>
    </SiteLayout>
  );
}