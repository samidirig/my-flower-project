import MainLayout from "@/layouts/main";

import AboutHero from "./about-hero";
import AboutBrands from "./about-brands";

export default function AboutView() {
  return (
    <MainLayout>
      <AboutHero />
      <AboutBrands />
    </MainLayout>
  );
}
