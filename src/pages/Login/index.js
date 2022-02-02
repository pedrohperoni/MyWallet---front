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
        <Input type="email" name="email" placeholder="Email" required />
        <Input typoe="password" name="password" placeholder="Senha" required />
        <Button>Entrar</Button>
        <StyledLink to="/register">Primeira vez? Cadastre-se</StyledLink>
      </Form>
    </LoginContainer>
  );
}
