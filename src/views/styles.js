import styled from 'styled-components';

export const AppDiv = styled.div`
    width: 100%;
`

export const Container = styled.div `

    width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
    /* padding-top : ${props => props.theme.marginTop} + 'px' */
`

export const WrapperContainer = styled.div`
    width: 100%;
	padding: 0 1.08rem;

    @media(min-width : 1000px){

        width: 65%;
		padding: 0 1.08rem;
}
`

export const Padding = styled.div`
    padding: 0 1.08rem;
`

export const Cards = styled.div`
	display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const CartBody = styled.div`
    /* display : none; */
    position: absolute;
    left : -100%;
    height : 100vh;
    width : 100%;
    @media(min-width : 1000px){
        width: 35%;
		/* display: contents; */
        position : initial;
}
`
