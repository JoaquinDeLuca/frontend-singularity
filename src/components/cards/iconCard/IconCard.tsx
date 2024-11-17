import styles from './IconCard.module.css'

interface Props {
  imgSrc: string;
  text: string;
}

export const IconCard: React.FC<Props> = ({ imgSrc, text }) => {
  return (
    <div className={styles.iconCard}>
      <div className={styles.icon}>
        <img src={imgSrc} alt={`${text} Icon`} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};


