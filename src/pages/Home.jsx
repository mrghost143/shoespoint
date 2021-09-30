import React from "react";
import Categs from "../components/Categs";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Products from "../components/Products";
import Letter from "../components/Letter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Categs />
      <Products />
      <Letter />
      <Footer />
    </div>
  );
}
