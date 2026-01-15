import CartItem from "./cartItem";
import { uiActions } from "../../store/UI";
import { cartActions } from "../../store/Cart";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Cart = (prop) => {
  const cartData = prop.cart;
  console.log(cartData);

  const dispatch = useDispatch();

  function closeHandler() {
    dispatch(uiActions.toggle(true));
  }

  function removeItem() {
    dispatch(cartActions.removeAllItem());
    closeHandler();
  }

  function onshowFormHandler() {
    dispatch(uiActions.formToggle());
  }

  // Calculate total price
  const totalPrice = cartData.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <AnimatePresence>
        <>
            {/* Backdrop */}
            <motion.div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeHandler}
            />

            {/* Sidebar Drawer */}
            <motion.div 
                className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[101] flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-serif font-medium text-gray-900">
                        Shopping Cart <span className="text-sm font-sans text-gray-500 ml-2">({cartData.length} items)</span>
                    </h3>
                    <button 
                        onClick={closeHandler}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
                    >
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartData.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                            <span className="text-4xl text-gray-300">🛒</span>
                            <p>Your cart is empty.</p>
                            <button onClick={closeHandler} className="text-amber-700 font-medium hover:underline">Start Shopping</button>
                        </div>
                    ) : (
                         cartData.map((cartItem) => {
                            return <CartItem key={cartItem.id} data={cartItem} />;
                        })
                    )}
                </div>

                {/* Footer / Actions */}
                {cartData.length > 0 && (
                     <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-600 font-medium">Subtotal</span>
                            <span className="text-2xl font-bold text-gray-900">#{totalPrice}</span>
                        </div>
                        
                        <div className="space-y-3">
                            <button
                                className="w-full py-3.5 bg-neutral-900 text-white rounded-lg font-semibold tracking-wide hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-[0.98]"
                                onClick={onshowFormHandler}
                            >
                                PROCEED TO CHECKOUT
                            </button>
                            <button 
                                onClick={removeItem}
                                className="w-full py-2 text-sm text-red-500 hover:text-red-700 font-medium"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    </AnimatePresence>
  );
};

export default Cart;
