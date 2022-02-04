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
    text-align: right;
    text-overflow: ellipsis;
    overflow: hidden;
    min-width: 50px;
    width: 10%;
  }

  span:last-of-type {
    justify-content: left;
    text-overflow: ellipsis;
    max-width: 20%;
    color: ${(props) => (props.type ? "var(--green)" : "var(--red)")};
  }

  p {
    font-size: 16px;
    line-height: 19px;
    color: var(--black);
    align-self: baseline;
    margin: 0 5px 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 60%;
  }
`;

export default Transaction;
