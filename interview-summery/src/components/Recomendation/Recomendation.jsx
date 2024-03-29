import React from 'react';
import avatar from './header-avatar.jpeg';
import RecommendationUser from './RecommendationUser';
import './Recomendation.scss';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

const Recomendation = () => {
  const { data } = useFetch('/rec/recommendations');
  const theme = useSelector((state) => state.switchTheme.appTheme);
  return (
    <section data-theme={theme} className="rec">
      <div className="rec-inner">
        <div className="rec__avatar-info">
          <div className="rec__current">
            <img className="current__avatar" src={avatar} alt="recomendation-logo" />
          </div>
          <span>
            <a className="rec__current-nick" href="#">
              __procherk__
            </a>
          </span>
        </div>
        <button className="rec__swich">Переключиться</button>
      </div>
      <div className="rec__all">
        <span className="rec__for-me">Рекомендации для вас</span>
        <span className="rec__all-link">
          <a className="all-link">Все</a>
        </span>
      </div>
      {data &&
        data.map((el) => {
          return (
            <RecommendationUser
              key={el._id}
              nameOfRecUser={el.nickName}
              additionalRecInfo={el.additionalRecommendInfo}
            />
          );
        })}
      <div className="info-about-instagram">
        <div>
          <span>Информация</span>
          <span>Помощ</span>
          <span>Пресса</span>
          <span>API</span>
          <span>Вакансии</span>
        </div>
        <div>
          <span>Конфеденциальность</span>
          <span>Условия</span>
          <span>Места</span>
          <span>Язык</span>
        </div>
      </div>
      <span className="water-sybol-meta">© 2022 INSTAGRAM FROM META</span>
    </section>
  );
};
export default Recomendation;
