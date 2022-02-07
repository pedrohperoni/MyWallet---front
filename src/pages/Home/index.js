import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  Balance,
  EmptyHistory,
  Header,
  Overlay,
  Transaction,
  TransactionBox,
  TransactionButton,
  TransactionButtonContainer,
  TransactionsContainer,
} from "../../components/HomeComponents";

import {
  IoExitOutline,
  IoRemoveCircleOutline,
  IoAddCircleOutline,
} from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "../../components/GlobalComponents";
import TokenContext from "../../contexts/tokenContext";
import UserContext from "../../contexts/userContext";
import { useNavigate } from "react-router";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);

  const [balance, setBalance] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  const notify = () =>
    toast.error("Por favor, faça login novamente!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  let newTransactions = [];

  const getTransactions = () => {
    axios
      .get("http://localhost:5000/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("recebido", [...res.data]);
        setTransactions([...res.data]);
        newTransactions = [...res.data];
        getBalance();
      })
      .catch((error) => {
        notify();
        setShowOverlay(true);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      });
  };

  function getBalance() {
    console.log("getBalance", newTransactions.length);
    if (newTransactions.length > 0) {
      let sum = 0;
      for (let i = 0; i < newTransactions.length; i++) {
        newTransactions[i].type === "outgoing"
          ? (sum -= parseInt(newTransactions[i].value))
          : (sum += parseInt(newTransactions[i].value));
      }
      setBalance(sum);
    }
  }

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <Container>
      <Overlay hidden={!showOverlay}></Overlay>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Header>
        {user === "" ? (
          ""
        ) : (
          <span>
            Olá, {user[0].toUpperCase() + user.substring(1).toLowerCase()}
          </span>
        )}

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
          <TransactionBox>
            {transactions.map((transaction) => (
              <Transaction
                key={transaction._id}
                type={transaction.type === "incoming"}
              >
                <span>{transaction.date}</span>
                <p>{transaction.description}</p>
                <span>{transaction.value}</span>
              </Transaction>
            ))}
          </TransactionBox>

          <Balance balance={balance >= 0 ? true : false}>
            <p>SALDO</p>
            <span>{balance}</span>
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
