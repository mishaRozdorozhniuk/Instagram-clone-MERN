import React from 'react';
import PostList from '../../components/Posts/PostList';
import Recomendation from '../../components/Recomendation/Recomendation';
import SimpleSlider from '../../components/Stories/Stories';
import { useSelector } from 'react-redux';
import './Home.scss';

const Home = () => {
  const theme = useSelector((state) => state.switchTheme.appTheme);

  return (
    <main data-theme={theme}>
      <div className="home-container">
        <div className="info-block">
          <section className="slider-block">
            <SimpleSlider />
          </section>
          <section className="posts-block">
            <PostList />
          </section>
        </div>
        <section className="subscriberes-block">
          <Recomendation />
        </section>
      </div>
    </main>
  );
};
export default Home;
