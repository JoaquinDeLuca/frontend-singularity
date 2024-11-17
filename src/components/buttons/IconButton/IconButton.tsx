import styles from "./IconButton.module.css";
import Arrow from '../../../assets/icons/arrow-right.svg'

interface Props {
  placeholder: string;
}

export const IconButton = ({ placeholder }: Props) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
      <button className={styles.button}>
        <span className={styles.arrow}>
          <img src={Arrow} alt="arrow" />
        </span>
      </button>
    </div>
  );
};
