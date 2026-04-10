
import styles from './WinModal.module.css';
import Gift1 from "../../assets/images/gift1.svg";
import Gift2 from "../../assets/images/gift2.svg";
import Fail from "../../assets/images/fail.svg";
import AccentButton from "../AccentButton/AccentButton.tsx";
import type {FC} from "react";

interface WinModalProps {
  icon: 'gift1' | 'fail' | 'gift2';
  label: string;
  isOpen: boolean;
  onClose: () => void;
}

const WinModal:FC <WinModalProps> = ({icon, label, isOpen, onClose}) => {
  const GiftCardImage = {
    gift1: Gift1,
    gift2: Gift2,
    fail: Fail,
  } as const;

  return (
    <div className={styles.winModal} style={isOpen ? {display: 'flex'} : {display: 'none'}} onClick={onClose}>
      <div className={styles.winModal__content} onClick={e => e.stopPropagation()}>
        <h2 className={styles.winModal__title}>{ icon !== 'fail' ? 'Поздравляем! Вы выиграли' : 'В другой раз повезёт!'}</h2>
        <div className={styles.winModal__box}>
          <span>{label.split(' ')[0]}</span>
          <img src={GiftCardImage[icon]} alt={label}/>
          <span>{label.split(' ').slice(1)}</span>
        </div>
        {icon !== 'fail' && icon !== 'gift2' && <p className={styles.winModal__text}>Активируйте в течение 24 часов</p>}
        {icon !== 'fail' && icon !== 'gift1' && <p className={styles.winModal__text}>Они уже добавлены к вашей подписке</p>}
        <AccentButton text='Продолжить' isRed={true} onClick={onClose} />
      </div>
    </div>
  );
};

export default WinModal;