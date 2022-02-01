import styled from "styled-components";

const Balance = styled.div`
  display: flex;
  width: 326px;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  background-color: var(--white);
  border-radius: 5px;

  p {
    color: var(--black);
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    margin: 0 12px;
  }

  span {
    color: var(--green);
    font-size: 17px;
    line-height: 20px;
    margin: 0 12px;
  }
`;

export default Balance;
