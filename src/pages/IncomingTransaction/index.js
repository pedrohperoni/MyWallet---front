import axios from "axios";
import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
} from "../../components/GlobalComponents";
import { Header } from "../../components/HomeComponents";
import { useNavigate } from "react-router";

export default function IncomingTransaction() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(description, value);

    axios
      .post("http://localhost:5000/transactions", {
        user: "Pedro",
        description,
        value,
        type: "incoming",
      })
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response);
        alert("errou");
      });
  }

  return (
    <Container>
      <Header>
        <h1>Nova entrada </h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          name="value"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Valor"
        ></Input>
        <Input
          type="text"
          name="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
        ></Input>
        <Button>Salvar entrada</Button>
      </Form>
    </Container>
  );
}
