import React from "react";
import serviceData from "./serviceData";
import ServiceCard from "./ServiceCard";
const Service = () => {
  return (
    <>
      {/* Service 1  */}
      <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              subDescription={service.subDescription}
              image={service.image}
              featureData={service.featureData}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
