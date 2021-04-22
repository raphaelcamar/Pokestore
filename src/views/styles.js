import styled from 'styled-components';

export const AppDiv = styled.div`
    width: 100%;
`

export const Container = styled.div `

    width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;

    .show{
        left : 0 !important;
        transition : left ease 0.2s;
    }
    .hide{
        transition : left ease 0.2s;
    }
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
    position: fixed;
    left : -100%;
    top : 160px;
    width : 100%;
    height : 100%;
    @media(min-width : 1000px){
        width: 35%;
        position : initial;
}

`
