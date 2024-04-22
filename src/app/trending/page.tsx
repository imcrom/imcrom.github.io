import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import BlogBody from "@/components/pages/blog/BlogBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import Chart from "@/components/pages/blog/Chart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending | Platform for finding trending tokens in social medias",
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

const Blog = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <BlogBody />
        <Chart />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default Blog;
