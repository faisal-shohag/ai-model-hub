import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    const filteredCarts = carts.filter(item => item.id !== id);
    setCarts(filteredCarts)
    toast.success("Item removed from the cart")
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold  tracking-tighter">Your Cart</h1>
        </div>

        {carts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-zinc-400">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {carts.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-100 border border-zinc-300 rounded-3xl p-3 flex gap-6 items-center hover:border-red-600/50 transition-all"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-white rounded-2xl shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-zinc-400 text-sm mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className="text-3xl font-bold ">${item.price}</div>
                  <div className="text-zinc-500 text-sm">per month</div>
                </div>

                {/* Remove Button */}
                <button
                  className="ml-4 text-zinc-500 hover:text-red-500 transition-colors"
                  onClick={() => handleRemove(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}

            {/* Total Summary */}
            <div className="mt-12 bg-zinc-900 border border-zinc-700 rounded-3xl p-8">
              <div className="flex justify-between items-center text-3xl font-bold">
                <span className="text-white">Total</span>
                <span className="text-red-400">${totalPrice}</span>
              </div>

              {/* <p className="text-center text-zinc-500 text-sm mt-2">
                Billed monthly • Cancel anytime
              </p> */}
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                setCarts([])
                toast.success("Payment successful!")
            }}
              className="w-full mt-8 bg-red-600 hover:bg-red-500 activenav:bg-red-700 transition-all py-5 rounded-2xl  text-2xl font-semibold shadow-xl shadow-red-500/30 text-white"
            >
              Proceed to Checkout
            </button>

            {/* <p className="text-center text-zinc-500 text-sm mt-4">
              Secure checkout powered by Stripe
            </p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
