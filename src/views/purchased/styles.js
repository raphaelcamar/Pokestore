import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export const WrapperContainer = styled.div`
  margin: 16px;
  padding: 16px;
  border-radius: 15px;
  box-shadow: var(--box-shadow);
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.15rem;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.main};
  &:nth-child(2) {
    color: ${({ theme }) => theme.main};
  }
`;
export const ImgText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`;

export const CardPokemons = styled.div`
  display: flex;
  margin: 8px 0;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const Total = styled.span`
  display: flex;
  align-self: flex-end;
  font-weight: 700;
`;
export const Error = styled.span`
  width: 50%;
  padding: 50px;
  margin: 0 auto;
  color: ${({ theme }) => theme.main};
  background-color: ${({ theme }) => theme.light};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.main};
  text-align: center;
  font-size: 1.25rem;
`;
