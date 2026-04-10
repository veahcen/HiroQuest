import type {FC} from "react";
import styles from './AccentButton.module.css';


interface IProps {
  text: string;
  img?: string;
  isRed: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const AccentButton: FC<IProps> = ({text, img, isRed, onClick, disabled}) => {
  return (
    <button className={`${styles.button} ${isRed ? styles.button__red : styles.button__white}`} onClick={onClick} disabled={disabled}>
      <span>{text}</span> {img && <svg width="24" height="24" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: img }} /> }
    </button>
  );
};

export default AccentButton;