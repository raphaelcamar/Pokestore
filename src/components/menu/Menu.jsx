import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThemesContext } from '../../contexts/ThemeContext';
import { catchSVG } from '../../helpers/Helpers';
import { changeContext } from '../../store/cart/actions/cartActions';
import { ContainerSelected } from './styles';

const Menu = props => {
  const [bool, setBool] = useState(false);
  const { vectorThemes, actualTheme, changeTheme } = useContext(ThemesContext);

  const openTab = valor => {
    setBool(!bool);
  };

  const generate = () => (
    <ContainerSelected>
      <div
        className={`container container-${bool ? 'open' : 'close'}`}
        onClick={() => {
          openTab();
        }}
      >
        <div className="description">
          {catchSVG(actualTheme.title)}
          <span>{`${actualTheme.title} store`}</span>
        </div>
      </div>
      <div className={`options ${bool ? 'open' : 'close'}`}>
        {vectorThemes.map((theme, i) => {
          if (i === 0) return '';

          return (
            <div
              key={theme.toString()}
              className="option"
              onClick={() => {
                changeTheme(theme);
                openTab();
              }}
            >
              <span>
                {catchSVG(theme)}
                {`${theme} store`}
              </span>
            </div>
          );
        })}
      </div>
    </ContainerSelected>
  );

  return <>{generate()}</>;
};

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => bindActionCreators({ changeContext }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
