import Hero from './sections/Hero/Hero'
import OurServices from './sections/OurServices/OurServices'
import Find from './sections/Find/Find'
import JoinNow from './sections/JoinNow/JoinNow'
import Carousel from '../../components/carousel/Carousel'

interface Props {
  titlePage?: string
}

export default function Home({ titlePage = 'We Get Pet Care!' }: Props) {
  return (
    <div className='mx-auto'>

      <Hero title={titlePage} />

      <section className='sections-container-2'>
        <OurServices />

        <Carousel />
      </section>

      <section className='sections-container'>
        <Find />

        <JoinNow />
      </section>
    </div>
  )
}
