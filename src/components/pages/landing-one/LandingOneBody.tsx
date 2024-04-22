import CardMotionOne from "@/components/framer-motion/CardMotionOne";
import AllBlogsCard from "./AllBlogsCard";
import AllProjects from "./AllProjects";
import AllServicesCard from "./AllServicesCard";
import BioCard from "./BioCard";
import ExperienceCard from "./ExperienceCard";
import GetInTouchCard from "./GetInTouchCard";
import LatestCardLandingOne from "./LatestCardLandingOne";
import ProfileCard from "./ProfileCard";
import ProfileCard2 from "./ProfileCard2";
import SkillsCardAnimationOne from "./SkillsCardAnimationOne";
import TitleCard from "./TitleCard";

const LandingOneBody = () => {
  return (
    <div className="m-t-60px position-relative  z-2">
      <div className=" ">
        <div className="row g-xxl-6 g-4 ">
          <div className="col-lg-9 col-12">
            <div className="row g-xxl-6 g-4 ">
              <div className="col-md-4 col-12">
                <div className="d-flex flex-column gap-xxl-6 gap-4 ">
                  <CardMotionOne>
                    <BioCard />
                  </CardMotionOne>
                  <CardMotionOne>
                    <AllBlogsCard />
                  </CardMotionOne>
                </div>
              </div>
              <div className="col-md-8 col-12">
                <div className="row g-xxl-6 g-4">
                  <div className="col-sm-6 col-12">
                    <CardMotionOne>
                      <TitleCard />
                    </CardMotionOne>
                  </div>
                  <div className="col-sm-6 col-12">
                    <CardMotionOne>
                      <ProfileCard />
                    </CardMotionOne>
                  </div>
                  <div className="col-12">
                    <CardMotionOne>
                      <AllServicesCard />
                    </CardMotionOne>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-xxl-6 mt-0 g-6 ">
              <div className="col-md-12 col-12">
                <CardMotionOne>
                  <SkillsCardAnimationOne />
                </CardMotionOne>
              </div>
              
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="landing-one-body-four">
              <CardMotionOne>
                <LatestCardLandingOne />
              </CardMotionOne>
              <div className="landing-one-body-four__second ">
                <ExperienceCard />
                <CardMotionOne>
                  <ProfileCard2 />
                </CardMotionOne>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingOneBody;
