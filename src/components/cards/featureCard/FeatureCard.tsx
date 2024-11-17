import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  imageSrc: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  onClick,
  imageSrc,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Feature Image" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
