import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import AboutUsBody from "@/components/pages/about-us/AboutUsBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import aboutOne from "@/../public/image/about-1.png"

export const metadata: Metadata = {
  title: "Social Bets | Platform for finding trending tokens in social medias",
  description: "Platform for finding trending tokens in social medias",
  openGraph: {
    title: "Trending | Platform for finding trending tokens in social medias",
    description: "Platform for finding trending tokens in social medias",
    images: 'https://snipboard.io/RO08pj.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://socialbets.org',
    title: "Trending | Platform for finding trending tokens in social medias",
    description: "Platform for finding trending tokens in social medias",
    images: 'https://snipboard.io/RO08pj.jpg'
  }
};

const AboutUs = () => {
  return (
    <div className="position-relative overflow-hidden ">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <AboutUsBody image={aboutOne} />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUs;
