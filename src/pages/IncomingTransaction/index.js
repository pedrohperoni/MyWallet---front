import {
  Button,
  Container,
  Form,
  Input,
} from "../../components/GlobalComponents";
import { Header } from "../../components/HomeComponents";

export default function IncomingTransaction() {
  return (
    <Container>
      <Header>
        <h1>Nova entrada </h1>
      </Header>
      <Form>
        <Input placeholder="Valor"></Input>
        <Input placeholder="Descrição"></Input>
        <Button>Salvar entrada</Button>
      </Form>
    </Container>
  );
}
