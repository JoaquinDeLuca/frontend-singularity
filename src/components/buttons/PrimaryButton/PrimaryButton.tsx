import styles from './Button.module.css'

interface Props {
  type?: "submit" | "reset" | "button";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const PrimaryButton = ({ type, text, onClick, disabled = false }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={styles.button}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  )
}
