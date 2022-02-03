import styled from "styled-components";

const EmptyHistory = styled.div`
  background-color: var(--white);
  height: 446px;
  width: 326px;
  overflow: scroll;
  padding-top: 23px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 73px;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    color: var(--gray);
  }
`;

export default EmptyHistory;
