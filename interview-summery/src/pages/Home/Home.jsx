import React from 'react';
import PostList from '../../components/Posts/PostList';
import Recomendation from '../../components/Recomendation/Recomendation';
import SimpleSlider from '../../components/Stories/Stories';
import './Home.css';

const Home = () => {
  return (
    <main>
      <div className="home-container">
        <div className="info-block">
          <section className="slider-block">
            <SimpleSlider />
          </section>
          <section className="posts-block">
            <PostList />
          </section>
        </div>
        <div className="subscriberes-block">
          <Recomendation />
        </div>
      </div>
    </main>
  );
};
export default Home;
