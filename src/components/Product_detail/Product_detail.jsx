import Form from "../Form/Form";
import { useParams } from "react-router-dom";
import Data from "../../assets/Data";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { uiActions } from "../../store/UI";

const Product_detail = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const productId = params.productId;

  const product = Data.find((product) => {
    return product.id == productId;
  });

  const cart = useSelector((state) => {
    return state.cart.items;
  });

  const ui = useSelector((state) => {
    return state.ui.showCart;
  });

  const formtoggle = useSelector((state) => {
    return state.ui.showForm;
  });

  console.log(formtoggle);

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

  function OrderNowHandler() {}

  console.log(product);
  console.log(product.imgSrcUrl);
  return (
    <div>
      {formtoggle && <Form />}
      {ui && <Cart cart={cart} />}
      <nav className="flex text-center items-center h-20">
        <form className="form basis-1/3 text-left pl-4">
          <input
            type="text"
            className="w-4/5 p-3 border rounded-md"
            placeholder="Search products"
          />
        </form>
        <h2 className=" ml-auto mr-auto text-4xl font-medium">Shop Name</h2>
        <div className="icons basis-1/3">
          <ul className="flex justify-end pr-4 gap-3">
            <li className="mr-4">icon</li>
            <li className="mr-4">icon</li>
            <li className="mr-4">icon</li>
          </ul>
        </div>
      </nav>
      <nav className="ml-auto">
        <ul className="flex p-4 justify-center gap-5">
          <li>Home</li>
          <li>Product</li>
          <li>Shop</li>
          <li>contact</li>
        </ul>
      </nav>
      <div className="flex p-2 gap-8 ml-12">
        <div className="basis-1/3">
          <img src={product.imgSrcUrl} className="rounded-2xl w-full" />
        </div>
        <div className="">
          <h2 className="mb-4">{product.name}</h2>
          <div className="pricing flex mb-4">
            <p>#{product.price}</p>
            <span>#150000</span>
          </div>
          <div className="decription mb-4">{product.decription}</div>
          <form className="mb-4">
            <div className="flex gap-4">
              <input
                type="number"
                min="1"
                step="1"
                defaultValue={"1"}
                className="border-black border-2 rounded-lg text-center w-20"
              />
              <button
                className="bg-slate-950 border rounded-lg text-neutral-50 px-2 py-2 w-52"
                onClick={addItemHandler}
              >
                Add to Cart
              </button>
            </div>
          </form>
          <button
            className="bg-gray-100 px-5 py-2 rounded-md mb-4"
            onClick={OrderNowHandler}
          >
            BUY IT NOW
          </button>
          <p className="mb-2 flex gap-2">
            <span>icon</span>
            Add to Wishlist
          </p>
          <p className="mb-2 flex gap-2">
            <span>category</span>
            Earnings
          </p>
          <div className="mb-2 flex gap-2">
            <span>share:</span>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
        </div>
      </div>
      <div className="mt-14 text-center">
        <h2 className="mb-4">Subscribe to Newsletter</h2>
        <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisi</p>
        <form className="flex gap-2 justify-center items-center mb-4">
          <input
            type="text"
            className="border border-black rounded-lg px-3 py-2"
          />
          <button className="bg-black rounded-lg text-white border px-3 py-2">
            subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Product_detail;
