
import styles from './NavBar.module.css';
import Logo from '../../assets/images/logo.svg';
import CustomSelect from "../CustomSelect/CustomSelect.tsx";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.burger}><div></div> <div></div> <div></div></div>
      <a href="#"><img src={Logo} alt="Логотип HiroQuest"/></a>
      <button className={styles.button}>FAQ</button>
      <button className={styles.button}>Тарифы</button>
      <button className={styles.button__accent}>Скачать</button>
      <div className={styles.navbar__child}>
        <button className={styles.button}>Блог</button>
        <button className={styles.button__white}>Аккаунт</button>
        <CustomSelect/>
      </div>
    </nav>
  );
};

export default NavBar;