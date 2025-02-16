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

      color: var(--color-7);

      & > :nth-child(1) {
        font-size: calc(var(--font-size-h1) * 1.2);
      }

      & > :nth-child(2) {
        color: var(--color-8);
        text-align: right;

        text-decoration: underline;
        text-decoration-color: var(--color-7);
        text-decoration-thickness: 4px;
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
      }
    }
  }

  & > :nth-child(3) {
    margin-top: calc(8px * 6);

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
