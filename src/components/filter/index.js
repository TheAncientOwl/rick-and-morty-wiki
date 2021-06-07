import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterForm, FilterInput, FilterLabel, FilterText, SearchButton } from './FilterElements';

export default function Filter({ onValueChange, defaultText }) {
  const [value, setValue] = useState(defaultText);

  return (
    <FilterContainer>
      <FilterText>Filter: </FilterText>
      <FilterForm>
        <FilterLabel>
          <FilterInput type='text' value={value} onChange={e => setValue(e.target.value)} />
        </FilterLabel>
      </FilterForm>
      <SearchButton onClick={() => onValueChange(value)} />
    </FilterContainer>
  );
}

Filter.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  defaultText: PropTypes.string.isRequired,
};
