import { useState } from 'react';
import like from '../../icons/like.png';
import comments from '../../icons/comments.webp';
import NickName from '../NickName/NickName';
import Modal from '../Modal/Modal';
import PostHeader from '../Posts/PostHeader';
import StoriesUser from '../Stories/StoriesUser';
import PostComments from './PostComments';
import PostFooterIcons from './PostFooterIcons';
import { useSelector } from 'react-redux';
import './Post.scss';
import axios from 'axios';
// import { savedPosts } from '../../redux/action';

const PostFooter = ({
  comment,
  dateOfPost,
  handleSubmit,
  countOfLikes,
  setComentId,
  photoDescription,
  nickName,
  subtitle,
  photoOfPost,
  setPostCommentInfo,
  postCommentInfo,
  id,
  modalComments
}) => {
  const [showModal, setShowModal] = useState(false);
  const [savePost, setSavePost] = useState(false);
  const allPosts = useSelector((state) => state.homePosts.allPosts);
  // const dispatch = useDispatch();
  // const selector = useSelector((state) => state.savedPosts.arr);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const savedPostId = () => {
    setSavePost(!savePost);

    const currentPostId = allPosts.find(({ id: idx }) => idx === id);

    currentPostId.savePostFlag = true;

    axios
      .post(`/savedPosts/savedPost`, currentPostId)
      .then((res) => console.log(res.data))
      .catch((error) => console.log('Error: ', error));
  };
  // dispatch(savedPosts(res.data))
  const removePostId = () => {
    const currentPostId = allPosts.find(({ id: idx }) => idx === id);

    axios
      .delete(`/savedPosts/${currentPostId._id}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log('Error: ', error));

    setSavePost(false);
  };

  return (
    <>
      <div className="post-footer-wrapper">
        <PostFooterIcons
          removePostId={removePostId}
          savedPostId={savedPostId}
          savePost={savePost}
          like={like}
          comments={comments}
          id={id}
        />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span className="post__likes">{countOfLikes} отметок "Нравится"</span>
        <div className="likes-inner">
          <span>
            <a className="post__nick" href="#">
              __procherk__
            </a>
          </span>
          <span className="likes-deskripiton">{photoDescription}</span>
        </div>
        {modalComments ? (
          <button onClick={handleShowModal} className="post__check-comments">
            Посмотреть все комментарии
          </button>
        ) : (
          ''
        )}
        <span className="post__data">{dateOfPost}</span>
      </div>
      {showModal && (
        <Modal
          modalImg={photoOfPost}
          setPostCommentInfo={setPostCommentInfo}
          modalComments={false}
          handleSubmit={handleSubmit}
          handleShowModal={handleShowModal}
          comment={comment}
          setComentId={setComentId}
          id={id}
          countOfLikes={countOfLikes}
          postCommentInfo={postCommentInfo}>
          <PostHeader nickName={nickName} subtitle={subtitle} />
          <div className="modal__comment-wrapper">
            {comment.map((c, index) => (
              <div key={index} className="modal__comments-inner">
                <StoriesUser size={true} />
                <NickName className="modal__comments-nick" nameOfUser={c.senderName} />
                <div className="modal__comments-info">{c.senderCommentText}</div>
              </div>
            ))}
          </div>
        </Modal>
      )}
      <PostComments
        id={id}
        setComentId={setComentId}
        handleSubmit={handleSubmit}
        setPostCommentInfo={setPostCommentInfo}
        postCommentInfo={postCommentInfo}
      />
    </>
  );
};

export default PostFooter;
