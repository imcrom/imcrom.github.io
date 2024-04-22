import allBlogsStar from "@/../public/image/all-blog-card-star.png";
import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";
const AllBlogsCard = () => {
  return (
    <div className="card-style all-blog-card">
      <div className="all-blog-card__title-text">
        <p className="heading-4">Trends Monitor</p>
        <p style={{marginTop: '10%'}}>Here we bring you the latest trending tokens in all chains</p>
        <p style={{marginTop: '8%'}}>Social<span style={{color: "#03cfb4"}}>BETS</span> filters out tokens through sentiment analysis</p>
      </div>


    </div>
  );
};

export default AllBlogsCard;
