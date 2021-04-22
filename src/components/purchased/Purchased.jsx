import React from 'react'
import { Container, WrapperContainer, Title, ImgText, CardPokemons, Total, Error } from './styles'
import './styles.css';

const Purchased = props =>{

    const {store} = props
    const purchasedPokemons = JSON.parse(sessionStorage.getItem(`purchased-pokemons-${store}`)) || []
    console.log(purchasedPokemons)

    const renderPurchasedItems = () =>{
        if(purchasedPokemons.length < 1){
            return <Error>Você não tem itens comprados nesta loja</Error>
        }
        return purchasedPokemons.map(pokemon =>{
            console.log(pokemon)
            return (
                <>
                <WrapperContainer>
                    <Title>
                        <span>Pedido de {pokemon.date}</span>
                        <span>Cashback de R$ {pokemon.discount}</span>
                    </Title>
                    {renderPokemons(pokemon.pokemons)}
                    <Total>Total R$ {pokemon.price}</Total>
                </WrapperContainer>
                </>
            )
        })
    }

    const renderPokemons = (pokemons) =>{
        return pokemons.map(pokemon =>{
            return (
                <CardPokemons>
                    <ImgText>
                        <img src={pokemon.photo} alt={pokemon.name}/>
                        <span>{pokemon.name}</span>
                    </ImgText>
                    <span></span>
                    <span>{pokemon.qtd} x {pokemon.price}</span>
                </CardPokemons>
            )
        })
    }

    return (
        <Container>
            {renderPurchasedItems()}           
        </Container>
    )
}

export default Purchased;

                // <div>
                //     <aside className="CartCard">
                //         <div className="container-cartCard">
                //             <div className="infos">
                //                 <img src={pokemon.pokemons[0].photo} alt="foto-do-item-escolhido"/>
                //                 <div className="name">{pokemon.name}</div>
                //             </div>
                //             <span className="price">R$ {pokemon.price}</span>
                //         </div>
                //         <div className="container-cartCard">
                //             <div className="qtd">
                //                 <span>Qtde</span>
                //                 {/* <input type="number" min='1' max='999' value={qtd} readOnly={true}/> */}
                //             </div>
                //         </div>
                //     </aside>
                // </div>