import React from 'react';
import {catchSVG, translate} from '../../helpers/Helpers'
import Status from '../status/Status';
import {addPokemon} from '../../store/cart/actions/index';
import {useDispatch} from 'react-redux';
import {Container, HeaderCard, CardButton, Price, StatsRow, NamePokemon, Padding, Img, WrapperPhoto, WrapperButton} from './styles'

const Card = props => {
    const { item } = props
    const { name, photo, stats, price } = item
    
    const dispatch = useDispatch();

    const {title} = JSON.parse(sessionStorage.getItem('@theme'));


    const drawStats = () =>{
        return stats.map(item => {
            const { base_stat, stat} = item
            const {name} = stat
            return {
                base_stat,
                name : translate(name),
                icon : catchSVG(name),
            }
        })
    }

    const add = () =>{
        dispatch(addPokemon(item))
    }

    const ObjPokemon = drawStats().filter(item => item.name)
   
    const status = ObjPokemon;
    
    return (
        <Container>
            <HeaderCard>
                {catchSVG(title)}
                <Price>R$: {price}</Price>
            </HeaderCard>
            <WrapperPhoto>
                <Img src={photo} alt="foto do pokemón"></Img>
            </WrapperPhoto>
            <NamePokemon>{name}</NamePokemon>
            <Padding>

                <StatsRow>
                    <Status name={status[0].name} icon={status[0].icon} value={status[0].base_stat}/>
                    <Status name={status[1].name} icon={status[1].icon} value={status[1].base_stat}/>
                </StatsRow>

                <StatsRow>
                    <Status name={status[2].name} icon={status[2].icon} value={status[2].base_stat}/>
                    <Status name={status[3].name} icon={status[3].icon} value={status[3].base_stat}/>
                </StatsRow>

            </Padding>
           <WrapperButton><CardButton onClick={add}>Adicionar ao carrinho</CardButton></WrapperButton>     
        </Container>
    )
}

export default Card