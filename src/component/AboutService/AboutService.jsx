import React from "react";
import LeftArrow from "../SvgIcon/LeftArrow";
import UsersSvgIcon from "../SvgIcon/UsersSvgIcon";
import aboutServiceData from "./aboutServiceData";
import AboutServiceCard from "./AboutServiceCard";

const AboutService = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="items-center max-w-7xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <p class="text-lg font-medium text-purple-600 dark:text-purple-500">
              Trusted Worldwide
            </p>
            <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
            <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <a
                  href="#"
                  class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Explore Legality Guide
                  <LeftArrow />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Visit the Trust Center
                  <LeftArrow />
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {aboutServiceData.map((aboutService) => (
              <AboutServiceCard
                key={aboutService.id}
                title={aboutService.title}
                description={aboutService.description}
                icon={aboutService.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutService;
