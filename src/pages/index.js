import * as React from "react";
import "../styles/styling.css";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Demo from "../components/Demo";
import Footer from "../components/Footer";
import ValueProps from "../components/ValueProps";
import wordmark from "../images/wordmarkBluePNG.png";

const IndexPage = () => {
  return (
    <main className="index-container">
      <div className="content">
        <Header />
        <Intro />
        <Demo />
        <ValueProps />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
