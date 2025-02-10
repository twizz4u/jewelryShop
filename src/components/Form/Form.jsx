import { useState } from "react";
import { uiActions } from "../../store/UI";
import { cartActions } from "../../store/Cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    phoneNo: "",
    address: "",
    state: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const [error, setrror] = useState(false);

  console.log(Object.values(formValue));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cart = useSelector((state) => {
    return state.cart.items;
  });

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "50vh",
    background: "#bbb",
    display: "flex",
    flexDirection: "column",
  };

  function closeHandler() {
    dispatch(uiActions.formToggle());
  }

  function submitHandler(e) {
    e.preventDefault();
    const values = Object.values(formValue);
    const formfilled = values.some((input) => input.length == 0);
    if (formfilled) {
      const dataobject = {};
      for (let key in formValue) {
        dataobject[key] = formValue[key] ? false : true;
      }
      setrror(dataobject);
    } else {
      console.log(cart, formValue);
      const prooductInformation = {
        cart: cart,
        buyerInformation: formValue,
      };
      console.log(prooductInformation);

      fetch("https://jewelriescart-default-rtdb.firebaseio.com/orders.json", {
        method: "POST",
        body: JSON["stringify"](prooductInformation),
      });

      setTimeout(() => {
        dispatch(uiActions.formToggle());
        // dispatch(cartActions.removeAllItem());
        dispatch(uiActions.toggle(true));
        navigate("/order_summary/1");
      }, 2000);

      setConfirmed(true);
    }
  }

  console.log(error.name);
  console.log(confirmed);

  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        zIndex: "2",
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(1px)",
      }}
    >
      {confirmed && <h1>Order successfully...</h1>}
      {!confirmed && (
        <form style={style} className="items-center justify-center gap-3">
          <div
            style={{ position: "absolute", top: "6%", right: "6%" }}
            onClick={closeHandler}
          >
            Cancel Icon
          </div>
          <div className="flex  w-2/4 justify-center">
            <label className=" basis-20">Name</label>
            <div className="flex flex-col">
              <input
                type="text"
                className="grow"
                value={formValue.name}
                onChange={(e) => {
                  setFormValue({ ...formValue, name: e.target.value });
                }}
              />
              {error?.name && (
                <small style={{ color: "red" }}>{"error input name"}</small>
              )}
            </div>
          </div>
          <div className="flex  w-2/4 justify-center ">
            <label className="basis-20">Surname</label>
            <div className="flex flex-col">
              <input
                type="text"
                className="grow"
                value={formValue.surname}
                onChange={(e) => {
                  setFormValue({ ...formValue, surname: e.target.value });
                }}
              />
              {error.surname && (
                <small style={{ color: "red" }}>{"error input surname"}</small>
              )}
            </div>
          </div>
          <div className="flex  w-2/4 justify-center">
            <label className="basis-20">Phone no</label>
            <div className="flex flex-col">
              <input
                type="number"
                className="grow"
                value={formValue.phoneNo}
                onChange={(e) => {
                  setFormValue({ ...formValue, phoneNo: e.target.value });
                }}
              />
              {error.phoneNo && (
                <small style={{ color: "red" }}>{"error input Phone No"}</small>
              )}
            </div>
          </div>
          <div className="flex  w-2/4 justify-center">
            <label className="basis-20">state</label>
            <div className="flex flex-col">
              <input
                type="text"
                className="grow"
                value={formValue.state}
                onChange={(e) => {
                  setFormValue({ ...formValue, state: e.target.value });
                }}
              />
              {error.state && (
                <small style={{ color: "red" }}>{"error input state"}</small>
              )}
            </div>
          </div>
          <div className="flex  w-2/4 justify-center">
            <label className="basis-20">Address</label>
            <div className="flex flex-col">
              <input
                type="text"
                className="grow"
                value={formValue.address}
                onChange={(e) => {
                  setFormValue({ ...formValue, address: e.target.value });
                }}
              />
              {error.address && (
                <small style={{ color: "red" }}>{"error input Adrress"}</small>
              )}
            </div>
          </div>
          <div className="flex w-2/4 justify-end">
            <input
              type="submit"
              value="Place Order"
              className="bg-slate-200 rounded-md py-1 px-3"
              onClick={submitHandler}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
