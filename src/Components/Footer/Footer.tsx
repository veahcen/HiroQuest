
import styles from './Footer.module.css';
import AccentButton from "../AccentButton/AccentButton.tsx";
import Telegram from '../../assets/images/telegram.svg?raw';
import AppStore from '../../assets/images/app store.svg';
import Android from '../../assets/images/google play2.svg';
import AndroidTv from '../../assets/images/androidtv.svg';
import Windows from '../../assets/images/windows.svg';
import MacOs from '../../assets/images/mac os.svg';
import Linux from '../../assets/images/linux.svg';
import SBP from '../../assets/images/sbp.svg';
import SberPay from '../../assets/images/sberpay.svg';
import TPay from '../../assets/images/tpay.svg';
import Card from '../../assets/images/credit-card-outline.svg';
import Criot from '../../assets/images/tether.svg';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__text}>
        <div>
          <h3 className={styles.footer__title}>Hiro<span>vpn</span></h3>
          <ul className={styles.footer__ul}>
            <li className={styles.footer__li}>FAQ</li>
            <li className={styles.footer__li}>Тарифы</li>
            <li className={styles.footer__li}>Блог</li>
            <li className={styles.footer__li}>Роутеры</li>
            <li className={styles.footer__li}>Партнёрам</li>
            <li className={styles.footer__li}>Аккаунт</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footer__title}>Скачать</h3>
          <ul className={styles.footer__ul}>
            <li className={styles.footer__li}><img src={AppStore} alt="AppStore"/> IOS</li>
            <li className={styles.footer__li}><img src={Android} alt="Android"/> Android</li>
            <li className={styles.footer__li}><img src={AndroidTv} alt="AndroidTv"/> Android TV</li>
            <li className={styles.footer__li}><img src={Windows} alt="Windows"/> Windows</li>
            <li className={styles.footer__li}><img src={MacOs} alt="MacOs"/> Mac Os</li>
            <li className={styles.footer__li}><img src={Linux} alt="Linux"/> Linux</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footer__title}>Способы оплаты</h3>
          <ul className={styles.footer__ul}>
            <li className={styles.footer__li}><img src={SBP} alt="SBP"/> СБП</li>
            <li className={styles.footer__li}><img src={SberPay} alt="SberPay"/> Sberpay</li>
            <li className={styles.footer__li}><img src={TPay} alt="TPay"/> Tinkoff Pay</li>
            <li className={styles.footer__li}><img src={Card} alt="Card"/> Банковская карта</li>
            <li className={styles.footer__li}><img src={Criot} alt="Criot"/> Криптовалюта</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footer__title}>поддержка 24/7</h3>
          <ul className={styles.footer__ul}>
            <li style={{width: '152px'}}><AccentButton text='Telegram' isRed={false} img={Telegram} /></li>
            <li className={styles.footer__li}>Публичная оферта</li>
            <li className={styles.footer__li}>Пользовательское соглашение</li>
          </ul>
        </div>
      </div>

      <p className={styles.footer__limited}>© 2025 Wolle Development Limited. Все права защищены.</p>
    </footer>
  );
};

export default Footer;