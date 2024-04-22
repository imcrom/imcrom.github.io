import LinkPrimary from "@/components/shared/LinkPrimary";
import { Send2, Verify } from "iconsax-react";
import ProfileIcon from "./ProfileIcon";

const ProfileCard = () => {
  return (
    <div className="card-style profile-card">
      <div className="profile-icons">
        <ProfileIcon icon={<Send2 size="40" />} socialLink="https://t.me/socialbetsorg" />
        <ProfileIcon icon={<Verify size="40" />} socialLink="https://twitter.com/socialbetsorg" />
      </div>
      <LinkPrimary link="https://t.me/socialbetsorg" linkText="Visit our channels" />
    </div>
  );
};

export default ProfileCard;
