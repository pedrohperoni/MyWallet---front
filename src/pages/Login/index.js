import {
  Button,
  Form,
  Input,
  StyledLink,
} from "../../components/GlobalComponents";
import Logo from "../../assets/logo.svg";
import { LoginContainer } from "./styles";
import { useContext, useState } from "react";
import TokenContext from "../../contexts/tokenContext";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(TokenContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    axios
      .post("http://localhost:5000/auth/sign-in", {
        email,
        password,
      })
      .then((response) => {
        setToken(response.data);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response);
        alert("erro no submit do form");
      });
  }

  return (
    <LoginContainer>
      <img src={Logo} alt="MyWallet" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          typoe="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
        <StyledLink to="/register">Primeira vez? Cadastre-se</StyledLink>
      </Form>
    </LoginContainer>
  );
}
