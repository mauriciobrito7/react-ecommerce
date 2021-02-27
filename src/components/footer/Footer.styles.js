import styled from "styled-components";

export const ContainerFlex = styled.div`
  width: 100%;
  height: 50px;
  top: calc(100vh - 50px);
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  a {
    font-weight: bold;
    border-bottom: 2px solid #00ffcd;
  }
`;
