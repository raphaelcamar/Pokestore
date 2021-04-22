import styled from 'styled-components';

export const Container = styled.aside `

    background: #FBFBFB !important;
    -webkit-box-shadow: var(--box-shadow);
    box-shadow: var(--box-shadow);
    margin-bottom: 16px;
`

export const WrapperCard = styled.div`
    padding: 8px 16px ;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const Infos = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
        margin-right: 8px;
    }
    span{
        font-weight: 700;
        font-size: 1.25rem;
        color: #616161;
    }

`
export const SpanQtd = styled.span`
    display: flex;
    align-items: center;
    padding: 8px 0;

    span{
        margin-right: 8px;
    }

    input{
        outline: none;
        padding: 8px 2px;
        border : none;
        -webkit-box-shadow: var(--box-shadow);
        box-shadow: var(--box-shadow);
    }
    input::placeholder{
        color: #C5C5C5;
    }
    input:focus{
        border: 1px solid ${props => props.theme.colors.primary}
    }
    input:hover{
        outline: none;
    }
`

export const Remove = styled.span`
    color: #CBCBCB;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`