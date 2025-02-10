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

  // console.log(formUi);

  return (
    <div>
      {formUi && itemInCart && <Form />}
      <Hero />
      <Products />
      {ui && <Cart cart={cart} />}
    </div>
  );
};

// const Newsletter = () => {
//   return <h1>Hello how are you doing</h1>;
// };

// const LetTry = () => {
//   return <p>let tyr</p>;
// };

export default Home;
