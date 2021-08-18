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
        <script id="mcjs">
          {`!function(c,h,i,m,p)
          {
            ((m = c.createElement(h)),
            (p = c.getElementsByTagName(h)[0]),
            (m.async = 1),
            (m.src = i),
            p.parentNode.insertBefore(m, p))
          }
          (document,"script","https://chimpstatic.com/mcjs-connected/js/users/366aaa02479f8f94f4e3a86b7/02b2f3c98d6a6e0323b8a6549.js");`}
        </script>
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
