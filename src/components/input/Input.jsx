import React, { useState } from 'react';
import { Container } from './index';

const Input = ({ searchPokemon, label, placeholder, labelButton }) => {
  const [textInput, setTextInput] = useState('');

  const search = value => {
    searchPokemon(value);
    // setTextInput('');
  };

  const updateText = input => {
    setTextInput(input.target.value);
  };

  const keyPressed = key => {
    if (key.key === 'Enter') {
      search(textInput);
      // setTextInput('')
    }
  };

  return (
    <Container>
      <label htmlFor="inputSearch">{label}</label>
      <div>
        <input
          type="text"
          name="search"
          placeholder={placeholder}
          value={textInput}
          id="inputSearch"
          onChange={input => {
            updateText(input);
          }}
          onKeyUp={key => {
            keyPressed(key);
          }}
        />
        <button
          type="button"
          onClick={_ => {
            search(textInput);
          }}
        >
          {labelButton}
        </button>
      </div>
    </Container>
  );
};

export default Input;
