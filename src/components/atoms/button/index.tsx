import { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButton> = ({ children, ...props }) => <ButtonStyle {...props}>{children}</ButtonStyle>;
