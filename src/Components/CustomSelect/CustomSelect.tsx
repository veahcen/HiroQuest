import type {Option} from "../../types/Option.ts";
import {useState} from "react";
import styles from './CustomSelect.module.css';
import Ru from '../../assets/images/russia.svg';
import En from '../../assets/images/england.svg';
import Arrow from '../../assets/images/arrow.svg';

const options: Option[] = [
  { value: 'en', label: 'En', full: 'English', svg: En },
  { value: 'ru', label: 'Ru', full: 'Русский', svg: Ru },
];

const CustomSelect = () => {
  const [selected, setSelected] = useState(options[1]);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.select}>
      <button className={styles.select__header} onClick={() => setOpen(open => !open)}>
        {selected.label}

        <img className={open ? styles.select__arrow : styles.select__arrow__down} src={Arrow} alt="Выпадающее меню"/>
      </button>

      {open && (<div className={styles.select__dropdown}>
        {options.map(option => (
          <div
            key={option.value}
            className={styles.select__item}
            onClick={() => {
              setSelected(option);
              setOpen(false);
            }}
          >
            <img src={option.svg} alt={option.full}/>
            {option.full}
          </div>
        ))}
      </div>)}
    </div>
  );
};

export default CustomSelect;