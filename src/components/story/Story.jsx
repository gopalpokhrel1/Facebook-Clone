'use client'

import styles from "@/styles/story/story.module.css";
import { GoPlus,GoChevronRight,GoChevronLeft } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scroll, { Main } from "@/components/main/Scroll";

export default function Story() {
    const CustomPrevArrow = (props) => (
        <div onClick={props.onClick} className={styles.customPrevArrow}>
          <GoChevronLeft />
        </div>
      );
      
      const CustomNextArrow = (props) => (
        <div onClick={props.onClick} className={styles.customNextArrow}>
          <GoChevronRight />
        </div>
      );
    const settings = {
        infinite: false,
        slidesToShow: 3.5, // Adjust the number of slides shown at a time
        slidesToScroll: 1,
        arrows: true,
      };
  return (
    <section className={styles.main}>
    <Slider {...settings} >
      <Create/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
     
    </Slider>
    <Scroll/>
    </section>
  );
}

const Create =()=>{
    return(
<>
<section className={styles.create}>
        <section className={styles.img}>
          <img src="" alt="photo" className={styles.create_img} />
        </section>

        <GoPlus className={styles.icon} />

        <p className={styles.title}>create story</p>
      </section>
</>
    )
}

const Box = () => {
  return (
    <section>
      <section className={styles.box}>
        <section className={styles.main_image}>
          <img src="" alt="Photo" className={styles.box_image} />
        </section>
        <section className={styles.inner_img}>
          <img src="" alt="p" className={styles.innerimg} />
        </section>
        <section>
          <p className={styles.last}>hello</p>
        </section>
      </section>
    </section>
  );
};
