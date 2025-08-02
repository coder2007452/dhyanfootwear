import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      <Image
        className="mb-6 md:mb-0 max-w-56 max-w-56"
        src={assets.jbl_soundbox_image}
        alt="jbl_soundbox_image"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
          Unlock Comfort. Upgrade Your Walk.
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          From soft landings to hard moves—built for every step of the way.
        </p>
        <a href="/all-products"><button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">
          Buy now
          <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </button></a>
      </div>
      <Image
        className="hidden md:block max-w-80 mr-16"
        src={assets.md_controller_image}
        alt="md_controller_image"
      />
      <Image
        className="md:hidden mt-6 md:mt-0"
        src={assets.sm_controller_image}
        alt="sm_controller_image"
      />
    </div>
  );
};

export default Banner;