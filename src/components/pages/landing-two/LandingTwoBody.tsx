import CardMotionOne from "@/components/framer-motion/CardMotionOne";
import { Dribbble, Instagram } from "iconsax-react";
import ProfileIcon from "../landing-one/ProfileIcon";
import AllProjectsTwo from "./AllProjectsTwo";
import ExperienceCardItemLandingTwo from "./ExperienceCardItemLandingTwo";
import LandingTwoAllBlogs from "./LandingTwoAllBlogs";
import LandingTwoAllService from "./LandingTwoAllService";
import LandingTwoBio from "./LandingTwoBio";
import LandingTwoGetInTouch from "./LandingTwoGetInTouch";
import LatestCardLandingTwo from "./LatestCardLandingOne";
import ProductDesign from "./ProductDesign";
import SkillsCardTwo from "./SkillsCardLandingTwo";

const LandingTwoBody = () => {
  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="landing-two-body">
        <div className="landing-two-body__1st">
          <ProductDesign />
          <LandingTwoBio />
        </div>
        <div className="landing-two-body__2nd">
          <div className="second-up-section">
            <div className="all-project-and-skills">
              <CardMotionOne>
                <AllProjectsTwo />
              </CardMotionOne>
              <CardMotionOne>
                <SkillsCardTwo />
              </CardMotionOne>
            </div>

            <div className="latest-works-and-others">
              <LatestCardLandingTwo />
              <CardMotionOne>
                <div className="experience-and-profile">
                  <div className="experience">
                    <ExperienceCardItemLandingTwo
                      counterNumber={7}
                      text="YEARS EXPERIENCE"
                      counterElement="0"
                    />
                    <ExperienceCardItemLandingTwo
                      counterNumber={125}
                      text="TOTAL
                    PROJECTS"
                      counterElement="+"
                    />
                  </div>
                  <div className="profile profile-icons card-style-two p-32px">
                    <ProfileIcon icon={<Dribbble size="40" />} socialLink="/" />
                    <ProfileIcon
                      icon={<Instagram size="40" />}
                      socialLink="/"
                    />
                    <ProfileIcon
                      icon={<Instagram size="40" />}
                      socialLink="/"
                    />
                  </div>
                </div>
              </CardMotionOne>
            </div>
          </div>
          <div className="second-down-section">
            <LandingTwoAllService />
            <LandingTwoGetInTouch />
            <LandingTwoAllBlogs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTwoBody;
