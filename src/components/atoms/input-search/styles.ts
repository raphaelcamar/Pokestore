import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  label {
    color: ${({ theme }) => theme.font.main};
    font-weight: 700;
    font-size: 1.25rem;
    padding-bottom: 1.08rem;
    padding-top: 1.08rem;
  }

  input {
    outline: none;
    padding: 12px 2px;
    border: 1px solid white;
    -webkit-box-shadow: var(--box-shadow);
    box-shadow: var(--box-shadow);
    margin-bottom: 2.08rem;
    border-radius: 5px 0 0 5px;
    width: 100%;

    &::placeholder {
      color: #c5c5c5;
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.main};
      transition: border 0.2s;
    }
    &:hover {
      outline: none;
    }
  }

  button {
    outline: none;
    padding: 12px 2px;
    border: none;
    width: 5rem;
    -webkit-box-shadow: var(--box-shadow);
    box-shadow: var(--box-shadow);
    margin-bottom: 2.08rem;
    border-radius: 0 5px 5px 0;
    background: ${({ theme }) => theme.main};
    color: white;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
