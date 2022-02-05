import styled from "styled-components";

const Balance = styled.div`
  display: flex;
  width: 326px;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  position: absolute;
  bottom: 0;

  p {
    color: var(--black);
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    margin: 0 12px;
  }

  span {
    color: ${(props) => (props.balance ? "var(--green)" : "var(--red)")};
    font-size: 17px;
    line-height: 20px;
    margin: 0 12px;
  }
`;

export default Balance;
