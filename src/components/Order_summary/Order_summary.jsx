import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Order_summary = () => {
  const location = useLocation();
  const { orderItems, buyerInfo, orderId } = location.state || {};

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Debug: Log order items to check image data
  console.log("Order Items:", orderItems);

  // Calculate total
  const total = orderItems?.reduce((acc, item) => acc + item.totalPrice, 0) || 0;

  if (!orderItems || orderItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-serif text-gray-800">No Order Found</h1>
        <p className="text-gray-500 mt-4">It looks like you haven't placed an order yet.</p>
        <Link to="/" className="inline-block mt-8 bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Success Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-500">Thank you for your purchase. Your order has been received.</p>
        <p className="text-sm text-amber-700 font-medium mt-2">Order ID: {orderId}</p>
      </motion.div>

      {/* Order Items */}
      <motion.div 
        className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">Order Items</h2>
        <div className="space-y-6">
          {orderItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                {item.image ? (
                  <img src={item.image.startsWith('/') ? item.image : `/${item.image}`} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">No Img</div>
                )}
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">#{item.totalPrice}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
          <span className="text-gray-600 font-medium">Total</span>
          <span className="text-2xl font-bold text-gray-900">#{total}</span>
        </div>
      </motion.div>

      {/* Buyer Information */}
      <motion.div 
        className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-4 border-b border-gray-100">Shipping Details</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-medium text-gray-900">{buyerInfo?.name} {buyerInfo?.surname}</p>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium text-gray-900">{buyerInfo?.phoneNo}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-500">Address</p>
            <p className="font-medium text-gray-900">{buyerInfo?.address}, {buyerInfo?.state}</p>
          </div>
        </div>
      </motion.div>

      {/* Continue Shopping */}
      <div className="text-center">
        <Link 
          to="/" 
          className="inline-block bg-neutral-900 text-white px-10 py-3.5 rounded-lg font-semibold tracking-wide hover:bg-amber-700 transition-all duration-300 shadow-lg"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Order_summary;
