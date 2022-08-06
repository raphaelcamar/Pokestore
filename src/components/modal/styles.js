import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 5% auto;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.main};
  border-radius: 25px;
`;

export const Spacing = styled.div`
  padding: 16px;
  h2 {
    padding-bottom: 16px;
  }
`;

export const Button = styled.div`
  outline: none;
  border: 1px solid ${({ theme }) => theme.light};
  width: 100%;
  padding: 10px;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.main};
  margin: 16px 0 !important;
  border-radius: 10px;
  background: #fff;
  text-align: center;
  &:hover {
    transition: all ease-out 0.1s;
    transform: scale(1.05);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
