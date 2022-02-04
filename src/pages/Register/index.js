import {
  Button,
  Form,
  FormWarning,
  Input,
  StyledLink,
} from "../../components/GlobalComponents";

import Logo from "../../assets/logo.svg";
import { RegisterContainer } from "./styles";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, confirmPassword, name);

    axios
      .post("http://localhost:5000/auth/sign-up", {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
        alert("erro no submit do form");
      });
  }

  console.log(email);

  return (
    <RegisterContainer>
      <img src={Logo} alt="MyWallet" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nome"
          placeholder="Nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/^[a-zA-Z\s]*$/.test(name) ? (
          ""
        ) : (
          <FormWarning>Seu nome deve conter apenas letras.</FormWarning>
        )}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {password === confirmPassword || confirmPassword.length === 0 ? (
          ""
        ) : (
          <FormWarning>As senhas devem ser iguais!</FormWarning>
        )}

        <Button type="submit">Entrar</Button>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
      </Form>
    </RegisterContainer>
  );
}
