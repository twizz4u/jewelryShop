import img6 from "../../assets/images/home-handmade-banner-2-456x576.jpg";
import img7 from "../../assets/images/home-handmade-banner-3-456x576.jpg";
import img12 from "../../assets/images/home-handmade-banner-visit-679x576.jpg";
import Footer from "../Footer/Footer";
import Data from "../../assets/Data";
import Product from "../Product/Product";
import ProdCat from "./ProdCat";
import Highlight from "./Highlight";
import dataCat from "../../assets/catData";
import HighlightData from "../../assets/HighlightData";
import { useEffect, useState } from "react";

Data.length = 8;

const Products = () => {
  const [productData, setData] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jewelriescart-default-rtdb.firebaseio.com/products.json"
      );
      const productData = await response.json();
      console.log(productData[1]);
      setData(productData);
    };

    fetchProducts();
  }, []);

  console.log(productData);

  let productDatas = productData?.slice(1) || Data;

  return (
    <div className="mx-4 mt-6">
      <h2 className="text-center font-medium text-2xl">Our Products</h2>
      <div className="mt-8 grid grid-cols-4 justify-items-center gap-5 gap-y-8">
        {productDatas?.map((data) => {
          return <Product key={Math.random()} data={data} />;
        })}
      </div>
      <div className="text-center">
        <button className="my-8 text-lg">show more </button>
      </div>

      <div className="category grid grid-cols-4 mt-4 gap-7">
        {dataCat.map((cat, id) => {
          return <ProdCat key={id} data={cat} />;
        })}
      </div>
      <div className="higlight container mx-auto flex mt-24 gap-12 justify-center relative">
        <div className="higjligth-1">
          <img src={img6} alt="" />
        </div>
        <div className="higjligth-2 mt-48">
          <img src={img7} alt="" />
        </div>
        <div className="absolute" style={{ left: "60%" }}>
          <h2 className="font-medium text-2xl">Amplify Crystal Elegance</h2>
          <a>Discover now</a>
        </div>
        <div className="absolute" style={{ top: "80%", left: "20%" }}>
          <h2 className="font-medium text-2xl">
            Fancy Match for Every Essential
          </h2>
        </div>
      </div>
      <div className="journal grid grid-cols-4 gap-4 mt-20">
        <div className="col-span-4 text-center">
          <h2 className="">Lorem ipsum dolor, sit amet consectetur ad</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel
          </p>
        </div>
        {HighlightData.map((data, id) => {
          return <Highlight key={id} data={data} />;
        })}
      </div>
      <div className="Contact mt-44 grid grid-cols-2">
        <img src={img12} alt="" className="w-full" />
        <div
          className="flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgb(249, 241, 239)" }}
        >
          <h2 className="mb-2 text-4xl">Visit our Main Store Avenue</h2>
          <p className="text-xl">
            18 East 67th Street (& Madison Avenue) Suite 2A New York, NY 10065
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
