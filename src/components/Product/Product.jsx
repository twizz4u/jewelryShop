import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { uiActions } from "../../store/UI";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  
  // Safe destructuring with defaults
  const { id, name, price, shortDescription, imgSrcUrl } = data || {};

  const addToCartHandler = (e) => {
    e.preventDefault(); // Prevent link navigation if button is inside link
    dispatch(
      cartActions.additemToCart({
        id: id,
        title: name,
        price: price,
        image: imgSrcUrl,
      })
    );

    dispatch(uiActions.toggle(false));
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 flex flex-col h-full">
      <Link to={`/${id}`} className="block relative overflow-hidden aspect-[4/5] bg-neutral-50">
        <img
          src={imgSrcUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <div className="mb-3 md:mb-4 flex-grow">
          <Link to={`/${id}`}>
            <h3 className="text-base md:text-lg font-semibold text-neutral-800 mb-1 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
              {name?.toUpperCase()}
            </h3>
          </Link>
          <p className="text-xs md:text-sm text-neutral-500 line-clamp-2">
            {shortDescription}
          </p>
        </div>

        <div className="flex items-end justify-between pt-3 md:pt-4 border-t border-neutral-100 gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs text-neutral-400 font-medium tracking-wider uppercase">Price</span>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold text-neutral-900">#{price}</span>
            </div>
          </div>
          
          <button
            onClick={addToCartHandler}
            className="flex-shrink-0 rounded-full bg-neutral-900 text-white p-2 md:px-4 md:py-2.5 shadow-md hover:bg-amber-600 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group/btn"
          >
            {/* Mobile: Icon, Desktop: Text */}
            <span className="md:hidden flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </span>
            <span className="hidden md:inline-block text-xs md:text-sm font-semibold whitespace-nowrap">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
