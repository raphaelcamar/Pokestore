// TODO
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { catchSVG, translate } from '../../helpers/Helpers';
import Status from '../status/Status';
import { addPokemon } from '../../store/cart/actions/cartActions';
import { Container, HeaderCard, StatsRow, NamePokemon, Padding, WrapperPhoto, WrapperButton } from './styles';
import { useThemeContext } from '@/contexts/theme';
import { Button } from '@/components/atoms';

const Card = props => {
  const { item } = props;
  const { name, photo, stats, price } = item;

  const { currentTheme } = useThemeContext();

  const drawStats = () =>
    stats.map(item => {
      const { base_stat, stat } = item;
      const { name } = stat;
      return {
        base_stat,
        name: translate(name),
        icon: catchSVG(name),
      };
    });

  const add = () => {
    props.addPokemon(item);
  };

  const ObjPokemon = drawStats().filter(item => item.name);

  const status = ObjPokemon;
  const [health, attack, defense, speed] = status;
  return (
    <Container>
      <HeaderCard>
        {catchSVG(currentTheme.title)}
        <h1>R$: {price}</h1>
      </HeaderCard>
      <WrapperPhoto>
        <img src={photo} alt="foto do pokemón" />
      </WrapperPhoto>
      <NamePokemon>{name}</NamePokemon>
      <Padding>
        <StatsRow>
          <Status name={health.name} icon={health.icon} value={health.base_stat} />
          <Status name={attack.name} icon={attack.icon} value={attack.base_stat} />
        </StatsRow>

        <StatsRow>
          <Status name={defense.name} icon={defense.icon} value={defense.base_stat} />
          <Status name={speed.name} icon={speed.icon} value={speed.base_stat} />
        </StatsRow>
      </Padding>
      <WrapperButton>
        <Button onClick={() => add()}>Adicionar ao carrinho</Button>
      </WrapperButton>
    </Container>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ addPokemon }, dispatch);

export default connect(null, mapDispatchToProps)(Card);
