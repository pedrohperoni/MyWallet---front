import styled from "styled-components";

const Transaction = styled.div`
  width: 326px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin-bottom: 12px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray);
    font-size: 16px;
    line-height: 19px;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    color: var(--black);
    align-self: baseline;
    margin-left: 12px;
  }
`;

export default Transaction;
