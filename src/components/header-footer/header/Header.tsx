import { Link } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import pet from '../../../assets/images/pet.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className='bg-white rounded-full w-max px-3 py-2'>
          <Link to={"/home"}>
            <img className='w-[40px] h-[50px] ' src={pet} alt='logo' />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
