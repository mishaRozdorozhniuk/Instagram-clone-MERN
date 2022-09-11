import React from 'react';
import './StoriesSliderItem.scss';
import profilePostFoto1 from '../../icons/profPost7.jpeg';
import profilePostFoto2 from '../../icons/profPost8.jpeg';
import profilePostFoto3 from '../../icons/profPost6.jpeg';

const StoriesSliderItem = () => {
  const staticProfilePhotos = [
    { id: 1, postPhoto: profilePostFoto1 },
    { id: 2, postPhoto: profilePostFoto2 },
    { id: 3, postPhoto: profilePostFoto3 },
  ];

  return (
    <div className="ss-item">
      {staticProfilePhotos.map((el) => {
        return <img className="ss-img" src={el.postPhoto} alt={el.id} />;
      })}
    </div>
  );
};

export default StoriesSliderItem;
