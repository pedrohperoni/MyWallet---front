import styled from "styled-components";

const Overlay = styled.div`
display: ${(props) => (props.hidden ? "none" : "block")}
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: fixed;
  background-color: var(--black);
  opacity: 0.5;
`;

export default Overlay;
