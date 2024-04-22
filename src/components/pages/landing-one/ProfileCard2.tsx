import { Send2, Verify, SmsNotification, } from "iconsax-react";
import ProfileIcon from "./ProfileIcon";
import Image from "next/image";
import uniswap from "@/../public/image/uniswap.png"
import dex from "@/../public/image/dex.png"
import eth from "@/../public/image/eth.png"
const ProfileCard = () => {
  return (
    <div className="card-style profile-card">
    <h3 className="heading-3">TOKEN <span style={{color: "#03cfb4"}}>LINKS</span></h3>

      <div className="profile-icons" style={{marginTop: "10%"}}>
        <ProfileIcon icon={ <Image src={uniswap} width={40} height={40} alt="Service One" />} socialLink="#" />
        <ProfileIcon icon={ <Image src={dex} width={40} height={40} alt="Service One" />} socialLink="#" />
      </div>
      <div className="profile-icons" style={{marginTop: "10%"}}>
        <ProfileIcon icon={<SmsNotification size="40" />} socialLink="mailto://team@socialsbet.org/" />
        <ProfileIcon icon={<Image src={eth} width={40} height={40} alt="Service One" />} socialLink="#" />
      </div>
    </div>
  );
};

export default ProfileCard;
