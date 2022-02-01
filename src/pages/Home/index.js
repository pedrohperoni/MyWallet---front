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

export default function Home() {
  return (
    <Container>
      <Header>
        <h1>Olá, Fulano </h1>
        <Link to="/">
          <IoExitOutline color="white" size="30px" />
        </Link>
      </Header>
      <TransactionsContainer>
        <Transaction>
          <span>
            <span>23/01</span>
            <p>Comida gato</p>
          </span>

          <span>19,99</span>
        </Transaction>
        <Transaction>
          <span>
            <span>23/01</span>
            <p>Comida gato</p>
          </span>

          <span>19,99</span>
        </Transaction>
        <Transaction>
          <span>
            <span>23/01</span>
            <p>Comida gato</p>
          </span>

          <span>19,99</span>
        </Transaction>
        <Transaction>
          <span>
            <span>23/01</span>
            <p>Comida gato</p>
          </span>

          <span>19,99</span>
        </Transaction>
        <Transaction>
          <span>
            <span>23/01</span>
            <p>Comida gato</p>
          </span>

          <span>19,99</span>
        </Transaction>

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
