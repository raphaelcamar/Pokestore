import styled from 'styled-components';


export const Container = styled.div`
    width : 100%;
    padding-top : 32px;
    padding-bottom : 32px;
    display : flex;
    flex-direction : column;
`

export const WrapperContainer = styled.div`
    margin : 16px;
    padding : 16px;
    border-radius : 15px;
    box-shadow :  var(--box-shadow);
    background-color : #FFF;
    display : flex;
    flex-direction : column;
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 1.15rem;
    padding-bottom: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom : 1px solid ${props => props.theme.colors.primary};
    &:nth-child(2){
        color : ${props => props.theme.colors.primary}
    }
`
export const ImgText = styled.div`
    display : flex;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
        margin-right: 16px;
    }
`

export const CardPokemons = styled.div`
    display: flex;
    margin : 8px 0;
    justify-content: space-between;
    align-items: center;
    &:hover{
        background-color: #F7F7F7
    }
`

export const Total = styled.span`
    display: flex;
    align-self: flex-end;
    font-weight: 700;
`
export const Error = styled.span`
    width : 50%;
    padding : 50px;
    margin : 0 auto;
    color : ${props => props.theme.colors.primary};
    background-color : ${props => props.theme.colors.third};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.primary};
    text-align : center;
    font-size : 1.25rem;
`