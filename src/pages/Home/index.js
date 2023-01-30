import { ProductList, JoinUs, BestSlider, NewSlider } from "../../Components";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import ParentSlider from "../../Components/SlidersOfProducts/ParentSlider";
function Home() {
  const { user } = useAuthContext();
  return (
    <>
      <section className="home">
        <BestSlider />
        <ParentSlider />
        <NewSlider />
        {!user && <JoinUs />}
      </section>
    </>
  );
}

export default Home;
