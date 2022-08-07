import React from 'react';
import { Icon } from '@/components/atoms';
import { Container } from './styles';

const Status = ({ icon, name, value }) => (
  <Container>
    <Icon icon={icon} />
    <h4>
      {name} : <span>{value}</span>
    </h4>
  </Container>
);

export default Status;
