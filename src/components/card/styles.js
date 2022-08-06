import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  background: #fff;
  margin-bottom: 16px;
  color: var(--primary-color-font);
  border-radius: 25px;

  @media (min-width: 1000px) {
    width: 30%;
    min-width: 300px;
  }
`;
export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  h1 {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    font-size: 1.3rem;
    color: ${props => props.theme.colors.secundaryColorFont};
  }
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin: 16px 0;
`;

export const NamePokemon = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${props => props.theme.colors.secundaryColorFont};
`;

export const Padding = styled.div`
  padding: 8px 0;
`;

export const WrapperPhoto = styled.div`
  background-color: ${props => props.theme.colors.third};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-bottom: 4%;

  img {
    max-width: 90%;
  }
`;
export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;
