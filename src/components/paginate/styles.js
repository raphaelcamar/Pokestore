import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    background: ${({ theme }) => theme.main};
    width: 15%;
    padding: 16px;
    border-radius: 12px;
    color: white;
    border: none;
    &:hover {
      cursor: pointer;
      /* transform: scale(1.1);
      transition: transform .2s ease; */
    }

    .itemIndex {
      background: black;
    }
  }
`;
