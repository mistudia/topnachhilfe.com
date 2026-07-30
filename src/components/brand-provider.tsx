import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { BrandConfig } from "@/config/brand";
import { defaultBrand, getActiveBrand } from "@/lib/brand";

const BrandContext = createContext<BrandConfig>(defaultBrand);

const colorVariables: Record<keyof BrandConfig["colors"], string> = {
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  primaryGlow: "--primary-glow",
  secondary: "--secondary",
  secondaryForeground: "--secondary-foreground",
  accentWarm: "--accent-warm",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  background: "--background",
  foreground: "--foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  border: "--border",
  input: "--input",
  ring: "--ring",
};

function applyBrandColors(brand: BrandConfig) {
  const root = document.documentElement;
  for (const [name, value] of Object.entries(brand.colors)) {
    root.style.setProperty(colorVariables[name as keyof BrandConfig["colors"]], value);
  }
}

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState(defaultBrand);

  useEffect(() => {
    const activeBrand = getActiveBrand();
    setBrand(activeBrand);
    applyBrandColors(activeBrand);
  }, []);

  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  return useContext(BrandContext);
}
