import { InputHTMLAttributes, useState } from 'react';
import { Container } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  handleSubmit: (value: string) => void;
  labelButton: string;
}
export const Input: React.FC<IInput> = ({ label, labelButton, handleSubmit, ...props }) => {
  const [value, setValue] = useState<string>('');

  const keyPressed = key => {
    if (key.key === 'Enter') {
      handleSubmit(value);
    }
  };

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          type="text"
          name="search"
          value={value}
          id={label}
          onChange={e => setValue(e.target.value)}
          onKeyUp={key => {
            keyPressed(key);
          }}
          {...props}
        />
        <button
          type="button"
          onClick={_ => {
            handleSubmit(value);
          }}
        >
          {labelButton}
        </button>
      </div>
    </Container>
  );
};
