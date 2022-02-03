import axios from "axios";
import { useContext, useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
} from "../../components/GlobalComponents";
import { IoHomeOutline } from "react-icons/io5";
import { Header } from "../../components/HomeComponents";
import { useNavigate } from "react-router";
import TokenContext from "../../contexts/tokenContext";
import { Link } from "react-router-dom";

export default function IncomingTransaction() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const { token } = useContext(TokenContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(description, value, token);

    axios
      .post(
        "http://localhost:5000/transactions",
        {
          user: "Pedro",
          description,
          value,
          type: "incoming",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response);
        alert("erro ao criar transacao");
      });
  }

  return (
    <Container>
      <Header>
        <h1>Nova entrada </h1>
        <Link to="/home">
          <IoHomeOutline color="white" size="30px" />
        </Link>
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
