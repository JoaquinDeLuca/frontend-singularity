import { IconCard } from '../../../../components/cards'
import { IconButton } from '../../../../components/buttons'
import Dog from '../../../../assets/icons/dog-icon.svg'
import Cat from '../../../../assets/icons/cat-icon.svg'
import House from '../../../../assets/icons/house-icon.svg'
import DogFootPrint from '../.././../../assets/icons/dog-footprint-icon.svg'

export default function OurServices() {
  return (
    <section className="py-24 md:py-36 px-6 max-w-screen-2xl m-auto flex flex-col justify-center items-center gap-10 md:flex-row md:justify-around md:items-start">
      <div className='space-y-6'>
        <h3 className='text-primary text-3xl font-bold'>Our Services</h3>
        <p className='text-gray text-balance max-w-[20rem] w-full'>National Brand With a Local Feel. Experience the Fetch! Difference</p>
        <p className='text-primary font-bold'>Enter Your Location and Fetch Our Services</p>
        <div className='w-full sm:w-[18rem]'>
          <IconButton
            placeholder='Zip Code'
          />
        </div>
      </div>
      <div className='space-y-6'>
        <div className='flex gap-6 items-center'>
          <IconCard
            imgSrc={Dog}
            text="Dog Walking"
          />
          <IconCard
            imgSrc={Cat}
            text="Pet Sitting"
          />
        </div>
        <div className='flex gap-6 items-center'>
          <IconCard
            imgSrc={House}
            text="Overnight Care"
          />
          <IconCard
            imgSrc={DogFootPrint}
            text="Other Services"
          />
        </div>
      </div>
    </section>
  )
}
