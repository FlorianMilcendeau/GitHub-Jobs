import React from 'react';
import PropType from 'prop-types';

import './Checkbox.css';

const Checkbox = ({ id, value, setChecked, getBool, isChecked }) => {
  const handleCheckbox = (e) => {
    const { checked } = e.target;
    if (checked) {
      setChecked(getBool ? true : id);
    } else {
      setChecked(getBool ? false : '');
    }
  };

  return (
    <div className='wrapper-checkbox'>
      {
        <input
          className='checkbox'
          id={id}
          name={id}
          type='checkbox'
          checked={isChecked === id || isChecked === getBool ? true : false}
          onChange={(e) => handleCheckbox(e)}
        />
      }
      <label className='label-checkbox' htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default Checkbox;

Checkbox.propType = {
  id: PropType.string.isRequired,
  value: PropType.string.isRequired,
  setChecked: PropType.func.isRequired,
  isChecked: PropType.bool.isRequired,
};
