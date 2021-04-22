import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
    :root{
	--border-radius : 5px;
	--box-shadow :  0px 2px 8px 0px rgba(0,0,0,0.16);

    }
    *{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
        font-family: Roboto, sans-serif;
    }
    body {
        background : #F7F7F7;
    }
`