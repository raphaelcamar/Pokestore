import { AvailableIcons } from './available-icons';
import {
  BootIcon,
  BugIcon,
  CartIcon,
  FireIcon,
  HeartIcon,
  PoisonIcon,
  ShieldIcon,
  SwordIcon,
  WaterIcon,
} from './icons';

interface IICon {
  icon: AvailableIcons;
}

const getIcon = {
  boot: BootIcon,
  bug: BugIcon,
  cart: CartIcon,
  fire: FireIcon,
  heart: HeartIcon,
  poison: PoisonIcon,
  shield: ShieldIcon,
  sword: SwordIcon,
  water: WaterIcon,
};

export const Icon: React.FC<IICon> = ({ icon }) => {
  const ChoicedIcon = getIcon?.[icon] || null;

  return <ChoicedIcon />;
};
