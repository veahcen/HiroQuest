
import styles from './Roulette.module.css';
import Wheel from '../../assets/images/wheel.svg'
import AccentButton from '../AccentButton/AccentButton.tsx';
import Gift from '../../assets/images/featured-seasonal-and-gifts.svg?raw';
import type {Day} from "../../types/Day.ts";
import type {GiftCard} from "../../types/GiftCard.ts";
import GiftCardItem from '../GiftCard/GiftCardItem.tsx';
import {useEffect, useState} from "react";
import Union from '../../assets/images/Union.svg'
import {formatTime} from "../../utils/formatTime.ts";
import WinModal from "../WinModal/WinModal.tsx";



const days: Day[] = [
  {id: 'Mon', number: 1},
  {id: 'Tue', number: 2},
  {id: 'Wed', number: 3},
  {id: 'Thu', number: 4},
  {id: 'Fri', number: 5},
  {id: 'Sat', number: 6},
  {id: 'Sun', number: 7},
]

const GiftCards: GiftCard[] = [
  { icon: "gift1", label: "Скидка 50%"},
  { icon: "fail", label: "Попробуйте завтра"},
  { icon: "gift2", label: "Бесплатно 2 дня"},
  { icon: "gift1", label: "Скидка 30%"},
  { icon: "gift2", label: "Бесплатно 6 часов"},
  { icon: "fail", label: "Попробуйте завтра"},
  { icon: "gift1", label: "Скидка 20%"},
  { icon: "gift2", label: "Бесплатно 3 дня"},
  { icon: "gift1", label: "Скидка 15%"},
  { icon: "fail", label: "Попробуйте завтра"},
  { icon: "gift1", label: "Скидка 10%"},
  { icon: "gift2", label: "Бесплатно 1 день"},
  { icon: "gift1", label: "Скидка 5%"},
];

const W = 120;
const G = 5.35;

const Roulette = () => {
  const BELT = Array.from({ length: 159 }, (_, i) => GiftCards[i % GiftCards.length]);

  const [offset, setOffset] = useState(0);
  const [timeLeft, setTimeLeft] = useState<null | number>(null);
  const [spinning, setSpinning] = useState(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [daysOffset, setDaysOffset] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const [random , setRandom] = useState<number>(0);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const [cooldown, setCooldown] = useState(() => {
    try {
      const saved = localStorage.getItem("slotCooldown");
      if (saved) {
        const end = parseInt(saved);
        if (end > Date.now()) {
          setDisabled(true);
          return end;
        }
        localStorage.removeItem("slotCooldown");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) { /* empty */ }
    return null;
  });

  useEffect(() => {
    if (!cooldown) return;

    const update = () => {
      const left = cooldown - Date.now();

      if (left <= 0) {
        setCooldown(null);
        setTimeLeft(null);
        localStorage.removeItem("slotCooldown");
        if(daysOffset === 7) {
          setDaysOffset(1)
        } else {setDaysOffset(day => day+1)}
        setOffset(0);
        setDisabled(false);
        return;
      }

      setTimeLeft(left);
    };

    update();

    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [cooldown, daysOffset]);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);

    const rand = daysOffset === 7 ? 11 : Math.floor(Math.random() * GiftCards.length);
    const target = GiftCards.length * 3 + rand;

    const newOffset = -(target * (W + G) - (W + G));

    setOffset(newOffset);
    setTimeout(() => {
      setSpinning(false);
      setRandom(rand)
      handleOpen()
      setOffset(0);
      const end = Date.now() + 86400000;
      setDisabled(true);
      setCooldown(end)
      localStorage.setItem("slotCooldown", end.toString());
    }, 3000);
  };

  return (
    <div className={styles.roulette}>
      <div className={styles.roulette__containerUp}>
        <div>
          <h3 className={styles.roulette__title}>Колесо Фортуны</h3>
          <p className={styles.roulette__subtitle}>Испытайте удачу раз в день <br/> и выигрывайте бонусы для VPN!</p>
        </div>
        <img src={Wheel} alt="Щит"/>
      </div>

      <div className={`${cooldown ? styles.roulette__timeSt : styles.roulette__spin}`}>
        {!cooldown && <div
          className={styles.track}
          style={{
            transform: `translateX(${offset}px)`,
            transition: spinning
              ? "transform 3s cubic-bezier(0.1, 0.7, 0.2, 1)"
              : "none",
          }}
        >
          {BELT.map((card, i) => (
            <GiftCardItem key={i} icon={card.icon} label={card.label}/>
          ))}
        </div>}

        {cooldown && <div className={styles.roulette__timeSt}>
          {timeLeft && (() => {
            const [h, m, s] = formatTime(timeLeft).split(':');

            const renderBlock = (value:string, label:string) => (
              <div className={styles.timeBlock}>
                <div className={styles.timeDigits}>
                  {value.split('').map((digit, i) => (
                    <div key={i} className={styles.timeCard}>
                      {digit}
                    </div>
                  ))}
                </div>
                <span className={styles.timeLabel}>{label}</span>
              </div>
            );

            return (
              <div className={styles.timer}>
                {renderBlock(h, 'Часы')}
                <div className={styles.timeSeparator}>:</div>
                {renderBlock(m, 'Минуты')}
                <div className={styles.timeSeparator}>:</div>
                {renderBlock(s, 'Секунды')}
              </div>
            );
          })()}
        </div>}

        {!cooldown && <div className={styles.roulette__union}>
          <img
            className={styles.roulette__union__image}
            src={Union}
            alt="Union"
          />
        </div>}
      </div>
      <div className={styles.roulette__containerDown}>
        {daysOffset !== 7 ? <AccentButton text='ИСПЫТАТЬ УДАЧУ' img={Gift} isRed={!spinning && !disabled} onClick={spin}
                       disabled={spinning || disabled}/> :
          <AccentButton text='Забрать награду' img={Gift} isRed={false} onClick={spin} />}
        <p className={styles.roulette__text}>Крути колесо 7 дней подряд без пропусков и получи на 7-й день гарантированный 1 день подписки!</p>
        <div className={styles.roulette__days}>
          <div className={styles.roulette__days__line} style={{width: `${14*daysOffset}%`}} />
          {days.map(day => (
            <div key={day.id} className={styles.roulette__day}>{day.number}</div>
          ))}
        </div>
      </div>
      <WinModal icon={GiftCards[random].icon} label={GiftCards[random].label} isOpen={open} onClose={handleClose} />
    </div>
  );
};

export default Roulette;