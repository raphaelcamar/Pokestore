import styled from 'styled-components';

export const ButtonStyle = styled.button`
    outline: none;
    border: 1px solid ${props => props.theme.colors.secundary};
    width: 100%;
    padding: 10px;
    font-weight: 500;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary};
    margin : 8px 0 !important;
    border-radius : 10px;
    background : #FFF;
    overflow : hidden;
    &:hover{
        transition: all ease-out 0.1s;
        transform: scale(1.05);
        cursor:pointer;
    }
    &:focus{
        outline : none;
    }
`