import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Product_detail from "./components/Product_detail/Product_detail";
import Order_summary from "./components/Order_summary/Order_summary";
import useScrollRestoration from "./hooks/useScrollRestoration";
import "./App.css";

function ScrollRestorationWrapper({ children }) {
  useScrollRestoration();
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollRestorationWrapper>
        <Routes>
          <Route path="/jewelryShop" element={<Home />} />
          <Route path="/jewelryShop/:productId" element={<Product_detail />} />
          <Route
            path="/jewelryShop/order_summary/:summaryId"
            element={<Order_summary />}
          />
        </Routes>
      </ScrollRestorationWrapper>
    </BrowserRouter>
  );
}

export default App;
