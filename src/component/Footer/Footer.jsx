import React from "react";
import footerDate from "./footerData.js";
import logo from "../../assets/logo.svg";
import socialMediaIcon from "./socialMediaIcon";

const Footer = () => {
  return (
    <>
      <footer class="bg-white dark:bg-gray-800">
        <div class="max-w-7xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          {/* <!-- Sub Footer 1 --> */}
          <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {footerDate.map((footerData) => (
              <div>
                <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {footerData.category}
                </h3>
                <ul class="text-gray-500 dark:text-gray-400">
                  {footerData.items.map((item) => (
                    <li class="mb-4">
                      <a href="#" class=" hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/* <!-- Sub Footer 2 --> */}
          <div class="text-center">
            <a
              href="#"
              class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                src={logo}
                class="h-6 mr-3 sm:h-9"
                alt="Learn with Sumit Logo"
              />
              Learn with Sumit
            </a>
            <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 24-25 Learn with Sumit. All Rights Reserved. Built with
              <a
                href="#"
                target="_blank"
                class="text-purple-600 hover:underline dark:text-purple-500"
              >
                Flowbite
              </a>
              and
              <a
                href="#"
                class="text-purple-600 hover:underline dark:text-purple-500"
              >
                Tailwind CSS
              </a>
              .
            </span>
            <ul class="flex justify-center mt-5 space-x-5">
              {socialMediaIcon.map((Icon, index) => (
                <li key={index}>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
