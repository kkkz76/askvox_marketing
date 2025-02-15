"use client";
import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          {/* Video Section */}
          <div className="w-full flex justify-center mb-10">
            <video
              className="w-full max-w-4xl rounded-lg shadow-lg"
              controls
              autoPlay
              loop
              muted
            >
              <source src="/videos/MarketingVideo.mp4" type="video/MP4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Features Section */}
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex flex-col justify-center items-center">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="size-28 object-contain"
                    />
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6">{feature.caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {feature.title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
