import styled from 'styled-components';

export const Container = styled.div `
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
`

export const HeaderCart = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(min-width : 1000px){
        display: none;
}
`