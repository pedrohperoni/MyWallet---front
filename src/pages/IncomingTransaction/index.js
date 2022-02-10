import axios from "axios";
import { useContext, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormWarning,
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
  const [valueValidation, setValueValidation] = useState(false);
  const [descriptionValidation, setDescriptionValidation] = useState(false);

  const { token } = useContext(TokenContext);

  const navigate = useNavigate();

  const handleValueChange = (e) => {
    setValue(e.target.value);
    if (/^-?[0-9]+(?:\.[0-9]{2})?$/.test(e.target.value)) {
      setValueValidation(true);
    } else {
      setValueValidation(false);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    if (/^\w+(?:\s+\w+)*$/.test(e.target.value)) {
      setDescriptionValidation(true);
    } else {
      setDescriptionValidation(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date().toISOString().slice(5, 10);

    axios
      .post(
        "https://tellawym.herokuapp.com/transactions",
        {
          description,
          value,
          type: "incoming",
          date,
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
        <span>Nova entrada </span>
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
          onChange={handleValueChange}
          placeholder="Valor"
        ></Input>
        {/^-?[0-9]+(?:\.[0-9]{2})?$/.test(value) || value === "" ? (
          ""
        ) : (
          <FormWarning>Numero inteiro ou com duas casas decimais!</FormWarning>
        )}
        <Input
          type="text"
          name="description"
          required
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Descrição"
        ></Input>
        {/^\w+(?:\s+\w+)*$/.test(description) || description === "" ? (
          ""
        ) : (
          <FormWarning>
            A descrição deve conter apenas letras e numeros
          </FormWarning>
        )}
        <Button
          type="button"
          onClick={handleSubmit}
          enabled={valueValidation && descriptionValidation}
        >
          Salvar entrada
        </Button>
      </Form>
    </Container>
  );
}
