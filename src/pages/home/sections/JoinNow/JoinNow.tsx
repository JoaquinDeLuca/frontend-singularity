import { FeatureCard } from "../../../../components/cards";
import Dog from '../../../../assets/images/dog.png'
import styles from './JoinNow.module.css'

export default function JoinNow() {
  return (
    <section className={`${styles.curve} ${styles.circle} h-[90vh] flex`}>
      <FeatureCard
        title="Make Fetch! Happen"
        description="If you love pets and want exciting work, apply to be a Fetch! Pet Care Provider! We train every team member and provide ongoing support to help you get the most from your experience."
        buttonText="Join Now"
        imageSrc={Dog}
      />
    </section>
  )
}
