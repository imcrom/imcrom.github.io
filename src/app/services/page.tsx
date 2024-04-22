import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import Footer from "@/components/pages/landing-one/Footer";
import ServiceBottomRight from "@/components/pages/service/AboutTopLeftElement";
import ServiceBody from "@/components/pages/service/ServiceBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
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

const Services = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <ServiceBody />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <ServiceBottomRight />
    </div>
  );
};

export default Services;
