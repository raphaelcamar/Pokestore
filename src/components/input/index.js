import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;  
    label{
        color: var(--primary-color-font);
        font-weight: 700;
        font-size: 1.25rem;
        padding-bottom: 1.08rem;
        padding-top: 1.08rem;
    }
    input{
        outline: none;
        padding: 12px 2px;
        border : none;
        -webkit-box-shadow: var(--box-shadow);
        box-shadow: var(--box-shadow);
        margin-bottom: 2.08rem;
        border-radius: 5px;

        &::placeholder{
            color: #C5C5C5;
        }
        &:focus{
            border: 1px solid ${props => props.theme.colors.primary};
        }
        &:hover{
            outline : none
        }
    }
`