import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Product_detail from "./components/Product_detail/Product_detail";
import Order_summary from "./components/Order_summary/Order_summary";
import useScrollRestoration from "./hooks/useScrollRestoration";
import HeaderNav from "./components/Header/HeaderNav";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./App.css";

function ScrollRestorationWrapper({ children }) {
  useScrollRestoration();
  return children;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <ScrollRestorationWrapper>
        <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Form />} />
              <Route path="/:productId" element={<Product_detail />} />
              <Route path="/order_summary/:summaryId" element={<Order_summary />} />
            </Routes>
        </main>
      </ScrollRestorationWrapper>
      <Footer />
    </div>
  );
}

export default App;
