import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
export const Filter = ({ onChange }) => {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input name="filter" onChange={onChange} />
    </div>
  );
};
PropTypes.Filter = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,

  onChange: PropTypes.func.isRequired,
};
