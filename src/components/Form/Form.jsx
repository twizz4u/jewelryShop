import { useState } from "react";
import { uiActions } from "../../store/UI";
import { cartActions } from "../../store/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    phoneNo: "",
    address: "",
    state: "",
  });

  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState({}); // Changed 'error' to 'errors' and initialized as object
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.items);

  const closeHandler = () => {
    dispatch(uiActions.formToggle());
  };

  const validate = () => {
    const newErrors = {};
    if (!formValue.name.trim()) newErrors.name = "Name is required";
    if (!formValue.surname.trim()) newErrors.surname = "Surname is required";
    if (!formValue.phoneNo.trim()) newErrors.phoneNo = "Phone number is required";
    if (!formValue.state.trim()) newErrors.state = "State is required";
    if (!formValue.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const productInformation = {
      cart: cart,
      buyerInformation: formValue,
    };

    try {
      await fetch("https://jewelriescart-default-rtdb.firebaseio.com/orders.json", {
        method: "POST",
        body: JSON.stringify(productInformation),
      });

      setConfirmed(true);
      
      setTimeout(() => {
        dispatch(uiActions.formToggle());
        dispatch(cartActions.removeAllItem());
        dispatch(uiActions.toggle(true));
        navigate("/order_summary/1", { 
          state: { 
            orderItems: cart, 
            buyerInfo: formValue,
            orderId: `ORD-${Date.now()}`
          } 
        });
      }, 2000);
    } catch (error) {
      console.error("Failed to submit order", error);
      // Handle submission error if needed
    } finally {
        setIsSubmitting(false);
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "0", 
      opacity: 1, 
      transition: { delay: 0.1, type: "spring", stiffness: 100 } 
    },
    exit: { y: "100vh", opacity: 0 },
  };

  // Helper for input classes
  const inputClasses = (hasError) => `
    w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200
    ${hasError 
      ? "border-red-500 ring-red-200 focus:border-red-500 focus:ring-red-200" 
      : "border-gray-200 focus:border-purple-600 focus:ring-purple-200"}
  `;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={closeHandler} // Close on backdrop click
      >
        <motion.div
          className="relative w-[90%] sm:w-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
        >
            {/* Close Button */}
            <button 
                onClick={closeHandler}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
                <IoMdClose size={24} />
            </button>

          {confirmed ? (
            <div className="flex flex-col items-center justify-center h-64 p-8 text-center text-green-600">
               <motion.div 
                 initial={{ scale: 0 }} 
                 animate={{ scale: 1 }} 
                 className="text-5xl mb-4"
               >
                 ✅
               </motion.div>
               <h2 className="text-2xl font-bold">Order Placed Successfully!</h2>
               <p className="text-gray-500 mt-2">Redirecting you to summary...</p>
            </div>
          ) : (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h2>
              
              <form onSubmit={submitHandler} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className={inputClasses(errors.name)}
                            value={formValue.name}
                            onChange={(e) => {
                                setFormValue({ ...formValue, name: e.target.value });
                                if(errors.name) setErrors({...errors, name: null});
                            }}
                            placeholder="John"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Surname</label>
                        <input
                            type="text"
                            className={inputClasses(errors.surname)}
                            value={formValue.surname}
                            onChange={(e) => {
                                setFormValue({ ...formValue, surname: e.target.value });
                                if(errors.surname) setErrors({...errors, surname: null});
                            }}
                            placeholder="Doe"
                        />
                        {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname}</p>}
                    </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className={inputClasses(errors.phoneNo)}
                    value={formValue.phoneNo}
                    onChange={(e) => {
                        setFormValue({ ...formValue, phoneNo: e.target.value });
                        if(errors.phoneNo) setErrors({...errors, phoneNo: null});
                    }}
                    placeholder="+1 234 567 890"
                  />
                  {errors.phoneNo && <p className="text-red-500 text-xs mt-1">{errors.phoneNo}</p>}
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <input
                            type="text"
                            className={inputClasses(errors.state)}
                            value={formValue.state}
                            onChange={(e) => {
                                setFormValue({ ...formValue, state: e.target.value });
                                if(errors.state) setErrors({...errors, state: null});
                            }}
                            placeholder="NY"
                        />
                         {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                    </div>
                    <div className="col-span-2">
                         <label className="block text-sm font-medium text-gray-700">Address</label>
                         <input
                            type="text"
                            className={inputClasses(errors.address)}
                            value={formValue.address}
                            onChange={(e) => {
                                setFormValue({ ...formValue, address: e.target.value });
                                if(errors.address) setErrors({...errors, address: null});
                            }}
                            placeholder="123 Street Name"
                        />
                         {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-slate-800 transition duration-300 shadow-lg transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Form;

