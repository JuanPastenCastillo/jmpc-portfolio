import styled from "styled-components"

export const INDEX_HomeWrapper = styled.div`
  --max-width-content: calc(256px * 2);
  --padding-content-inline: calc(8px * 2);

  max-width: calc(var(--max-width-content) + calc(var(--padding-content-inline) * 2));

  padding-block: calc(8px * 8);
  padding-inline: var(--padding-content-inline);

  display: grid;

  margin-inline: auto;

  & > :nth-child(1) {
    width: fit-content;
    margin-inline: auto;

    & > :nth-child(2) {
      display: grid;

      & > :nth-child(1) {
        font-size: calc(var(--font-size-h1) * 1.2);
        position: relative;
      }

      & > :nth-child(2) {
        position: relative;

        width: fit-content;
        margin-left: auto;

        & > :nth-child(2) {
          position: absolute;
          left: -4px;
          bottom: calc(-2px);

          width: calc(100% + 8px);
          height: 4px;

          border-radius: 8px;
        }
      }
    }
  }

  & > :nth-child(2) {
    margin-top: calc(8px * 8);

    display: grid;
    gap: calc(8px * 2);

    & > p {
      & > span {
        font-size: var(--font-size-paragraph);
        color: var(--color-7);
        font-weight: 600;
        position: relative;

        &:before {
          content: attr(data-content);
          filter: blur(8px);
          position: absolute;
          left: 0;
        }
      }
    }
  }

  & > :nth-child(3) {
    margin-top: calc(8px * 6);

    & > :nth-child(1) {
      position: relative;

      text-decoration: underline;
      &:before {
        content: attr(data-content);
        filter: blur(8px);
        position: absolute;
        left: 0;
      }
    }

    & > :nth-child(2) {
      margin-top: calc(8px * 1);

      display: grid;
      gap: calc(8px * 1);
    }
  }

  & > :nth-child(4) {
    margin-top: calc(8px * 10);

    display: flex;
    justify-content: center;
    gap: calc(8px * 2);
  }
`
