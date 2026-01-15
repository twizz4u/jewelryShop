import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  let productDatas = Data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const highlightImageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const highlightImage2Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const highlightTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contactImageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contactTextVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto px-4 mt-12 mb-24">
      <div className="text-center mb-16">
        <span className="text-sm font-bold tracking-[0.2em] text-amber-700 uppercase mb-3 block">
            Handpicked Collection
        </span>
        <motion.h2
            className="text-4xl md:text-5xl font-serif text-gray-900 relative inline-block"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            Our Products
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></span>
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {productDatas?.map((data) => {
          return (
            <motion.div key={Math.random()} variants={itemVariants}>
              <Product data={data} />
            </motion.div>
          );
        })}
      </motion.div>
      <div className="text-center">
        <button className="my-8 text-lg">show more </button>
      </div>

      <div className="category container mx-auto px-4 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dataCat.map((cat, id) => {
            return <ProdCat key={id} data={cat} />;
            })}
          </div>
      </div>
      <motion.div
        ref={ref}
        className="highlight container mx-auto mt-32 px-4 relative min-h-[600px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start w-full max-w-6xl mx-auto">
             {/* Left Text Group */}
            <motion.div 
                className="hidden md:block absolute top-[10%] -left-[5%] max-w-xs text-right z-20"
                variants={highlightTextVariants}
            >
                <h2 className="font-serif text-4xl text-gray-900 leading-tight">
                    Amplify Crystal <br/> <span className="italic text-amber-900">Elegance</span>
                </h2>
                <a href="#" className="inline-block mt-4 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">
                    Discover Now
                </a>
            </motion.div>

            {/* Left Image (Higher) */}
            <motion.div
                className="relative w-full md:w-5/12 aspect-[3/4] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-2xl"
                variants={highlightImageVariants}
            >
                <img 
                    src={"images/home-handmade-banner-2-456x576.jpg"} 
                    alt="Elegant Jewelry Model" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
            </motion.div>

            {/* Right Image (Lower/Staggered) */}
            <motion.div
                className="relative w-full md:w-5/12 aspect-[3/4] md:mt-32 rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-2xl"
                variants={highlightImage2Variants}
            >
                <img 
                    src={"images/home-handmade-banner-3-456x576.jpg"} 
                    alt="Luxury Jewelry Details" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
            </motion.div>

             {/* Right Text Group */}
             <motion.div 
                className="md:absolute bottom-[15%] -right-[5%] max-w-xs z-20 text-center md:text-left mt-8 md:mt-0"
                variants={highlightTextVariants}
            >
                <h2 className="font-serif text-4xl text-gray-900 leading-tight">
                    Fancy Match <br/> <span className="text-2xl font-sans font-light text-gray-600">for Every Essential</span>
                </h2>
                <a href="#" className="inline-block mt-4 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors md:hidden">
                    Shop Collection
                </a>
            </motion.div>
        </div>
      </motion.div>
      <div className="journal container mx-auto px-4 mt-32">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-bold tracking-[0.2em] text-amber-700 uppercase mb-3 block">
            Read Journal
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 relative inline-block">
            Latest From The Blog
             <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-700/20 rounded-full"></span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mt-8">
            Explore the latest trends, styling tips, and stories from the world of luxury jewelry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HighlightData.map((data, id) => {
            return <Highlight key={id} data={data} />;
          })}
        </div>
      </div>
      <motion.div
        ref={contactRef}
        className="Contact mt-44 container mx-auto px-4"
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl overflow-hidden shadow-2xl">
          <motion.div 
            className="md:w-1/2 overflow-hidden"
            variants={contactImageVariants}
          >
            <motion.img
              src={"images/home-handmade-banner-visit-679x576.jpg"}
              alt="Jewelry Store Interior"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          
          <motion.div
            className="md:w-1/2 flex flex-col justify-center p-12 lg:p-16 bg-[#F9F1EF] md:text-left text-center relative"
            variants={contactTextVariants}
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                 </svg>
             </div>

            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold">Visit Us</h3>
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Our Main Store <br/> <span className="italic font-light text-slate-700">Avenue</span>
            </h2>
            
            <div className="space-y-4 mb-10">
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                Experience our collection in person. Our flagship store offers a unique atmosphere where luxury meets comfort.
              </p>
              <div className="flex items-start justify-center md:justify-start gap-3 mt-6 text-gray-800 font-medium">
                  <span className="mt-1 text-2xl text-slate-800">📍</span> 
                  <p>18 East 67th Street (& Madison Avenue) <br/> Suite 2A New York, NY 10065</p>
              </div>
            </div>

            <div>
                <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                    <span className="relative z-10 flex items-center gap-2 font-medium">
                        Get Directions 
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Products;
