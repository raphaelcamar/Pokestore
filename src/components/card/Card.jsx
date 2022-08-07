// TODO
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-shadow */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { translate } from '../../helpers/Helpers';
import { Status } from '@/components/molecules/status';
import { addPokemon } from '../../store/cart/actions/cartActions';
import { Container, HeaderCard, StatsRow, NamePokemon, Padding, WrapperPhoto, WrapperButton } from './styles';
import { useThemeContext } from '@/contexts/theme';
import { Button, Icon } from '@/components/atoms';

const Card = props => {
  const { item } = props;
  const { name, photo, stats, price } = item;

  const { currentTheme } = useThemeContext();

  const filterIcon = name => {
    const icons = ['hp', 'attack', 'defense', 'speed'];
    const hasIcon = icons.find(value => value === name);
    return hasIcon || null;
  };

  const drawStats = () =>
    stats.map(item => {
      const { base_stat, stat } = item;
      const { name } = stat;
      return {
        base_stat,
        name: translate(name),
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
        <Icon icon={currentTheme?.title} />
        <h1>R$: {price}</h1>
      </HeaderCard>
      <WrapperPhoto>
        <img src={photo} alt="foto do pokemón" />
      </WrapperPhoto>
      <NamePokemon>{name}</NamePokemon>
      <Padding>
        <StatsRow>
          <Status name={health.name} icon="heart" value={health.base_stat} />
          <Status name={attack.name} icon="sword" value={attack.base_stat} />
        </StatsRow>

        <StatsRow>
          <Status name={defense.name} icon="shield" value={defense.base_stat} />
          <Status name={speed.name} icon="boot" value={speed.base_stat} />
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
