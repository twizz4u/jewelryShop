import CartItem from "./cartItem";
import { uiActions } from "../../store/UI";
import { cartActions } from "../../store/Cart";
import { useDispatch } from "react-redux";

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

  console.log(Object);

  return (
    <div className="h-80 fixed top-20 right-6  w-96 border border-r bg-slate-200 rounded-xl overflow-y-auto">
      <h3 className="text-center mt-3 sticky top-0">Cart Items</h3>
      <div className="flex px-4 justify-between">
        {Object.keys(cartData).length > 0 && (
          <button onClick={removeItem}>remove all</button>
        )}
        <button className="" onClick={closeHandler}>
          close icon
        </button>
      </div>

      {cartData.map((cartItem) => {
        return <CartItem key={cartItem.id} data={cartItem} />;
      })}

      {/* <div className="cartBox p-4">
        <div className="cartItem flex justify-between border-b-4 pb-3 border-gray-500">
          <div className="cartItemdescription">
            <h3>item name</h3>
            <p>price</p>
            <p>Amount</p>
          </div>
          <div className="cartItemValue text-right">
            <p>necklace</p>
            <p>20000</p>
            <p>3</p>
          </div>
        </div>
      </div>
      <div className="cartBox p-4">
        <div className="cartItem flex justify-between border-b-4 pb-3  border-gray-500">
          <div className="cartItemdescription">
            <h3>item name</h3>
            <p>price</p>
            <p>Amount</p>
          </div>
          <div className="cartItemValue text-right">
            <p>necklace</p>
            <p>20000</p>
            <p>3</p>
          </div>
        </div>
      </div> */}
      <div className=" text-right p-4">
        <button
          className="py-2 px-7 bg-slate-600 text-white rounded-md"
          onClick={onshowFormHandler}
          disabled={Object.keys(cartData).length == 0}
        >
          {Object.keys(cartData).length == 0 ? "No Item" : "Order"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
