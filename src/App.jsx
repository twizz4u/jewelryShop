import Home from "./components/Home/Home";
import Product_detail from "./components/Product_detail/Product_detail";
import Order_summary from "./components/Order_summary/Order_summary";

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/jewelryShop", element: <Home /> },
  { path: "/jewelryShop/product/:productId", element: <Product_detail /> },
  { path: "/jewelryShop/order_summary/:summaryId", element: <Order_summary /> },
]);

function App() {
  return <RouterProvider router={router} />;

  // <>
  //   <Hero />
  //   <Products />
  //   {/* <Product_detail /> */}
  //   {/* {ui && <Cart />} */}
  // </>
}

export default App;
