import Form from "../Form/Form";
import { useParams } from "react-router-dom";
import Data from "../../assets/Data";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { uiActions } from "../../store/UI";
import { FiSearch, FiHeart, FiShoppingBag, FiShare2, FiMonitor } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";

const Product_detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productId = params.productId;

  const product = Data.find((product) => product.id == productId);

  const cart = useSelector((state) => state.cart.items);
  const showCart = useSelector((state) => state.ui.showCart);
  const showForm = useSelector((state) => state.ui.showForm);

   // Scroll to top on mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Fallback if product not found
  if (!product) {
    return <div className="text-center py-20 text-xl font-medium">Product not found.</div>;
  }

  function addItemHandler(e) {
    e.preventDefault();
    dispatch(
      cartActions.additemToCart({
        id: product.id,
        title: product.name,
        price: product.price,
      })
    );
    dispatch(uiActions.toggle(false));
  }

  function OrderNowHandler() {
    // Implement order now logic or redirect to checkout
    console.log("Order Now Clicked");
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {showForm && <Form />}
      {showCart && <Cart cart={cart} />}

      {/* Header / Nav (Simplified version for this page or keep global navbar if exists) */}
      {/* <nav className="border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-10 transition-all duration-300">
         <div className="flex items-center gap-6 w-1/3">
             <div className="relative w-full max-w-xs hidden md:block">
                 <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-shadow"
                 />
                 <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
             </div>
         </div>
         
         <div className="w-1/3 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">LUXE GEMS</h2>
         </div>

         <div className="w-1/3 flex justify-end gap-5 text-xl text-gray-600">
             <button className="hover:text-black transition-colors"><BiUser /></button>
             <button className="hover:text-black transition-colors"><FiHeart /></button>
             <button className="hover:text-black transition-colors"><FiShoppingBag /></button>
         </div>
      </nav> */}

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Section */}
            <div className="flex items-center justify-center bg-gray-50 rounded-3xl p-8 shadow-sm">
                <img 
                    src={`/${product.imgSrcUrl}`} 
                    alt={product.name}
                    className="w-full max-h-[600px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
                />
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col justify-center">
                <nav className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">
                    <span className="hover:text-black cursor-pointer transition-colors">Home</span> / 
                    <span className="hover:text-black cursor-pointer transition-colors mx-2">Shop</span> / 
                    <span className="text-black mx-2">{product.name}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-4 text-gray-900">
                    {product.name}
                </h1>
                
                <div className="flex items-baseline gap-4 mb-8">
                    <p className="text-3xl font-light text-gray-900">#{product.price.toLocaleString()}</p>
                    <span className="text-lg text-gray-400 line-through">#{(product.price * 1.2).toLocaleString()}</span>
                    <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded-full uppercase tracking-wide">Sale</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                   {product.decription || "Exquisitely crafted to enhance your elegance. This piece is a testament to timeless beauty and premium artistry."}
                </p>

                <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                        <input 
                            type="number" 
                            min="1" 
                            defaultValue="1" 
                            className="w-12 text-center text-lg font-medium focus:outline-none bg-transparent appearance-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                     <button 
                        onClick={addItemHandler}
                        className="flex-1 px-8 py-4 border border-black text-black font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-full"
                    >
                        Add to Cart
                    </button>
                    <button 
                         onClick={OrderNowHandler}
                         className="flex-1 px-8 py-4 bg-yellow-500 text-white font-semibold uppercase tracking-widest hover:bg-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-200 rounded-full"
                    >
                         Buy It Now
                    </button>
                </div>

                <div className="border-t border-gray-100 pt-8 space-y-4">
                     <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors cursor-pointer">
                         <FiHeart className="text-lg" /> <span>Add to Wishlist</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm text-gray-600">
                         <FiMonitor className="text-lg" /> <span>Category: Earrings</span>
                     </div>
                     <div className="flex items-center gap-4 text-sm text-gray-600 mt-4">
                        <span>Share:</span>
                        <div className="flex gap-4 text-lg">
                            <AiOutlineFacebook className="hover:text-blue-600 cursor-pointer transition-colors" />
                            <AiOutlineInstagram className="hover:text-pink-600 cursor-pointer transition-colors" />
                            <AiOutlineTwitter className="hover:text-blue-400 cursor-pointer transition-colors" />
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white py-16 px-6 md:px-12 mt-20">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Subscribe to our Newsletter</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">Stay updated on our latest collections and exclusive offers.</p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-transparent border-b border-gray-600 py-3 px-4 focus:outline-none focus:border-white transition-colors text-white placeholder-gray-500"
                  />
                  <button className="px-8 py-3 bg-white text-black font-medium uppercase tracking-wider hover:bg-gray-200 transition-colors">
                      Subscribe
                  </button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default Product_detail;
