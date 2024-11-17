import { PrimaryButton } from '../../../../components/buttons'
import Golden from '../../../../assets/images/dog-golden.png'
import styles from './Hero.module.css'

interface Props {
  title?: string
}

export default function Hero({ title }: Props) {
  return (
    <section className={`${styles.bgHero}  bg-whiteAndGray h-[90vh] flex justify-center items-center `}>
      <div className='max-w-screen-2xl px-4 flex flex-col gap-24 items-center sm:gap-0 sm:flex-row sm:px-8 sm:justify-between w-full' >
        <div className='mt-10 sm:mt-0 space-y-6'>
          <h1 className='text-white text-5xl font-medium'>{title}</h1>
          <p className='text-white text-wrap max-w-[25rem] w-full'>For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!</p>
          <div className='flex flex-col sm:flex-row items-center gap-7'>
            <PrimaryButton
              text='Schedule Service'
            />
            <p className='text-[#F8F8F8]'>Or Call 866.338.2463</p>
          </div>
        </div>
        <div>
          <div className={styles.imageContainer}>
            <img src={Golden} alt="Feature Image" className={styles.imageDog} />
          </div>
        </div>
      </div>
    </section>
  )
}
