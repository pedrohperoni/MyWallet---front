import {
  TransactionButton,
  TransactionButtonContainer,
} from "../../components/HomeComponents";
import { Link } from "react-router-dom";
import { HomeContainer } from "./style";

export default function Home() {
  return (
    <HomeContainer>
      <TransactionButtonContainer>
        <Link to="/register">
          <TransactionButton>
            ion-icon
            <p>
              Nova <br /> entrada
            </p>
          </TransactionButton>
        </Link>
        <TransactionButton>
          ion-icon
          <p>
            Nova <br />
            saída
          </p>
        </TransactionButton>
      </TransactionButtonContainer>
    </HomeContainer>
  );
}
