import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Models from "./components/Models";
import NavBar from "./components/NavBar";

const getModel = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModel();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar />
      <Banner />
      {/* Tab */}
      <div className="tabs tabs-box justify-center gap-10 bg-transparent ">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-50 ${activeTab === "model" && "bg-linear-to-r from-pink-500 to-red-500 text-white"}`}
          aria-label="Models"
          defaultChecked
          onClick={() => setActiveTab("model")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-50 ${activeTab === "cart" && "bg-linear-to-r from-pink-500 to-red-500 text-white"}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && (
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      )}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}

      <Footer />
    </>
  );
}

export default App;
