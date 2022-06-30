import React, { useState, useEffect } from 'react';
import avatar from './header-avatar.jpeg';
import RecommendationUser from './RecommendationUser';
import './Recomendation.scss';

const Recomendation = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3003/posts')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section className="rec">
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
      <RecommendationUser
        nameOfRecUser="__procherk__"
        additionalRecInfo="Подписаны: sonnechkaaa и 3"
      />
      <RecommendationUser
        nameOfRecUser="sonnechkaaa"
        additionalRecInfo="Новый пользователь Instagram"
      />
      <RecommendationUser
        nameOfRecUser="yuungaash"
        additionalRecInfo="Подписаны: platitenalogi и 2"
      />
      <RecommendationUser
        nameOfRecUser="ukrainiancustomer"
        additionalRecInfo="Новый пользователь Instagram"
      />
      <RecommendationUser
        nameOfRecUser="platitenalogi"
        additionalRecInfo="Подписаны: sonnechkaaa и 3"
      />
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
