# 💰 Controle Financeiro Pessoal

Um sistema de gestão financeira moderno e responsivo desenvolvido com **React.js** e **Vite**. Este projeto permite organizar suas finanças diárias, registrando ganhos e gastos com cálculos automáticos e persistência de dados.



## 🚀 Funcionalidades

- **Resumo Inteligente:** Três cards que exibem o total de Entradas, Saídas e o Saldo atualizado.
- **Formulário de Cadastro:** Adição rápida de transações com descrição, valor e categoria (entrada/saída).
- **Histórico Dinâmico:** Uma tabela (Grid) que exibe todas as suas movimentações.
- **Exclusão de Itens:** Botão para remover transações específicas.
- **Armazenamento Local:** Os dados são salvos no `localStorage` do navegador, para que suas informações não sumam ao fechar a página.
- **Reset de Dados:** Função para limpar todo o histórico de transações.

## 🛠️ Tecnologias e Ferramentas

- **React.js:** Biblioteca para construção da interface de usuário.
- **Hooks (useState, useEffect):** Para gerenciamento de estado e persistência de dados.
- **Vite:** Ferramenta de build rápida para desenvolvimento web.
- **CSS3:** Estilização com foco em Clean Design e Responsividade.
- **Git & GitHub:** Versionamento e hospedagem do código.

## 📁 Estrutura do Projeto

```text
src/
 ├── components/
 │    ├── Form/      # Captura de descrição e valor
 │    ├── Grid/      # Tabela com as transações (A Planilha)
 │    ├── Header/    # Título do sistema
 │    └── Resume/    # Cartões de resumo financeiro
 ├── App.jsx         # Cérebro da aplicação (Lógica principal)
 ├── main.jsx        # Ponto de entrada do React
 └── App.css         # Estilos globais