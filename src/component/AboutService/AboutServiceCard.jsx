import React from "react";

const AboutServiceCard = (props) => {
  const { title, description, icon } = props;
  const Icon = icon;
  return (
    <>
      <div>
        <Icon />
        <h3 class="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </>
  );
};

export default AboutServiceCard;
