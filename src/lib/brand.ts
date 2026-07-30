import type { BrandConfig } from "@/config/brand";
import { mistudiaBrand } from "@/config/brands/mistudia";
import { topnachhilfeBrand } from "@/config/brands/topnachhilfe";
import { vocabbossBrand } from "@/config/brands/vocabboss";
import { vokabelspielBrand } from "@/config/brands/vokabelspiel";

export const brands: BrandConfig[] = [
  mistudiaBrand,
  topnachhilfeBrand,
  vocabbossBrand,
  vokabelspielBrand,
];

export const defaultBrand = mistudiaBrand;

export function getBrandForHostname(hostname: string | undefined): BrandConfig {
  const normalizedHostname = hostname?.toLowerCase().replace(/:\\d+$/, "") ?? "";
  return brands.find((brand) => brand.domains.includes(normalizedHostname)) ?? defaultBrand;
}

export function getActiveBrand(): BrandConfig {
  if (typeof window === "undefined") return defaultBrand;
  return getBrandForHostname(window.location.hostname);
}
