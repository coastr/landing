import * as React from "react";
import "../styles/styling.css";
import wave from "../images/valueWave.svg";

const valueProps = [
  {
    title: "increase customer throughput",
    description: "by reducing table turnaround time",
    number: "1",
  },
  {
    title: "improve customer exprience",
    description: "by allowing patrons to leave on their own time",
    number: "2",
  },
  {
    title: "free waitstaff's time",
    description: "by removing the tedious payment process",
    number: "3",
  },
];

const ValueProps = () => {
  return (
    <div>
      <div className="value-wave-container">
        <img className="value-wave" src={wave}></img>
      </div>
      <div className="value-props-container">
        <div className="why-coastr-text d-flex text-center text-lg-left">
          why coastr?
        </div>
        <div className="value-props-list-container container">
          <div className="row justify-content-center">
            <div className="col-auto">
              {valueProps.map((valueProp) => (
                <div className="value-prop-container row align-items-center">
                  <div className="col-12 col-lg-2">
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <div className="value-prop-number">
                        {valueProp.number}
                      </div>
                    </div>
                  </div>
                  <div className="value-prop-text-container col-12 col-lg-10">
                    <div className="value-prop-title row justify-content-center justify-content-lg-start text-center text-lg-start">
                      {valueProp.title}
                    </div>
                    <div className="value-prop-description row justify-content-center justify-content-lg-start text-center text-lg-start">
                      {valueProp.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProps;
