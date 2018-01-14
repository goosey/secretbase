import React from 'react';
import Select from 'react-select';

import { bases } from 'src/constants';

import styles from './styles.scss';
import 'react-select/dist/react-select.css';

const renderOption = (option) => (
  <div className={styles.selectValue}>
    <img src={`/assets/bases/icon_${option.type}.png`} />
    <span>{option.label}</span>
  </div>
);

const BasePicker = ({ base, selectBase }) => {
  return (
    <Select
      name="basePicker"
      className={styles.basePicker}
      onChange={selectBase}
      value={base}
      options={bases}
      optionRenderer={renderOption}
      valueRenderer={renderOption}
      valueKey="id"
      clearable={false}
    />
  );
};

export default BasePicker;