import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('one punch');

  const onInputChange = ({ target }) => {
    setInputValue(target.vale);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onChange={event => onSubmit(event)}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={event => onInputChange(event)}
      ></input>
    </form>
  );
};
