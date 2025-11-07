import React from "react";
import VerifiedSvgIcon from "../SvgIcon/VerifiedSvgIcon";

const ServiceCard = (props) => {
  const { id, title, description, subDescription, image, featureData } = props;

  return (
    <>
      {/* Sub Service */}
      <div
        key={id}
        classNameName={`items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ${
          id ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-8 font-light lg:text-xl">{description}</p>
          <ul
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {featureData.map((singleFeatureData) => (
              <li className="flex space-x-3">
                <VerifiedSvgIcon />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  {singleFeatureData}
                </span>
              </li>
            ))}
          </ul>
          <p className="mb-8 font-light lg:text-xl">{subDescription}</p>
        </div>
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src={image}
          alt={title}
        />
      </div>
    </>
  );
};

export default ServiceCard;
