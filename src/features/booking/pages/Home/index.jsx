import React, { useEffect } from 'react';
import './style.module.css';
import Slider from 'features/booking/components/Slider';
import MovieList from 'features/booking/components/MovieList';
import { useDispatch } from 'react-redux';
import { fetchMoviesAction } from 'features/booking/action';
function Home() {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    dispatch(fetchMoviesAction);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Slider />
      <MovieList />
    </div>
  );
}

export default Home;
