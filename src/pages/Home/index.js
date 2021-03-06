import React from "react";
import Footer from "../../components/Footer";
import FullBanner from "../../components/FullBanner";
import GridBanners from "../../components/GridBanners";
import Header from "../../components/Header";
import MiddleBanner from "../../components/MiddleBanner";
import Newsletter from "../../components/Newsletter";
import Ruler from "../../components/Ruler";
import Showcase from "../../components/Showcase";
import Testimonials from "../../components/Testimonials";

export default function Home() {
  return (
    <main className="page__home">
      <Header />
      <FullBanner />
      <Ruler />
      <GridBanners />
      <Showcase />
      <MiddleBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
