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

  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value.toLowerCase())) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

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
          onChange={handleNameChange}
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
          onChange={handleEmailChange}
        />
        {/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.toLowerCase()) ||
        email === "" ? (
          ""
        ) : (
          <FormWarning>Insira um e-mail num formato válido!</FormWarning>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.length > 3 || password.length === 0 ? (
          ""
        ) : (
          <FormWarning>Sua senha deve ter mais de 3 carcteres!</FormWarning>
        )}

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

        <Button
          type="button"
          onClick={handleSubmit}
          enabled={
            nameValidation &&
            emailValidation &&
            password === confirmPassword &&
            password.length > 3
          }
        >
          Registrar
        </Button>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
      </Form>
    </RegisterContainer>
  );
}
