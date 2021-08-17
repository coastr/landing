import * as React from "react";
import "../styles/styling.css";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Demo from "../components/Demo";
import Footer from "../components/Footer";
import ValueProps from "../components/ValueProps";

const IndexPage = () => {
  return (
    <main className="index-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coastr</title>
        <link rel="canonical" href="https://coastr.io" />
      </Helmet>
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
