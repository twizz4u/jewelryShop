import { motion } from "framer-motion";

const ProdCat = (prop) => {
  const { category, image } = prop.data;

  return (
    <motion.div
      className="group relative h-64 overflow-hidden rounded-2xl cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={image} 
        alt={category} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Content */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full p-6 text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium tracking-wide uppercase text-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
          {category}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ProdCat;
