import { LoginContainer } from "./styles";

import Logo from "../../assets/logo.svg";

export default function Login() {
  return (
    <LoginContainer>
      <img src={Logo} alt="MyWallet" />
    </LoginContainer>
  );
}
