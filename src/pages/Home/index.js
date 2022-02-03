import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  Balance,
  EmptyHistory,
  Header,
  Transaction,
  TransactionButton,
  TransactionButtonContainer,
  TransactionsContainer,
} from "../../components/HomeComponents";

import {
  IoExitOutline,
  IoRemoveCircleOutline,
  IoAddCircleOutline,
} from "react-icons/io5";
import { Container } from "../../components/GlobalComponents";
import TokenContext from "../../contexts/tokenContext";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const { token } = useContext(TokenContext);

  const getTransactions = () => {
    console.log("trying");
    axios
      .get("http://localhost:5000/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("deu certo");
        console.log([...res.data]);
        setTransactions([...res.data]);
      })
      .catch((err) => {
        console.log("erro front", err.response);
      });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Olá, Fulano </h1>
        <Link to="/">
          <IoExitOutline color="white" size="30px" />
        </Link>
      </Header>

      {transactions.length === 0 ? (
        <EmptyHistory>
          <p>Não há registros de entrada ou saída</p>
        </EmptyHistory>
      ) : (
        <TransactionsContainer>
          {transactions.map((transaction) => (
            <Transaction key={transaction._id}>
              <span>
                <span>23/01</span>
                <p>{transaction.description}</p>
              </span>

              <span>{transaction.value}</span>
            </Transaction>
          ))}
          <Balance>
            <p>SALDO</p>
            <span>2000</span>
          </Balance>
        </TransactionsContainer>
      )}

      <TransactionButtonContainer>
        <Link to="/in-transaction">
          <TransactionButton>
            <IoAddCircleOutline color="white" size="25px" />
            <p>
              Nova <br /> entrada
            </p>
          </TransactionButton>
        </Link>
        <Link to="/out-transaction">
          <TransactionButton>
            <IoRemoveCircleOutline color="white" size="25px" />
            <p>
              Nova <br />
              saída
            </p>
          </TransactionButton>
        </Link>
      </TransactionButtonContainer>
    </Container>
  );
}
