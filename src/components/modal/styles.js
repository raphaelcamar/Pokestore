import styled from 'styled-components';


export const Container = styled.div`
    width : 50%;
    margin : 5% auto;
    background : #FFF;
    border : 1px solid ${props => props.theme.colors.primary};
    border-radius : 25px;

`

export const Spacing = styled.div`
    padding : 16px;
    h2{
        padding-bottom : 16px;
    }
`

export const Button = styled.div`
       outline: none;
    border: 1px solid ${props => props.theme.colors.secundary};
    width: 100%;
    padding: 10px;
    font-weight: 500;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary};
    margin : 16px 0 !important;
    border-radius : 10px;
    background : #FFF;
    text-align : center;
    &:hover{
        transition: all ease-out 0.1s;
        transform: scale(1.05);
        cursor:pointer;
    }
    &:focus{
        outline : none;
    }
`