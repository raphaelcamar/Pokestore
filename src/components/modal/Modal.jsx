import React from 'react';
import {Container, Spacing, Button} from './styles'


const ModalItem = props => {

    const {click} = props

    const close = () =>{
        click()
    }

    return (
        <Container>
           <Spacing>
                <h2 id="simple-modal-title">Compra realizada!</h2>
                <p id="simple-modal-description">
                    Sua compra poderá ser visualizada na aba 'Minhas Compras'
                </p>
                <Button onClick={() =>close()}>Fechar</Button>
           </Spacing>
        </Container>
    )
}

export default ModalItem;