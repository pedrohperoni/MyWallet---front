import {
  Button,
  Container,
  Form,
  Input,
} from "../../components/GlobalComponents";
import { Header } from "../../components/HomeComponents";

export default function OutgoingTransaction() {
  return (
    <Container>
      <Header>
        <h1>Nova saída </h1>
      </Header>
      <Form>
        <Input placeholder="Valor"></Input>
        <Input placeholder="Descrição"></Input>
        <Button>Salvar saída</Button>
      </Form>
    </Container>
  );
}
