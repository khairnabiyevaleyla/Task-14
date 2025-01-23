import React from "react";
import Layout from "./layout/index";
import SliderBanner from "./templates/SlideBanner/SlideBanner";
import ProductsBanner from "./templates/ProductsBanner/ProductsBanner";
import FeautredProducts from "./components/FeautredProducts/index";

const App = () => {
  return (
    <Layout>
      <SliderBanner />
      <ProductsBanner />
      <FeautredProducts />
    </Layout>
  );
};

export default App;
