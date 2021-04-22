import styled from 'styled-components';

export const Container = styled.div `
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    align-items : center;
    /* position : fixed; */
    z-index : 2;
    width : 100%;
    /* margin-bottom : ${(window.innerHeight / 6).toFixed(1)} */

    a{
        font-weight : 300;
        color : #FFF;
        text-decoration : none;
    }
    a:hover{
        text-decoration : underline
    }

    @media(min-width : 1000px){
        /* width: 35%; */
		/* display: contents; */
        position : initial;
}
`

export const HeaderCart = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(min-width : 1000px){
        display: none;
}
`