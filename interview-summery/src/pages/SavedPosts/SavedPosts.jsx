import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import LikesAndComment from '../../components/ProfilePosts/LikesAndComment';
// import Modal from '../../components/Modal/Modal';
// import PostHeader from '../../components/Posts/PostHeader';

const SavedPosts = () => {
  const [showModal, setShowModal] = useState(false);
  const { data } = useFetch('/posts/posts');

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    data && data.filter(({ savePostFlag }) => savePostFlag === true);
  }, []);

  return (
    <>
      {/*{showModal && (*/}
      {/*  <Modal modalComments={false} handleShowModal={handleShowModal}>*/}
      {/*    <PostHeader nickName="staticNick" subtitle="stuticSubtitle" />*/}
      {/*  </Modal>*/}
      {/*)}*/}

      {/*{savedPosts.map((post) => (*/}
      {/*  <div key={post.id} className="prof__post-item" onClick={() => handleShowModal(post.id)}>*/}
      {/*    <img className="prof__posts-photo" src={post?.photoOfPost} alt="post-foto1" />*/}
      {/*  </div>*/}
      {/*))}*/}
      {data !== null ? (
        data.map((post) => (
          <div key={post.id} className="prof__post-item" onClick={() => handleShowModal(post.id)}>
            <img className="prof__posts-photo" src={post.photoOfPost} alt="post-foto1" />
            <LikesAndComment likes={post.likes} comments={post.comments} />
          </div>
        ))
      ) : (
        <h2>You dont have any saved posts</h2>
      )}
    </>
  );
};

export default SavedPosts;
