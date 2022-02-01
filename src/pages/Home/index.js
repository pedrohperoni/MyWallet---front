import {
  Balance,
  Transaction,
  TransactionButton,
  TransactionButtonContainer,
  TransactionsContainer,
} from "../../components/HomeComponents";
import { Link } from "react-router-dom";
import { HomeContainer } from "./style";

export default function Home() {
  return (
    <HomeContainer>
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
        <Link to="/register">
          <TransactionButton>
            ion-icon
            <p>
              Nova <br /> entrada
            </p>
          </TransactionButton>
        </Link>
        <Link to="/">
          <TransactionButton>
            ion-icon
            <p>
              Nova <br />
              saída
            </p>
          </TransactionButton>
        </Link>
      </TransactionButtonContainer>
    </HomeContainer>
  );
}
