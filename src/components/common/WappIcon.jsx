import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const WappIcon = () => {
  return (
    <div className=" fixed bottom-5 right-5 md:right-[25%] p-2  flex items-end justify-end w-48 h-48 rounded-full ">
      <div className="text-white shadow-xl flex items-center justify-center p-2 rounded-full bg-green-500  z-50 absolute  ">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/+5492995321826"
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-12 h-12 mx-1" />
        </a>
      </div>
    </div>
  );
};

export default WappIcon;
