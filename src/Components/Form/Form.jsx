import React, { useState } from "react";
import "./Form.css";

const Form = ({ handleAdd }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);
    setDesc("");
    setAmount("");
  };

  return (
    <div className="form-container">
      <div className="input-group">
        <label>Descrição</label>
        <input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Valor</label>
        <input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="radio-group">
        <input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setIsExpense(false)} />
        <label htmlFor="rIncome">Entrada</label>
        <input type="radio" id="rExpense" name="group1" onChange={() => setIsExpense(true)} />
        <label htmlFor="rExpense">Saída</label>
      </div>
      <button className="add-button" onClick={handleSave}>ADICIONAR</button>
    </div>
  );
};

export default Form;