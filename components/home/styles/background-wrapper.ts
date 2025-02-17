import styled from "styled-components"

export const BackgroundWrapper = styled.div`
  & > :nth-child(1) {
    position: relative;
    z-index: 2;
  }

  & > :nth-child(2) {
    position: fixed;
    inset: 0;
    z-index: 1;
  }
`
