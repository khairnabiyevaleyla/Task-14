import React from "react";
import Layout from "./layout/index";
import SliderBanner from "./templates/SlideBanner/SlideBanner";
import ProductsBanner from "./templates/ProductsBanner/ProductsBanner";

const App = () => {
  return (
    <Layout>
      <SliderBanner />
      <ProductsBanner />
    </Layout>
  );
};

export default App;
