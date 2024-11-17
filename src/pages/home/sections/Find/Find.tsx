import { IconCard } from "../../../../components/cards";
import { IconButton } from "../../../../components/buttons";
import IconRelax from '../../../../assets/icons/relax-icon.svg'
import IconMatch from '../../../../assets/icons/match-icon.svg'
import IconReserve from '../../../../assets/icons/reserve-icon.svg'
import styles from './Find.module.css'

export default function Find() {
  return (
    <section className={`${styles.bgCircle} px-6 max-w-screen-2xl m-auto h-[100vh] py-10 flex gap-14 flex-col-reverse justify-center items-center sm:flex-row sm:justify-evenly sm:items-center`}>
      <div className={`${styles.bg} flex flex-col items-center gap-6 w-full sm:max-w-[28rem] md:items-start md:mr-4`}>
        <div>
          <IconCard
            imgSrc={IconReserve}
            text="Reserve"
          />
        </div>
        <div className='flex justify-end md:w-full'>
          <IconCard
            imgSrc={IconMatch}
            text="Match"
          />
        </div>
        <div>
          <IconCard
            imgSrc={IconRelax}
            text="Relax"
          />
        </div>
      </div>
      <div className='h-[37rem] mt-5 sm:mt-0 flex items-start'>
        <div className='space-y-6  flex flex-col items-center gap-1  sm:items-start'>
          <h3 className='text-primary text-3xl font-bold'>How it Works</h3>
          <p className='text-gray text-balance max-w-[20rem] w-full'>Because finding a good pet sitter shouldn't be a hassle. With Fetch! It's as easy as…</p>
          <p className='text-primary font-bold'>Enter Your Location and Fetch Our Services</p>
          <div className='w-full sm:w-[18rem]'>
            <IconButton
              placeholder='Zip Code'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
