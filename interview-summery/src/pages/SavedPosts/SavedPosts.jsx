import React, { useState } from 'react';
// import Modal from '../../components/Modal/Modal';
// import PostHeader from '../../components/Posts/PostHeader';

const SavedPosts = () => {
  const savedPosts = JSON.parse(localStorage.getItem('posts'));
  console.log(savedPosts);
  const [showModal, setShowModal] = useState(false);

  // const staticProfilePhotos = [
  //   { id: 1, postPhoto: profilePostFoto1, likes: 43, comments: 12 },
  //   { id: 2, postPhoto: profilePostFoto2, likes: 54, comments: 9 },
  //   { id: 3, postPhoto: profilePostFoto3, likes: 85, comments: 4 },
  //   { id: 4, postPhoto: profilePostFoto4, likes: 62, comments: 12 },
  //   { id: 5, postPhoto: profilePostFoto5, likes: 19, comments: 5 },
  //   { id: 6, postPhoto: profilePostFoto6, likes: 87, comments: 23 },
  //   { id: 7, postPhoto: profilePostFoto7, likes: 58, comments: 19 },
  //   { id: 8, postPhoto: profilePostFoto8, likes: 67, comments: 3 }
  // ];

  // return staticProfilePhotos.find((el) => el.id === s.id);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/*{showModal && (*/}
      {/*  <Modal modalComments={false} handleShowModal={handleShowModal}>*/}
      {/*    <PostHeader nickName="staticNick" subtitle="stuticSubtitle" />*/}
      {/*  </Modal>*/}
      {/*)}*/}

      {savedPosts.map((post) => (
        <div key={post.id} className="prof__post-item" onClick={() => handleShowModal(post.id)}>
          <img className="prof__posts-photo" src={post?.photoOfPost} alt="post-foto1" />
        </div>
      ))}
    </>
  );
};

export default SavedPosts;
