import titleCardShape from "@/../public/image/title-card-shape.png";
import Image from "next/image";
const TitleCard = () => {
  return (
    <div className="card-style title-card">
      <h2 className="heading-3">Social<span style={{color: "#03cfb4"}}>BETS</span></h2>

      <div className="title-card__title-text ">
        <p style={{marginTop: "10%"}}>Giving you the latest trends in cryptocurrency in the social media space.</p>
        
      </div>
      <Image
        src={titleCardShape}
        width={58}
        height={58}
        alt="Title Card Shape"
        className="title-card__shapes-image light-mood-image-shape"
      />
    </div>
  );
};

export default TitleCard;
