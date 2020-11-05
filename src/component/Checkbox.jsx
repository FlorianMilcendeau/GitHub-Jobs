import React from 'react';
import './Checkbox.css';
import PropType from 'prop-types';

const Checkbox = ({ id, value, setChecked, getBool }) => {
  const handleCheckbox = (e) => {
    if (e.target.checked) {
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
  setChecked: PropType.func,
};
