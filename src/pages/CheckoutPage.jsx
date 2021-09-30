import React from "react";
import Categs from "../components/Categs";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Products from "../components/Products";
import Letter from "../components/Letter";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";

export default function CheckoutPage() {
  return (
    <div>
      <Nav />
      <Checkout />
      <Letter />
      <Footer />
    </div>
  );
}
