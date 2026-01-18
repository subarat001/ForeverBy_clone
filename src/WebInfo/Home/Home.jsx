import React from "react";
import Header from "./Header";
import LatestCol from "./LatestCol";
import BestSeller from "./BestSeller";
import Policy from "./Policy";
import Subscribe from "../Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <LatestCol />
      <BestSeller />
      <Policy />
      <Subscribe />
    </>
  );
}
