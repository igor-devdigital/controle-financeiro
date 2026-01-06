import React from "react";
import "./Grid.css";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <div className="history-wrapper">
      <h2 className="history-title">Histórico / Planilha de Gastos</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {itens && itens.length > 0 ? (
            itens.map((item) => (
              <tr key={item.id}>
                <td>{item.desc}</td>
                <td>R$ {item.amount}</td>
                <td>{item.expense ? "Saída" : "Entrada"}</td>
                <td>
                  <button onClick={() => onDelete(item.id)}>Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>Nenhum registro.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;