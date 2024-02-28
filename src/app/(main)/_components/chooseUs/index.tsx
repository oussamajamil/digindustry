import React from "react";
import { chooseUsData } from "../../../../constants/data";
import ImageTitle from "../imageTitle";

function ChooseUs() {
  return (
    <div className="flex items-center justify-evenly  flex-col gap-2">
      <h1 className="text-3xl font-[600]">Why Choose Us?</h1>
      <p className="text-xs">
        Empowering Industry X.0 with Expertise and Innovation
      </p>
      <div className="flex  gap-[4rem] flex-wrap [&>*]:flex-1 mt-[2rem] justify-center">
        {chooseUsData.map((content, index) => (
          <div
            key={index}
            className="flex-1 min-h-[22rem]  min-w-[22rem]  shadow-lg max-w-[400px]"
          >
            <ImageTitle
              image={content.image}
              title={content.title}
              description={content.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseUs;
