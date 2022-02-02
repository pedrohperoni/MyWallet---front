import {
  Balance,
  Header,
  Transaction,
  TransactionButton,
  TransactionButtonContainer,
  TransactionsContainer,
} from "../../components/HomeComponents";
import { Link } from "react-router-dom";
import {
  IoExitOutline,
  IoRemoveCircleOutline,
  IoAddCircleOutline,
} from "react-icons/io5";
import { Container } from "../../components/GlobalComponents";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = () => {
    axios
      .get("http://localhost:5000/transactions")
      .then((res) => {
        setTransactions([...res.data]);
      })
      .catch((err) => {
        console.log(err.response);
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
      <TransactionsContainer>
        {transactions.length === 0 ? (
          <p>Nada</p>
        ) : (
          transactions.map((transaction) => (
            <Transaction>
              <span>
                <span>23/01</span>
                <p>{transaction.description}</p>
              </span>

              <span>{transaction.value}</span>
            </Transaction>
          ))
        )}
        <Balance>
          <p>SALDO</p>
          <span>2000</span>
        </Balance>
      </TransactionsContainer>

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
