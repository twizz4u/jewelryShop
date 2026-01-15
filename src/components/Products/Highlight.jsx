import { motion } from "framer-motion";

const Highlight = (prop) => {
  const highlightData = prop.data;
  console.log(highlightData);

  return (
    <motion.div
      className="group flex flex-col gap-4 bg-white rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden rounded-xl relative aspect-[4/3]">
        <img
          src={highlightData.image}
          alt={highlightData.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center gap-3 text-xs tracking-widest text-gray-500 uppercase font-medium">
          <span className="text-amber-700">Alukas</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>Feb 17, 2023</span>
        </div>

        <h2 className="text-xl font-serif text-gray-900 leading-snug group-hover:text-amber-700 transition-colors duration-300">
          {highlightData.title}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {highlightData.description}
        </p>

        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b border-gray-200 pb-0.5 w-fit group-hover:border-amber-700 transition-colors mt-2"
        >
          Continue Reading
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Highlight;
