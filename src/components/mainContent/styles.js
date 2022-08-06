import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    width: 65%;
    padding: 0 1.08rem 0 0;
  }
  .btn-load {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .btn-load > button {
    padding: 12px 24px;
    border-radius: 8px;
    background: ${({ theme }) => theme.main};
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }

  .error {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.main};
    padding: 20px 0;
    text-align: center;
    color: ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.light};
    border-radius: 5px;
    margin-bottom: 32px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const WrapperLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
