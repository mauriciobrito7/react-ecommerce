import styled from "styled-components";
import { device } from "../../theme";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const TitleContainer = styled.h2`
  margin: 0.5em 0;
`;
