import styled from "styled-components";
import { device } from "../../theme";

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${device.mobile`
   width:70%; 
  `}
  ${device.tablet`
    width:60%; 
  `}
  ${device.desktop`
    width:45%; 
  `}
  ${device.large`
    width:40%; 
  `}
`;

export const SignInTitle = styled.h2`
  margin: 0.5em 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
