import React from "react";
import AirbnbSvgIcon from "../SvgIcon/AirbnbSvgIcon";
import GoogleSvgIcon from "../SvgIcon/GoogleSvgIcon";
import MicrosoftSvgIcon from "../SvgIcon/MicrosoftSvgIcon";
import SpotifySvgIcon from "../SvgIcon/SpotifySvgIcon";
import MailchimpSvgIcon from "../SvgIcon/MailchimpSvgIcon";
import MashableSvgIcon from "../SvgIcon/MashableSvgIcon";

const CompaniesLogo = () => {
  return (
    <>
      {/* Companies Logo  */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex items-center lg:justify-center">
              <AirbnbSvgIcon />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <GoogleSvgIcon />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <MicrosoftSvgIcon />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <SpotifySvgIcon />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <MailchimpSvgIcon />
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <MashableSvgIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaniesLogo;
