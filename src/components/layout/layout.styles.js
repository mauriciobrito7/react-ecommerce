import styled from "styled-components";
import { device } from "../../theme";

export const LayoutContainer = styled.div`
  width: 100%;
  padding: 1em;
  ${device.tablet`
    width: 90%;
    margin: 0 auto;
  `}
`;
