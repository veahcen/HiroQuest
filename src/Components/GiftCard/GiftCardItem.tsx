import Gift1 from '../../assets/images/gift1.svg';
import Gift2 from '../../assets/images/gift2.svg';
import Fail from '../../assets/images/fail.svg';
import styles from './GiftCardItem.module.css';
import type {FC} from "react";

interface GiftCardProps {
  icon: 'gift1' | 'fail' | 'gift2';
  label: string;
  isRed?: boolean;
}

const GiftCardItem:FC <GiftCardProps> = ({icon, label, isRed}) => {
  const GiftCardImage = {
    gift1: Gift1,
    gift2: Gift2,
    fail: Fail,
  } as const;

  return (
    <article className={`${styles.card} ${isRed && styles.card__red}`}>
      <span className={styles.card__header}>{label.split(' ')[0]}</span>
      <img src={GiftCardImage[icon]} alt={label}/>
      <span className={styles.card__footer}>{label.split(' ').slice(1)}</span>
    </article>
  );
};

export default GiftCardItem;