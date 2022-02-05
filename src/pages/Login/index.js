import {
  Button,
  Form,
  FormWarning,
  Input,
  StyledLink,
} from "../../components/GlobalComponents";
import Logo from "../../assets/logo.svg";
import { LoginContainer } from "./styles";
import { useContext, useState } from "react";
import TokenContext from "../../contexts/tokenContext";
import UserContext from "../../contexts/userContext";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

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
        console.log("response", response);
        setToken(response.data.token);
        setUser(response.data.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response);
        setLoginError(true);
        setInterval(() => {
          setLoginError(false);
        }, 2000);
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
        <Button type="button" onClick={handleSubmit} enabled={!loginError}>
          Entrar
        </Button>
        {loginError ? (
          <FormWarning>Nome de usuário ou senha incorreta</FormWarning>
        ) : (
          ""
        )}
        <StyledLink to="/register">Primeira vez? Cadastre-se</StyledLink>
      </Form>
    </LoginContainer>
  );
}
