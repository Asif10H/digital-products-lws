import React from "react";
import RightArrowSvgIcon from "../SvgIcon/RightArrowSvgIcon";
import pricingData from "./pricingData";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-3xl mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Landwind we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {pricingData.map((pricingData) => (
              <PricingCard
                // key={pricingData.id}
                // title={pricingData.title}
                // description={pricingData.description}
                // price={pricingData.price}
                // icon={pricingData.icon}
                // priceFeature={pricingData.priceFeature}
                // buttonText={pricingData.buttonText}
                {...pricingData}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
