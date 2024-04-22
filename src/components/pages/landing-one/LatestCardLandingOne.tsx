"use client";
import starShape from "@/../public/image/star-shape.png";
import Image from "next/image";

const LatestCardLandingOne = () => {
  return (
    <div className="card-style latest-card position-relative overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              {Array.from({ length: 50 }).map((_, index) => (
                <span key={`latest-one${index}`}>
                  <span className="latest-work-slider-text textL">
                    <span className="latest-work-light-text">
                      WANT YOUR TOKEN TO BE FEATURED?
                    </span>{" "}
                    HIT US ON ONE OF OUR CHANNELS
                  </span>
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LatestCardLandingOne;
