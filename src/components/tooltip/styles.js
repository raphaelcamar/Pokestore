import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    top : 88px;
    right : 0;
    background-color : #FFF;
    padding : 8px;
    position : fixed;
    z-index : 5;
    border-radius : 25px 0 0 25px;
    box-shadow : var(--box-shadow);
    @media(min-width : 1000px){
        display: none;
}
    svg{
        margin-left : 8px;
        fill : ${props => props.theme.colors.secundary}
    }

`