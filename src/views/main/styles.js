import styled from 'styled-components';

export const AppDiv = styled.div`
    width: 100%;
`

export const Container = styled.div `

    width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
    overflow: hidden;

    .show{
        left : 0 !important;
        transition : left ease 0.2s;
    }
    .hide{
        transition : left ease 0.2s;
    }
`

export const CartBody = styled.div`
    position: fixed;
    left : -100%;
    top : 160px;
    width : 100%;
    height : 100%;
    @media(min-width : 1000px){
        width: 35%;
        position : fixed;
        left : initial;
        right: 16px;
        top : initial;
        width : 30%;
        height : 100%;
}
`
