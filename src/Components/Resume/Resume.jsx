import React from "react";
import "./Resume.css";

const Resume = ({ income, expense, total }) => {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <span>Entradas</span>
        <p>{income}</p>
      </div>
      <div className="resume-card">
        <span>Saídas</span>
        <p>{expense}</p>
      </div>
      <div className="resume-card">
        <span>Total</span>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default Resume;