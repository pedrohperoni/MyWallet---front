import {
  Button,
  Form,
  Input,
  StyledLink,
} from "../../components/GlobalComponents";

import Logo from "../../assets/logo.svg";
import { RegisterContainer } from "./styles";

export default function Register() {
  return (
    <RegisterContainer>
      <img src={Logo} alt="MyWallet" />
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirmar a senha" />
        <Button>Entrar</Button>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
      </Form>
    </RegisterContainer>
  );
}
