import {type FC, useState} from "react";
import AccentButton from "../AccentButton/AccentButton.tsx";
import styles from "./CardInfo.module.css";

interface IProps {
  title: string;
  buttonText: string;
  description: string;
  isWhite: boolean;
  img?: string;
  isRed: boolean;
}

const CardInfo:FC <IProps> = ({title, buttonText, description, isWhite, img, isRed}) => {
  const [available, setAvailable] = useState(true);

  const changeAvailable = () => {
    setAvailable(!available);
  }

  return (
    <article className={`${styles.article} ${isWhite ? styles.articleWhite : styles.articleBlack}`}>
      <div>
        <div className={`${styles.availability} ${available ? styles.availabilityYes : styles.availabilityNo}`}>{available ? 'Доступен' : 'Выполнен'}</div>
        <h4 className={`${styles.title} ${isWhite ? styles.titleWhite : styles.titleBlack}`}>{title}</h4>
        <p className={`${styles.description} ${isWhite ? styles.descriptionWhite : styles.descriptionBlack}`}>{description}</p>
      </div>
      {available && <AccentButton text={buttonText} img={img} onClick={changeAvailable} isRed={isRed}/>}
    </article>
  );
};

export default CardInfo;