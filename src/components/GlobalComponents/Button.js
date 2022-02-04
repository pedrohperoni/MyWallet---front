import styled from "styled-components";

const Button = styled.button`
  pointer-events: ${(props) => (props.enabled ? "all" : "none")};
  opacity: ${(props) => (props.enabled ? "1.0" : "0.5")};
  cursor: ${(props) => (props.enabled ? "pointer" : "not-allowed")};

  width: 326px;
  height: 46px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--light-purple);
  border: 0px solid;

  color: var(--white);
  font-size: 20px;
  line-height: 23.48px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
