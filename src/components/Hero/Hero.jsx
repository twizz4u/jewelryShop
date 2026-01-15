import Home from "../../assets/home-handmade-banner-1.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Home}
          className="w-full h-full object-cover"
          alt="Handmade Jewelry"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-2xl text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-300 mb-4 font-medium"
            variants={itemVariants}
          >
            A Unique, Intangible Quality
          </motion.p>
          
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-serif"
            variants={itemVariants}
          >
            Perfect Match for an <span className="text-yellow-500">Elegant</span> Impression
          </motion.h2>

          <motion.p 
            className="text-base md:text-lg text-gray-200 mb-8 max-w-lg font-light leading-relaxed"
            variants={itemVariants}
          >
            Discover our handcrafted collection designed to accentuate your natural beauty and style.
          </motion.p>
          
          <motion.button
            className="px-8 py-3 bg-white text-black font-semibold uppercase tracking-wider text-sm hover:bg-yellow-500 hover:text-white transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
