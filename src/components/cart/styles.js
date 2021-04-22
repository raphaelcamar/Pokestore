import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #FFF;
    border-radius: 5px;
    -webkit-box-shadow: var(--box-shadow);
    box-shadow: var(--box-shadow);
    margin-top : 16px;
    max-height: 70vh;
    overflow: auto;
    overflow-x : hidden;
    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
   &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background:${props => props.theme.colors.primary};
}
`

export const HeaderCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom : 24px;

    div{
        font-size: 1.50rem;
        font-weight: 700;
        display : flex;
        align-items : center;
    }
    svg{
        padding-right: 8px;
    }
    
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
    span{
        font-weight : 700
    }
`

export const Width = styled.div`
width:100%;

`
