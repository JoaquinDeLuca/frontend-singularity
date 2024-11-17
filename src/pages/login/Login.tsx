import { AuthForm } from "../../components/auth";
import styles from './Login.module.css'
import pet from '../../assets/images/pet.svg'

export default function Login() {
  return (
    <div className={styles.background}>
      <img className={styles.pet} src={pet} alt="background" />
      <AuthForm />
    </div>
  )
}
