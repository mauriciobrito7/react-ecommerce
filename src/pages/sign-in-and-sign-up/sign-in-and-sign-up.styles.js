import styled from "styled-components";
import { device } from "../../theme";

export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  > *:first-child {
    margin-bottom: 1em;
  }

  ${device.desktop`
    flex-direction: row;
    justify-content: space-between;
  `}
`;
