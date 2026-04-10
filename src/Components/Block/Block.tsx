import styles from './Block.module.css';
import Roulette from "../Roulette/Roulette.tsx";
import CardInfo from "../CardInfo/CardInfo.tsx";
import type {Card} from "../../types/Card.ts";
import Telegram from '../../assets/images/telegram.svg?raw';
import GooglePlay from '../../assets/images/google play.svg?raw';
import Share from '../../assets/images/share.svg?raw';

const cards: Card[] = [
  {id: 1, title: 'оставь отзыв', description: 'Поделитесь своим мнением о HiroVPN и получите 3 дня VPN бесплатно!', buttonText: 'Оставить отзыв', img: undefined},
  {id: 2, title: 'Поделиться с Друзьями', description: 'Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!', buttonText: 'поделиться', img: Share},
  {id: 3, title: 'Поддержите нас лайками', description: 'Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!', buttonText: 'поддержать', img: GooglePlay},
  {id: 4, title: 'Оцени нас в Google Картах', description: 'Поделись впечатлением и получи 1 день VPN в подарок!', buttonText: 'оценить', img: undefined},
  {id: 5, title: 'Оцени нас в ЯНДЕКС Картах', description: 'Поделись впечатлением и получи 1 день VPN в подарок!', buttonText: 'оценить', img: undefined},
  {id: 6, title: 'Подписаться на TG-канал ', description: 'Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!', buttonText: 'подписаться', img: Telegram},
]

const Block = () => {

  return (
    <div className={styles.block}>
      <h1 className={styles.block__title}>Аккаунт</h1>
      <h2 className={styles.block__subtitle}>Квесты</h2>
      <div className={styles.block__main}>
      <div className={styles.block__roll}>
        <Roulette/>
        <CardInfo title='Расскажи о Hiro' description='Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас.
        Пришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно! Чем больше охват, тем длиннее подарок!' buttonText='Отправить ссылки' isWhite={true} isRed={true} />
      </div>

        <div className={styles.block__cards}>
          {cards.map((card) => (
            <CardInfo key={card.id} title={card.title} description={card.description} buttonText={card.buttonText} isWhite={false} img={card.img} isRed={false} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Block;