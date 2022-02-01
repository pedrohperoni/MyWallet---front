import styled from "styled-components";

const TransactionButton = styled.div`
  width: 155px;
  height: 114px;
  border-radius: 5px;
  background-color: var(--light-purple);
  color: var(--white);
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;

  p{
     color: var(--white)
     font-size: 17px;
     font-weight: 700;
     line-height:20px;
  }
`;

export default TransactionButton;
