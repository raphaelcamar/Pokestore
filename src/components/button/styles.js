import styled from 'styled-components';

export const ButtonStyle = styled.button`
  outline: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  width: 100%;
  padding: 10px;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.main};
  margin: 8px 0 !important;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  &:hover {
    transition: all ease-out 0.1s;
    transform: scale(1.05);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
