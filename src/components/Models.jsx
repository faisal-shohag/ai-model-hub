import { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);



  return (
    <div className=" py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold  tracking-tighter mb-4">
            Choose Your AI Model
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            One subscription gives you access to all frontier AI models
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
           <ModelCard model={model}  key={model.id} carts={carts} setCarts={setCarts}/>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 text-zinc-500 text-sm">
          All models are available under one powerful subscription • Cancel
          anytime
        </div>
      </div>
    </div>
  );
};

export default Models;
