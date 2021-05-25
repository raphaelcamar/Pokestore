import React from 'react';
import { catchSVG, translate } from '../../helpers/Helpers';
import Status from '../status/Status';
import { addPokemon } from '../../store/cart/actions/cartActions';
import { connect } from 'react-redux';
import { Container, HeaderCard, StatsRow, NamePokemon, Padding,  WrapperPhoto, WrapperButton } from './styles';
import Button from '../button/Button';
import { bindActionCreators } from 'redux';

const Card = (props) => {
    const { item } = props;
    const { name, photo, stats, price } = item

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
        props.addPokemon(item)
    }

    const ObjPokemon = drawStats().filter(item => item.name)
   
    const status = ObjPokemon;
    
    return (
        <Container>
            <HeaderCard>
                {catchSVG(title)}
                <h1>R$: {price}</h1>
            </HeaderCard>
            <WrapperPhoto>
                <img src={photo} alt="foto do pokemón"/>
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
           <WrapperButton><Button event={add}>Adicionar ao carrinho</Button></WrapperButton>     
        </Container>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({addPokemon}, dispatch);

export default connect(null, mapDispatchToProps)(Card);