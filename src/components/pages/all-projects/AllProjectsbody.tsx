"use client";
import image11 from "@/../public/image/all-project-11.png";
import image12 from "@/../public/image/all-project-12.png";
import image13 from "@/../public/image/all-project-13.png";
import image21 from "@/../public/image/all-project-21.png";
import image31 from "@/../public/image/all-project-31.png";
import image32 from "@/../public/image/all-project-32.png";

import AllProjectImage from "./AllProjectImage";

const AllProjectBody = () => {
  return (
    <div className="m-t-60px">
      <div className="all-project-body">
        <div className="all-project__1st-row">
          <div className="all-project__1st-row-1st-column">
            <AllProjectImage image={image11} width={636} hight={320} />
            <AllProjectImage image={image12} width={636} hight={320} />
          </div>
          <div className="all-project__1st-row-2nd-column">
            <AllProjectImage image={image13} width={636} hight={664} />
          </div>
        </div>
        <div className="all-project__2nd-row">
          <AllProjectImage image={image21} width={1296} hight={400} />
        </div>
        <div className="all-project__3rd-row">
          <div className="all-project__3rd-row-1st-column">
            <AllProjectImage image={image31} width={636} hight={393} />
          </div>
          <div className="all-project__3rd-row-2nd-column">
            <AllProjectImage image={image32} width={636} hight={393} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectBody;
