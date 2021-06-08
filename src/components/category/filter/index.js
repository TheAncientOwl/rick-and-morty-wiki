import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, SimpleContainer, FilterForm, FilterInput, FilterLabel, FilterText } from './FilterElements';
import { FaSearchengin } from 'react-icons/fa';
import { BiReset } from 'react-icons/bi';

export default function Filter({ onValueChange, onReset, defaultText }) {
  const [value, setValue] = useState(defaultText);

  return (
    <SimpleContainer>
      <FilterText>Filter: </FilterText>
      <FilterForm>
        <FilterLabel>
          <FilterInput type='text' value={value} onChange={e => setValue(e.target.value)} />
        </FilterLabel>
      </FilterForm>
      <Button onClick={() => onValueChange(value)}>
        <FaSearchengin />
      </Button>
      <Button
        onClick={() => {
          setValue(defaultText);
          onReset();
        }}>
        <BiReset />
      </Button>
    </SimpleContainer>
  );
}

Filter.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  defaultText: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};
