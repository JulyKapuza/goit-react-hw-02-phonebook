import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filterLable}>
    Find contact by name
    <input
      className={css.filterImput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
