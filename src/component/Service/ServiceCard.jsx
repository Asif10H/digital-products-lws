import React from "react";
import VerifiedSvgIcon from "../SvgIcon/VerifiedSvgIcon";

const ServiceCard = (props) => {
  const { id, title, description, subDescription, image, featureData } = props;

  return (
    <>
      {/* Sub Service */}
      <div
        key={id}
        className={`items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ${
          id ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p class="mb-8 font-light lg:text-xl">{description}</p>
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {featureData.map((singleFeatureData) => (
              <li class="flex space-x-3">
                <VerifiedSvgIcon />
                <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  {singleFeatureData}
                </span>
              </li>
            ))}
          </ul>
          <p class="mb-8 font-light lg:text-xl">{subDescription}</p>
        </div>
        <img
          class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src={image}
          alt={title}
        />
      </div>
    </>
  );
};

export default ServiceCard;
