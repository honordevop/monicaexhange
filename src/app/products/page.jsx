import Banner from "@/components/Banner";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import React from "react";

const GIFTCARDS = [
  "iTunes",
  "Apple",
  "Google",
  "Amazon",
  "Walmart",
  "Vanilla",
  "Norstorm",
];
const GIFTCARDS2 = [
  "Ebay",
  "Nike",
  "Sephora",
  "Amex",
  "Steam",
  "and many more.",
];

const CRYPTO = [
  "Bitcoin",
  "Etherium",
  "Litcoin",
  "Bnb",
  "Shiba",
  "Doge",
  "Ripple",
];
const CRYPTO2 = ["Ada", "Dot", "BUSD", "MATIC", "Solana", "and many more."];

const REALESTATE = [
  "Residential",
  "Commercial",
  "Estate Development",
  "Estate Management",
  "Brokerage",
  "Investment",
  "Estate Finance and Lending",
];
const Products = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader title="Products/Services" />

      <p className="mt-16 text-4xl text-center">
        We Trade and Exchange different kind of digital assests.
      </p>

      <ProductCard
        image="/giftcard.svg"
        list={GIFTCARDS}
        title="GIFTCARDS"
        list2={GIFTCARDS2}
      />

      <ProductCard
        image="/bitcoin2.svg"
        list={CRYPTO}
        title="CRYPTO"
        list2={CRYPTO2}
      />

      <ProductCard image="/house.svg" list={REALESTATE} title="REAL ESTATE" />

      <Banner />
    </div>
  );
};

export default Products;
