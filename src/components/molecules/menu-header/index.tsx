import { useState, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useThemeContext } from '@/contexts/theme';
import { Icon } from '@/components/atoms';
import { AvailableIcons } from '@/components/atoms/icon/available-icons';
import { ContainerSelected, CurrentOption, OptionMenu, WrapperOptions } from './styles';
import { AvailableThemes } from '@/contexts/themes';

const availableThemes = ['fire', 'bug', 'poison', 'water'];

export const MenuHeader: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { changeTheme, currentTheme } = useThemeContext();

  const handleChangeTheme = (theme: string) => {
    changeTheme(theme as AvailableThemes);
    setOpenMenu(!openMenu);
  };

  const renderOptions = (): ReactElement => (
    <>
      {availableThemes.map(theme => {
        if (theme === currentTheme.title) return '';

        return (
          <OptionMenu type="button" key={uuidv4()} onClick={() => handleChangeTheme(theme)}>
            <Icon icon={theme as AvailableIcons} />
            {`${theme} store`}
          </OptionMenu>
        );
      })}
    </>
  );

  const generate = () => (
    <ContainerSelected>
      <CurrentOption open={openMenu} type="button" onClick={() => setOpenMenu(!openMenu)}>
        <Icon icon={currentTheme.title as AvailableIcons} />
        <span>{`${currentTheme.title} store`}</span>
      </CurrentOption>
      <WrapperOptions open={openMenu}>{renderOptions()}</WrapperOptions>
    </ContainerSelected>
  );

  return <>{generate()}</>;
};
