import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 326px;
  margin: 25px 0 22px 0;

  span {
    display: inline-block;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
    color: var(--white);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export default Header;
