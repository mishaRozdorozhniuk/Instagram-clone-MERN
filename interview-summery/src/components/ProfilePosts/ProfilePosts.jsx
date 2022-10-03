import React, { useState, useEffect, useContext } from 'react';
import profilePostFoto1 from '../../icons/profPost1.jpeg';
import profilePostFoto2 from '../../icons/profPost2.jpeg';
import profilePostFoto3 from '../../icons/profPost3.jpeg';
import profilePostFoto4 from '../../icons/profPost4.jpeg';
import profilePostFoto5 from '../../icons/profPost5.jpeg';
import profilePostFoto6 from '../../icons/profPost6.jpeg';
import profilePostFoto7 from '../../icons/profPost7.jpeg';
import profilePostFoto8 from '../../icons/profPost8.jpeg';
import LikesAndComment from './LikesAndComment';
import Modal from '../Modal/Modal';
import PostHeader from '../Posts/PostHeader';
import StoriesUser from '../Stories/StoriesUser';
import NickName from '../NickName/NickName';
import '../../pages/Profile/Profile.scss';
import { AuthContext } from '../../contex';

const ProfilePosts = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPostId, setCurrentPostid] = useState(null);
  const [currentPostComments, setCurrentPostComments] = useState([]);

  const staticProfilePhotos = [
    {
      id: 1,
      postPhoto: profilePostFoto1,
      likes: 43,
      comments: 12,
      commentForCurrentPost: [
        {
          senderName: 'sonnechkaaa',
          senderCommentText: 'Милашка!!!',
        },
        {
          senderName: 'Anybis2005',
          senderCommentText: 'круть',
        },
        {
          senderName: 'Vlad',
          senderCommentText: 'Hey Boy!',
        },
        {
          senderName: 'Max',
          senderCommentText: "it' my friend",
        },
      ],
    },
    {
      id: 2,
      postPhoto: profilePostFoto2,
      likes: 54,
      comments: 9,
      commentForCurrentPost: [
        {
          senderName: 'sonnechkaaa',
          senderCommentText: 'Милашка!!!',
        },
        {
          senderName: 'Anybis2005',
          senderCommentText: 'круть',
        },
        {
          senderName: 'Vlad',
          senderCommentText: 'Hey Boy!',
        },
        {
          senderName: 'Max',
          senderCommentText: "it' my friend",
        },
      ],
    },
    {
      id: 3,
      postPhoto: profilePostFoto3,
      likes: 85,
      comments: 4,
      commentForCurrentPost: [
        {
          senderName: 'sonnechkaaa',
          senderCommentText: 'Милашка!!!',
        },
        {
          senderName: 'Anybis2005',
          senderCommentText: 'круть',
        },
        {
          senderName: 'Vlad',
          senderCommentText: 'Hey Boy!',
        },
        {
          senderName: 'Max',
          senderCommentText: "it' my friend",
        },
      ],
    },
    {
      id: 4,
      postPhoto: profilePostFoto4,
      likes: 62,
      comments: 12,
      commentForCurrentPost: [
        {
          senderName: 'sonnechkaaa',
          senderCommentText: 'Милашка!!!',
        },
        {
          senderName: 'Anybis2005',
          senderCommentText: 'круть',
        },
        {
          senderName: 'Vlad',
          senderCommentText: 'Hey Boy!',
        },
        {
          senderName: 'Max',
          senderCommentText: "it' my friend",
        },
      ],
    },
    {
      id: 5,
      postPhoto: profilePostFoto5,
      likes: 19,
      comments: 5,
      commentForCurrentPost: [
        {
          senderName: 'sonnechkaaa',
          senderCommentText: 'Милашка!!!',
        },
        {
          senderName: 'Anybis2005',
          senderCommentText: 'круть',
        },
        {
          senderName: 'Vlad',
          senderCommentText: 'Hey Boy!',
        },
        {
          senderName: 'Max',
          senderCommentText: "it' my friend",
        },
      ],
    },
    {
      id: 6,
      postPhoto: profilePostFoto6,
      likes: 87,
      comments: 23,
      commentForCurrentPost: [
        {
          senderName: 'sonnechkaaa',
          senderCommentText: 'Милашка!!!',
        },
        {
          senderName: 'Anybis2005',
          senderCommentText: 'круть',
        },
        {
          senderName: 'Vlad',
          senderCommentText: 'Hey Boy!',
        },
        {
          senderName: 'Max',
          senderCommentText: "it' my friend",
        },
      ],
    },
    {
      id: 7,
      postPhoto: profilePostFoto7,
      likes: 58,
      comments: 19,
      commentForCurrentPost: [
        {
          senderName: 'sonnechkaaa',
          senderCommentText: 'Милашка!!!',
        },
        {
          senderName: 'Anybis2005',
          senderCommentText: 'круть',
        },
        {
          senderName: 'Vlad',
          senderCommentText: 'Hey Boy!',
        },
        {
          senderName: 'Max',
          senderCommentText: "it' my friend",
        },
      ],
    },
    {
      id: 8,
      postPhoto: profilePostFoto8,
      likes: 67,
      comments: 3,
      commentForCurrentPost: [
        {
          senderName: 'sonnechkaaa',
          senderCommentText: 'Милашка!!!',
        },
        {
          senderName: 'Anybis2005',
          senderCommentText: 'круть',
        },
        {
          senderName: 'Vlad',
          senderCommentText: 'Hey Boy!',
        },
        {
          senderName: 'Max',
          senderCommentText: "it' my friend",
        },
      ],
    },
  ];

  const handleShowModal = (idx) => {
    setCurrentPostid(idx);
    setShowModal(!showModal);
  };

  const currentPost = staticProfilePhotos.find((profilePost) => profilePost.id === currentPostId);

  useEffect(() => {
    staticProfilePhotos.map((el) => {
      if (currentPost?.id === el.id) {
        setCurrentPostComments(el.commentForCurrentPost);
      }
    });
  }, [showModal]);

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
          <div className="modal__comment-wrapper">
            {currentPostComments.map((c) => {
              return (
                <div key={c.id} className="modal__comments-inner">
                  <StoriesUser size={true} />
                  <NickName className="modal__comments-nick" nameOfUser={c.senderName} />
                  <div className="modal__comments-info">{c.senderCommentText}</div>
                </div>
              );
            })}
          </div>
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
