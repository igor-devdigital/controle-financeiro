import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Resume from "./Components/Resume/Resume";
import Form from "./Components/Form/Form";
import Grid from "./Components/Grid/Grid";
const App = () => {
  const [transactionsList, setTransactionsList] = useState(() => {
    try {
      const data = localStorage.getItem("transactions");
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.error("Erro ao carregar dados:", err);
      return [];
    }
  });

  const [income, setIncome] = useState("0.00");
  const [expense, setExpense] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    try {
      const amountExpense = transactionsList
        .filter((item) => item && item.expense)
        .map((transaction) => Number(transaction.amount) || 0);

      const amountIncome = transactionsList
        .filter((item) => item && !item.expense)
        .map((transaction) => Number(transaction.amount) || 0);

      const totalExpense = amountExpense.reduce((acc, cur) => acc + cur, 0);
      const totalIncome = amountIncome.reduce((acc, cur) => acc + cur, 0);
      const totalBalance = totalIncome - totalExpense;

      setIncome(totalIncome.toFixed(2));
      setExpense(totalExpense.toFixed(2));
      setTotal(totalBalance.toFixed(2));
    } catch (err) {
      console.error("Erro nos cálculos:", err);
    }
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [transaction, ...transactionsList];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  const handleReset = () => {
    if (window.confirm("Deseja apagar tudo?")) {
      setTransactionsList([]);
      localStorage.removeItem("transactions");
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} />
      
      <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
        <button 
          onClick={handleReset} 
          style={{backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}
        >
          RESETAR HISTÓRICO
        </button>
      </div>

      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </div>
  );
};

export default App;