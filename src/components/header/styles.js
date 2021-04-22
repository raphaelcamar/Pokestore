import styled from 'styled-components';

export const Container = styled.div `
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    align-items : center;
    z-index : 2;
    width : 100%;

    a{
        font-weight : 300;
        color : #FFF;
        text-decoration : none;
    }
    a:hover{
        text-decoration : underline
    }

    @media(min-width : 1000px){
        position : initial;
}
`