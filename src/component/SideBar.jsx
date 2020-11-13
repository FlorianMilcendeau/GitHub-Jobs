import React, { useContext } from 'react';

import Checkbox from './Checkbox';
import Input from './Input';

import { FullTimeContext } from '../context/FullTimeContext';
import { LocationContext } from '../context/LocationContext';

import earthIcon from '../assets/icon/earth.svg';
import './SideBar.css';

const SideBar = () => {
  const { setChecked, fullTime } = useContext(FullTimeContext);
  const { setLocation, location } = useContext(LocationContext);

  return (
    <aside className='SideBar'>
      <Checkbox
        isChecked={fullTime}
        getBool
        setChecked={(bool) => setChecked(bool)}
        id='fullTime'
        value='Full Time'
      />
      <h3 className='title-minor'>Location</h3>
      <Input
        setField={(val) => setLocation(val)}
        icon={earthIcon}
        placeHolder='City, state, zip code or country'
      />
      <Checkbox
        isChecked={location}
        setChecked={(val) => setLocation(val)}
        id='london'
        value='London'
      />
      <Checkbox
        isChecked={location}
        setChecked={(val) => setLocation(val)}
        id='amsterdam'
        value='Amsterdam'
      />
      <Checkbox
        isChecked={location}
        setChecked={(val) => setLocation(val)}
        id='newYork'
        value='New York'
      />
      <Checkbox
        isChecked={location}
        setChecked={(val) => setLocation(val)}
        id='berlin'
        value='Berlin'
      />
    </aside>
  );
};

export default SideBar;
