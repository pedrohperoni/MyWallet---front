import { LoginContainer } from "./styles";
import Form from "../../components/FormComponents/Form";

import Logo from "../../assets/logo.svg";
import { Input } from "../../components/FormComponents";
import Button from "../../components/FormComponents/Button";

export default function Login() {
  return (
    <LoginContainer>
      <img src={Logo} alt="MyWallet" />
      <Form>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
      </Form>
    </LoginContainer>
  );
}
