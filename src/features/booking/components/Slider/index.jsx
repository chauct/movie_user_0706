import React from 'react';
import { Carousel } from 'antd';
import styles from './style.module.css';

function Slider() {
  return (
    <>
      <Carousel
        autoplay
        className={styles.carousel}>
        <div className={styles.item}>
          <img
            src='https://demo.w3layouts.com/demos_new/template_demo/02-07-2020/proshowz-liberty-demo_Free/1734035036/web/assets/images/banner3.jpg'
            alt=''
          />
        </div>
        <div className={styles.item}>
          <img
            src='https://cinerama.qodeinteractive.com/wp-content/uploads/2018/05/home-9-port-img-6.jpg'
            alt=''
          />
        </div>
        <div className={styles.item}>
          <img
            src='https://cinerama.qodeinteractive.com/wp-content/uploads/2018/05/home-9-port-img-7.jpg'
            alt=''
          />
        </div>

        <div className={styles.item}>
          <img
            src='https://cinerama.qodeinteractive.com/wp-content/uploads/2018/04/alfa-home-slider-img-1.jpg'
            alt=''
          />
        </div>
        <div className={styles.item}>
          <img
            src='https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/video-player-2.jpg'
            alt=''
          />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
