import React from 'react';
import styles from './style.module.css';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import MovieItem from '../MovieItem';
function MovieList() {
  const movieInfo = useSelector((state) => state.booking.movies);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles['slick-next']}`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles['slick-prev']}`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  if (!movieInfo)
    return (
      <div className={styles.spin}>
        <Spin size='large' />
      </div>
    );

  const settings = {
    dots: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 4,
    rows: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          rows: 2,
          slidesToShow: 1,
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesPerRow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.movie_list}>
      <div className='container'>
        <div className={styles.movie_heading}>
          <ul className='menu_list'>
            <li>
              <span className={styles.nav_link}>Danh sách phim</span>
            </li>
          </ul>
        </div>
        <Slider
          {...settings}
          className={styles.slider}>
          {movieInfo.map((item) => {
            return (
              <div
                key={item.maPhim}
                className={styles.item}>
                <MovieItem item={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default MovieList;
