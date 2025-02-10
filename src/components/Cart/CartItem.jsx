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
      })
    );
  };

  const removeHandler = () => {
    dispatch(cartActions.removeItemCart(cartItem.id));
  };

  const cartItemvalue = "cartItemValue";

  const cursor = { cursor: "pointer" };
  return (
    <div className="cartBox p-4">
      <div className="cartItem flex justify-between border-b-4 pb-3 border-gray-500">
        <div className="cartItemdescription">
          <h3>item name</h3>
          <p>price</p>
          <p>Amount</p>
        </div>
        <div className={`${cartItemvalue} text-right`}>
          <p>{cartItem.name}</p>
          <p>{cartItem.totalPrice}</p>
          <div
            style={{
              // background: "blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              border: "2px solid grey",
              borderRadius: "4px",
            }}
          >
            <span style={cursor} onClick={removeHandler}>
              -
            </span>
            <p>{cartItem.quantity}</p>
            <span style={cursor} onClick={addHandler}>
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
