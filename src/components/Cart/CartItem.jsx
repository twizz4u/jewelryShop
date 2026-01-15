import { cartActions } from "../../store/Cart";
import { useDispatch } from "react-redux";

const CartItem = (prop) => {
  const dispatch = useDispatch();

  const cartItem = prop.data;
  console.log(cartItem);

  const addHandler = () => {
    dispatch(
      cartActions.additemToCart({
        id: cartItem.id,
        title: cartItem.name,
        price: cartItem.price,
        image: cartItem.image,
      })
    );
  };

  const removeHandler = () => {
    dispatch(cartActions.removeItemCart(cartItem.id));
  };

  const cartItemvalue = "cartItemValue";

  const cursor = { cursor: "pointer" };
  return (
    <div className="flex gap-4 p-4 mb-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
       {/* Image Thumbnail */}
       <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
         {cartItem.image ? (
            <img src={cartItem.image} alt={cartItem.name} className="w-full h-full object-cover" />
         ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">No Img</div>
         )}
       </div>

       {/* Item Details */}
       <div className="flex flex-col flex-grow justify-between">
           <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900 line-clamp-2 text-sm max-w-[150px]">{cartItem.name}</h3>
                <button onClick={removeHandler} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
           </div>
           
           <div className="flex justify-between items-end mt-2">
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                    <button onClick={removeHandler} className="w-6 h-6 flex items-center justify-center rounded-md bg-white shadow-sm text-gray-600 hover:text-amber-700 active:scale-95 transition-all text-xs font-bold">-</button>
                    <span className="text-xs font-semibold text-gray-700 w-3 text-center">{cartItem.quantity}</span>
                    <button onClick={addHandler} className="w-6 h-6 flex items-center justify-center rounded-md bg-white shadow-sm text-gray-600 hover:text-amber-700 active:scale-95 transition-all text-xs font-bold">+</button>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">#{cartItem.totalPrice}</p>
                </div>
           </div>
       </div>
    </div>
  );
};

export default CartItem;
