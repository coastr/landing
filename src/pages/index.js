import * as React from "react";
import "../styles/styling.css";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Demo from "../components/Demo";
import Footer from "../components/Footer";
import ValueProps from "../components/ValueProps";
<<<<<<< HEAD
=======
import wordmark from "../images/wordmark.png";
>>>>>>> 8452285ee5ae3fa0fb31b9e1353a3d57c5073a8c

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
