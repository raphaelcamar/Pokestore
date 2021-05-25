import React, { useEffect, useContext } from 'react';
import {Container, WrapperContainer, Cards, CartBody, WrapperLoader} from './styles';
import Input from '../../components/input/Input';
import { filterPokemon } from '../../helpers/Helpers';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Cart from '../../components/cart/Cart';
import Card from '../../components/card/Card';
import {ThemeContext} from 'styled-components'
import { bindActionCreators } from 'redux';
import { fetchLinkPokemons, clear, fetchPokemons } from '../../store/pokemons/actions/pokemonActions'
import { connect } from 'react-redux';
import InfiniteScroll from '../../components/infiniteScroll/InfiniteScroll';


const Main = (props) =>{
    

    const { colors } = useContext(ThemeContext);
    const { theme, showCart } = props;
    const [initial, offset] = props.pokemons.pagination;
    const { urlPokemons } = props.pokemons;

    useEffect(() =>{
        props.clear();
        props.fetchLinkPokemons(theme.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    const fetchPokemons = () =>{
        console.log(props)
        
        const paginated = urlPokemons.slice(initial, offset);
        props.fetchPokemons(paginated, theme.title);
    }
    
    const renderCards = () =>{
        
        if(props.pokemons.pokemons.length <= 0){
            return (
                <WrapperLoader>
                    <Loader type="Puff" color={colors.primary} height={100} width={100}/>
                </WrapperLoader>
                
            )
        }
        return props.pokemons.pokemons.map((pokemon, i) => {
            return <Card key={i} item={pokemon}/>
        });
    }

    return (
        <Container>
            <WrapperContainer>
                    <Input placeholder="Ex: Pikachu" label="Pesquise um pokemón" searchPokemon={() =>{}}/>
                <Cards> 
                    {renderCards()}
                    
                </Cards>
                    <InfiniteScroll fetchMore={fetchPokemons} />
                    <button onClick={fetchPokemons}>Atualizar</button>
            </WrapperContainer>
            <CartBody className={showCart ? 'show' : 'hide'}>
                <Cart/>
            </CartBody>
        </Container>
    )
}


const mapStateToProps = (state) => ({pokemons: state.pokemons});
const mapDispatchToProps = dispatch => bindActionCreators({fetchLinkPokemons, fetchPokemons, clear}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);