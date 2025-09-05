import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
const Cart = () => {
  return (
    <section>
      <section className="text-white w-[40px] hover:bg-green-500 h-[40px] flex items-center justify-center absolute bottom-[10px] right-[10px] rounded-full text-[1.5rem] cursor-pointer   transition-all duration-300  bg-main">
        <MdAddShoppingCart />
      </section>
    </section>
  );
};

export default Cart;
