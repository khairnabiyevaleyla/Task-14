import React from "react";
import Layout from "./layout/index";
import SliderBanner from "./templates/SlideBanner/SlideBanner";
import ProductsBanner from "./templates/ProductsBanner/ProductsBanner";
import FeautredProducts from "./components/FeautredProducts/index";
import FlowersCards from "./components/FlowersCards/index";
import SubscribeForm from "./components/SubscribeForm/index";

const App = () => {
  return (
    <Layout>
      <SliderBanner />
      <ProductsBanner />
      <FeautredProducts />
      <FlowersCards />
      <SubscribeForm />
    </Layout>
  );
};

export default App;
