import React from "react";
import styles from "./CarouselCard.module.css";
import UserProfile from '../../../assets/images/user-profile.jpg'

interface CarouselCardProps {
  bgColor: string;
  isActive?: boolean;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ bgColor, isActive }) => {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={UserProfile}
        alt="Profile"
        className={styles.profileImg}
      />
      <h3 className={styles.name}>Kenned Dsouza</h3>
      <p className={styles.message}>
        "I like that I got to meet the dog walker who is walking my dog daily
        and consult with her. I also appreciate the daily communication I get
        about the dog and how my dog is doing."
      </p>
    </div>
  );
};

export default CarouselCard;
