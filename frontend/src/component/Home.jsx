import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Corosel from "./Corosel";
import Container from "react-bootstrap/Container";
import Products from "./Products";

import "../css/Home.css";
import Ads from "./Ads";
const Home = () => {
 
  return (
    <>
      <Header />
      <Container fluid>
        <Corosel />
        <Ads />
        <Products />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
