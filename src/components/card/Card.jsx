import React from 'react';
import {catchSVG, translate} from '../../helpers/Helpers'
import Status from '../status/Status';
import {addPokemon} from '../../store/cart/actions/index';
import {useDispatch} from 'react-redux';
import {Container, HeaderCard, CardButton, Price, StatsRow, NamePokemon, Padding, Img, WrapperPhoto, WrapperButton} from './styles'

const Card = props => {
    const { item } = props
    const { name, photo, stats, price } = item
    
    const dispatch = useDispatch()


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
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="36" viewBox="0 0 27 36"><path d="M15.188,1.678a1.691,1.691,0,0,0-3.1-.917C3.375,13.489,15.75,14.063,15.75,20.25a4.5,4.5,0,1,1-9-.067V14.171a1.688,1.688,0,0,0-2.913-1.16A14.059,14.059,0,0,0,0,22.5a13.5,13.5,0,0,0,27,0C27,10.526,15.188,8.93,15.188,1.678Z" transform="translate(0 0)" fill="#f58e99"/></svg>
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