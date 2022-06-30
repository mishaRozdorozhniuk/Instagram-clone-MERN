import React, { useState } from 'react';
import profilePostFoto1 from '../../icons/profPost1.jpeg';
import profilePostFoto2 from '../../icons/profPost2.jpeg';
import profilePostFoto3 from '../../icons/profPost3.jpeg';
import profilePostFoto4 from '../../icons/profPost4.jpeg';
import profilePostFoto5 from '../../icons/profPost5.jpeg';
import profilePostFoto6 from '../../icons/profPost6.jpeg';
import profilePostFoto7 from '../../icons/profPost7.jpeg';
import profilePostFoto8 from '../../icons/profPost8.jpeg';
import LikesAndComment from './LikesAndComment';
import '../../pages/Profile/Profile.scss';
import Modal from '../Modal/Modal';
import PostHeader from '../Posts/PostHeader';

const ProfilePosts = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPostId, setCurrentPostid] = useState(null);

  const staticProfilePhotos = [
    { id: 1, postPhoto: profilePostFoto1, likes: 43, comments: 12 },
    { id: 2, postPhoto: profilePostFoto2, likes: 54, comments: 9 },
    { id: 3, postPhoto: profilePostFoto3, likes: 85, comments: 4 },
    { id: 4, postPhoto: profilePostFoto4, likes: 62, comments: 12 },
    { id: 5, postPhoto: profilePostFoto5, likes: 19, comments: 5 },
    { id: 6, postPhoto: profilePostFoto6, likes: 87, comments: 23 },
    { id: 7, postPhoto: profilePostFoto7, likes: 58, comments: 19 },
    { id: 8, postPhoto: profilePostFoto8, likes: 67, comments: 3 },
  ];

  const handleShowModal = (idx) => {
    setCurrentPostid(idx);
    setShowModal(!showModal);
  };

  const currentPost = staticProfilePhotos.find((profilePost) => profilePost.id === currentPostId);

  return (
    <div className="prof__posts">
      {showModal && (
        <Modal
          modalImg={currentPost.postPhoto}
          modalComments={false}
          countOfLikes={currentPost.likes}
          handleShowModal={handleShowModal}
        >
          <PostHeader nickName="staticNick" subtitle="stuticSubtitle" />
        </Modal>
      )}
      {staticProfilePhotos.map((post) => (
        <div className="prof__post-item" onClick={() => handleShowModal(post.id)}>
          <img className="prof__posts-photo" src={post.postPhoto} alt="post-foto1" />
          <LikesAndComment likes={post.likes} comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

export default ProfilePosts;
