import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Form from "../Form/Form";
import { useSelector } from "react-redux";

// import cartStore from "../../store/Cart";
// import { uiActions } from "../../store/UI";
// import { useDispatch } from "react-redux";
// import { useEffect, useState } from "react";

// console.log(Products);

const Home = () => {
  const cart = useSelector((state) => {
    return state.cart.items;
  });

  const ui = useSelector((state) => {
    return state.ui.showCart;
  });

  const formUi = useSelector((state) => {
    return state.ui.showForm;
  });

  const itemInCart = cart.length > 0;

  return (
    <div className="max-w-[1400px] mx-auto">
      {formUi && itemInCart && <Form />}
      <Hero />
      <Products />
      {ui && <Cart cart={cart} />}
    </div>
  );
};

export default Home;
