import React, { useState, useEffect, useContext } from 'react';
import LikesAndComment from './LikesAndComment';
import Modal from '../Modal/Modal';
import PostHeader from '../Posts/PostHeader';
import StoriesUser from '../Stories/StoriesUser';
import NickName from '../NickName/NickName';
import { AuthContext } from '../../contex';
import { useDispatch, useSelector } from 'react-redux';
import { currentProfilePost } from '../../redux/action';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import '../../pages/Profile/Profile.scss';

const ProfilePosts = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPostId, setCurrentPostid] = useState(null);
  const [postsPata, setPostsData] = useState([]);
  const [postCommentInfo, setPostCommentInfo] = useState('');
  const [comentId, setComentId] = useState(null);
  const { setCurrentPostId } = useContext(AuthContext);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.homePosts.currentProfilePost);
  const { data } = useFetch('profilePosts/');

  const handleShowModal = (idx) => {
    setCurrentPostid(idx);
    setShowModal(!showModal);
  };

  const currentProfilePostById = postsPata.find(({ id }) => id === comentId);

  useEffect(() => {
    data !== null ? setPostsData(data) : [];
  }, [data]);

  useEffect(() => {
    dispatch(currentProfilePost({ postData: postsPata, id: currentPostId }));
  }, [showModal]);

  useEffect(() => {
    setCurrentPostId(selector?.id);
  }, [comentId, selector?.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postCommentInfo === false) {
      return false;
    } else {
      const createdBy = 'Procherk';
      let newCommentPost = {
        id: comentId,
        senderName: createdBy,
        senderCommentText: postCommentInfo
      };

      postsPata.map((p) => {
        if (p.id === newCommentPost.id) {
          p?.commentForCurrentPost.push(newCommentPost);
        }
      });

      console.log(currentProfilePostById);
      const response = await axios
        .patch('/profilePosts/' + currentProfilePostById._id, currentProfilePostById)
        .then((res) => console.log(res, 'res'))
        .catch((error) => console.log('Error: ', error));

      if (response && response.data) {
        console.log(response);
      }
      setPostsData(postsPata);
      setPostCommentInfo('');
    }
  };

  return (
    <div className="prof__posts">
      {showModal && (
        <Modal
          modalImg={selector?.postPhoto}
          setPostCommentInfo={setPostCommentInfo}
          postCommentInfo={postCommentInfo}
          handleSubmit={handleSubmit}
          modalComments={false}
          setComentId={setComentId}
          countOfLikes={selector?.likes}
          handleShowModal={handleShowModal}
          id={selector?.id}>
          <PostHeader nickName="staticNick" subtitle="stuticSubtitle" />
          <div className="modal__comment-wrapper">
            {postsPata[currentPostId - 1].commentForCurrentPost &&
              postsPata[currentPostId - 1].commentForCurrentPost.map((c) => {
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
      {postsPata.map((post) => (
        <div key={post._id} className="prof__post-item" onClick={() => handleShowModal(post.id)}>
          <img className="prof__posts-photo" src={post.postPhoto} alt="post-foto1" />
          <LikesAndComment likes={post.likes} comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

export default ProfilePosts;
