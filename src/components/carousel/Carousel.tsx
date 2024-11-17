import styles from "./Carousel.module.css";
import CarouselCard from "./carouselCard/CarouselCard";

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.cardsContainer}>
        <CarouselCard bgColor="#ff6752" />
        <CarouselCard bgColor="#4487ff" isActive />
        <CarouselCard bgColor="#ff6752" />
      </div>
    </div>
  );
};

export default Carousel;
