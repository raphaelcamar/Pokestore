import styled from 'styled-components';


export const Container = styled.div`
    width: 35%;
    background: #FFF;
    border-radius: 5px;
    -webkit-box-shadow: var(--box-shadow);
    box-shadow: var(--box-shadow);
    margin-top : 16px;
    max-height: 70vh;
    overflow: auto;
    /* position: fixed;
    right: 0; */
`

export const HeaderCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom : 24px;
`

export const Title = styled.div`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.colors.colorFont};
`
export const Svg = styled.svg`
    padding-right: 8px;
`

export const Span = styled.span`
    color : ${props => props.theme.colors.colorFont};
    &:hover{
        text-decoration: underline;
        cursor : pointer;
    }
`
export const Spacing = styled.span`
    padding : 16px;
    display : flex;
    flex-direction : column;
`

export const Message = styled.div`
    width: 100%;
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 20px 0;
    text-align: center;
    color : ${props => props.theme.colors.primary};
    background-color : ${props => props.theme.colors.third};
    border-radius: 5px;
`

export const TotalPrice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.secundaryColorFont};
`
export const ButtonCart = styled.button`
    width: 100%;
    padding : 12px;
    margin-top: 8px;
    border-radius : 10px;
    border: 1px solid ${props => props.theme.colors.secundary};
    color : ${props => props.theme.colors.primary};
    background : #FFF;
    font-size : 1.25rem;
    &:hover{
        cursor : pointer;
        transition: all ease-out 0.1s;
        transform: scale(1.05);
    }
    &:focus{
        outline : none;
    }
`
export const Width = styled.div`
width:100%;

`
