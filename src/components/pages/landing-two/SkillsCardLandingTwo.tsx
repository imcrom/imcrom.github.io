"use client";
import { IconBrandWebflow } from "@tabler/icons-react";
import { Figma, Framer, Illustrator, Photoshop, Xd } from "iconsax-react";

const SkillsCardLandingTwo = [
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Interaction Design",
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Interaction Design",
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Interaction Design",
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Interaction Design",
  "UX Design",
];

export const sliderTwo = [
  {
    icon: <Figma size="32" />,
  },
  {
    icon: <Photoshop size="32" />,
  },
  {
    icon: <Illustrator size="32" />,
  },
  {
    icon: <Xd size="32" />,
  },
  {
    icon: <Framer size="32" />,
  },
  {
    icon: <IconBrandWebflow size="32" />,
  },
  {
    icon: <Figma size="32" />,
  },
  {
    icon: <Photoshop size="32" />,
  },
  {
    icon: <Illustrator size="32" />,
  },
  {
    icon: <Xd size="32" />,
  },
  {
    icon: <Framer size="32" />,
  },
  {
    icon: <IconBrandWebflow size="32" />,
  },
  {
    icon: <Figma size="32" />,
  },
  {
    icon: <Photoshop size="32" />,
  },
  {
    icon: <Illustrator size="32" />,
  },
  {
    icon: <Xd size="32" />,
  },
  {
    icon: <Framer size="32" />,
  },
  {
    icon: <IconBrandWebflow size="32" />,
  },
];

const SkillsCardTwo = () => {
  return (
    <div className="card-style skills-card-landing-two overflow-hidden">
      <span className="heading-4 skills-card-landing-two__title">
        Skills & Tools
      </span>
      <div className="skills-card-landing-two__slider-aria ">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {SkillsCardLandingTwo.map((item) => (
                  <span key={item} className="skills-card__slider-text">
                    {item}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="marquee-wrapper-icon-slider">
          <div className="marquee-inner to-right">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {sliderTwo.map(({ icon }, index) => (
                  <span
                    key={`skill-slider-two${index}`}
                    className="skills-card__slider-two__box"
                  >
                    {icon}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardTwo;
