import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model,  carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = () => {
    const isFound = carts.find(item => item.id === model.id)
    if(isFound){
      toast.error("Item already in cart!")
      return
    }
    
    setIsSubscribed(!isSubscribed);
    setCarts([...carts, model])
    toast.success("Item added to cart!")
  };

  return (
    <div className="shadow-lg border border-zinc-300  rounded-3xl overflow-hidden">
      {/* Image */}
      <div className="relative h-56 bg-zinc-200 flex items-center justify-center">
        <img
          src={model.image}
          alt={model.title}
          className="h-40 w-40 object-contain"
        />

        {/* Status Badge */}
        {model.status && (
          <div
            className={`absolute top-4 right-4 px-4 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider
                                        ${model.status === "popular" ? "bg-red-600 text-white" : ""}
                                        ${model.status === "favourite" ? "bg-orange-500 text-white" : ""}
                                        ${model.status === "mostwanted" ? "bg-amber-500 text-white" : ""}
                                    `}
          >
            {model.status === "popular" && "🔥 Popular"}
            {model.status === "favourite" && "❤️ Favourite"}
            {model.status === "mostwanted" && "⭐ Most Wanted"}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold  mb-3">{model.title}</h3>

        <div className="text-zinc-400 text-sm leading-relaxed mb-6 whitespace-pre-line">
          {model.description}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6">
          {model.price === 0 ? (
            <span className="text-3xl font-bold text-emerald-400">Free</span>
          ) : (
            <>
              <span className="text-3xl font-bold ">${model.price}</span>
              <span className="text-zinc-500">/month</span>
            </>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={handleSubscribe}
          className="w-full bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all font-semibold py-4 rounded-2xl text-white text-lg shadow-lg shadow-red-500/30"
        >
          {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
