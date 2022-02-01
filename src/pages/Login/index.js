import {
  Button,
  Form,
  Input,
  StyledLink,
} from "../../components/GlobalComponents";
import Logo from "../../assets/logo.svg";
import { LoginContainer } from "./styles";

export default function Login() {
  return (
    <LoginContainer>
      <img src={Logo} alt="MyWallet" />
      <Form>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
        <StyledLink to="/register">Primeira vez? Cadastre-se</StyledLink>
      </Form>
    </LoginContainer>
  );
}
