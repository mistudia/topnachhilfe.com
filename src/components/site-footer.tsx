import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center">
            <img
              src={logoAsset.url}
              alt="Mistudia Logo"
              className="h-10 w-auto"
              width="200"
              height="60"
            />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Professionelle Online-Nachhilfe für Schülerinnen und Schüler jeden Alters.
          </p>
          <a href="mailto:kontakt@mistudia.de" className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <Mail className="h-4 w-4" /> kontakt@mistudia.de
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Angebot</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/faecher" className="hover:text-primary">Alle Fächer</Link></li>
            <li><Link to="/preise" className="hover:text-primary">Preise</Link></li>
            <li><Link to="/termin-buchen" className="hover:text-primary">Termin buchen</Link></li>
            <li><Link to="/apps" className="hover:text-primary">Vokabelspiel</Link></li>
            <li><Link to="/animechs" className="hover:text-primary">Animechs</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Unternehmen</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/ueber-uns" className="hover:text-primary">Über uns</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Rechtliches</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/impressum" className="hover:text-primary">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-primary">Datenschutz</Link></li>
            <li><Link to="/agb" className="hover:text-primary">AGB</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Mistudia. Alle Rechte vorbehalten.</p>
          <p>Mit ♥ gemacht für neugierige Köpfe.</p>
        </div>
      </div>
    </footer>
  );
}