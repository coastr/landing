import * as React from "react";
import "../styles/styling.css";

const valueProps = [
  { title: "increase customer throughput", description: "by reducing table turnaround time", number: "1" },
  { title: "improve customer exprience", description: "by allowing patrons to leave on their own time", number: "2" },
  { title: "free waitstaff's time", description: "by removing the tedious payment process", number: "3" },
];

const ValueProps = () => {
  return (
    <div className="value-props-container">
      <div className="why-coastr-text">why coastr?</div>
      <div className="value-props-list-container">
        {valueProps.map((valueProp) => (
          <div className="value-prop-container">
            <div className="value-prop-number">{valueProp.number}</div>
            <div className="value-prop-text-container">
              <div className="value-prop-title">{valueProp.title}</div>
              <div className="value-prop-description">{valueProp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueProps;
