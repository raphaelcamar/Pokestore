import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';

const Paginate = props => {
  const [pageIndex, setPageIndex] = useState([]);

  useEffect(() => {
    const { pokemons } = props;
    const { urlPokemons } = pokemons;
    const newState = [];
    while (urlPokemons.length > 0) {
      newState.push(urlPokemons.splice(0, 12));
    }
    setPageIndex(newState);
  }, [props.pokemons.urlPokemons]);

  const renderPage = page => {
    console.log(page);
  };

  const renderPages = () =>
    // Alterar o estado do redux,
    pageIndex.map((item, index) => (
      <button
        className="itemIndex"
        onClick={() => {
          renderPage(item);
        }}
      >
        {index}
      </button>
    ));
  return (
    <Container>
      <button onClick={() => {}}>Anteior</button>
      {renderPages()}
      <button onClick={() => {}}>Próxima</button>
    </Container>
  );
};

const mapStateToProps = state => ({ pokemons: state.pokemons });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Paginate);

/// pagina inicial -> 1
/// itens por página -> 12
/// separar paginas com 12 itens em cada
