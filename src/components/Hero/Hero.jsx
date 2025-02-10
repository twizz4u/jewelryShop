import Header from "../Header/Header";
import Home from "../../assets/home-handmade-banner-1.jpg";

const Hero = () => {
  return (
    <>
      <Header />
      <div className={` h-screen `}>
        <img src={Home} className="h-full w-full" alt="" />
        <div className="absolute top-1/2 -translate-y-1/2 ml-20">
          <p>A Unique, Intangible Quality.</p>
          <h2>
            A Unique, Intangible Quality. Perfect Match for Elegant Impression
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
