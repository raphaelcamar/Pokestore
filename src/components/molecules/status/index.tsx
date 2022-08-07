import { Icon } from '@/components/atoms';
import { AvailableIcons } from '@/components/atoms/icon/available-icons';
import { Container } from './styles';

interface IStatus {
  icon: AvailableIcons;
  name: string;
  value: string;
}
export const Status: React.FC<IStatus> = ({ icon, name, value }) => (
  <Container>
    <Icon icon={icon} />
    <h4>
      {name} : <span>{value}</span>
    </h4>
  </Container>
);
