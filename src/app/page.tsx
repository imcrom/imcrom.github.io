import EllipseShapeLandingOneBottomRight from "@/components/pages/landing-one/EllipseShapeLandingOneBottomRight";
import EllipseShapeLandingOneTopLeft from "@/components/pages/landing-one/EllipseShapeLandingOneTopLeft";
import Footer from "@/components/pages/landing-one/Footer";
import LandingOneBody from "@/components/pages/landing-one/LandingOneBody";
import Navbar from "@/components/shared/Navbar";
import Snowfall from "@/components/shared/Snowfall";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Bets | Platform for finding trending tokens in social medias",
  description: "Platform for finding trending tokens in social medias",
  openGraph: {
    title: "Social Bets | Platform for finding trending tokens in social medias",
    description: "Platform for finding trending tokens in social medias",
    images: 'https://snipboard.io/RO08pj.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://socialbets.org',
    title: "Social Bets | Platform for finding trending tokens in social medias",
    description: "Platform for finding trending tokens in social medias",
    images: 'https://snipboard.io/RO08pj.jpg'
  }
};

const page = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LandingOneBody />
        <Footer />
        <Snowfall />
      </div>
      <EllipseShapeLandingOneTopLeft />
      <EllipseShapeLandingOneBottomRight />
    </div>
  );
};

export default page;
