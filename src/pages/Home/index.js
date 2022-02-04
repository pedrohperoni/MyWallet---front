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

  const getTransactions = () => {
    axios
      .get("http://localhost:5000/transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log([...res.data]);
        setTransactions([...res.data]);
        getBalance();
      })
      .catch((err) => {
        notify();
        setShowOverlay(true);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      });
  };

  function getBalance() {
    if (transactions.length > 0) {
      let sum = 0;
      for (let i = 0; i < transactions.length; i++) {
        transactions[i].type === "outgoing"
          ? (sum -= parseInt(transactions[i].value))
          : (sum += parseInt(transactions[i].value));
      }
      setBalance(sum);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

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
                <span>23/01</span>
                <p>{transaction.description}</p>
                <span>{transaction.value}</span>
              </Transaction>
            ))}
          </TransactionBox>

          <Balance>
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
