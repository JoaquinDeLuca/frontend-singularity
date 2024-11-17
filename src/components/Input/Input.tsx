import styles from './Input.module.css'
import { ErrorMessage } from '@hookform/error-message';

interface Props {
  placeholder: string;
  name: string;
  type: string;
  register: any;
  errors: any;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export const Input = ({
  name,
  type,
  placeholder,
  register,
  errors,
  maxLength,
  required,
  minLength,
  pattern
}: Props) => {
  return (
    <>
      <input
        placeholder={placeholder}
        className={styles.input}
        type={type}
        {...register(`${name}`, {
          required: {
            value: required,
            message: "Este campo es obligatorio.",
          },
          minLength: {
            value: minLength,
            message: `Debe tener al menos ${minLength} caracteres.`,
          },
          maxLength: {
            value: maxLength,
            message: `Ingrese un máximo de ${maxLength} caracteres.`,
          },
          ...(pattern && {
            pattern: {
              value: pattern.value,
              message: pattern.message,
            },
          }),
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-red-600 text-sm">{message}</p>
        )}
      />
    </>
  )
}
