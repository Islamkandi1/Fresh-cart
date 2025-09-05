import React from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";
const WishList = ({prop}) => {
  return (
    <div>
      <section className={`text-main hover:text-[#F11723] text-[2rem] flex justify-center items-center rounded-full  cursor-pointer ${prop} top-[10px] right-[-40px] group-hover:right-[10px]  transition-all duration-300  `}>
        <FaHeartCirclePlus />
      </section>
    </div>
  );
};

export default WishList;
