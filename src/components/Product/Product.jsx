import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { uiActions } from "../../store/UI";
import { useEffect } from "react";

const Product = (prop) => {
  const data = prop;

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.additemToCart({
        id: data.data.id,
        title: data.data.name,
        price: data.data.price,
      })
    );

    dispatch(uiActions.toggle(false));
  };

  // if (data.data == null) {
  //   return;
  // }

  return (
    <div className="shadow-sm  rounded-sm">
      <Link to={`/product/${data.data?.id}`}>
        <div className="">
          <img
            src={`../../../assets/images/${data.data?.imgSrcUrl}`}
            alt="jwelery"
          />
        </div>
      </Link>
      <div className="flex items-start justify-between p-2">
        <div>
          <small>{data.data?.name.toUpperCase()}</small>
          <p>{data.data?.shortDescription}</p>
          <p>
            #{data.data?.price} <span>#159000</span>
          </p>
        </div>
        <button
          className=" bg-neutral-100 p-2 rounded-md"
          onClick={addToCartHandler}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
