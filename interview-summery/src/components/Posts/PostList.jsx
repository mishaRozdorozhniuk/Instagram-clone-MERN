import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contex';
import Post from './Post';

const PostList = () => {
  const [postsPata, setPostsData] = useState([
    {
      id: 1,
      nickName: '__procherk__',
      subtitle: 'The best programmer in the world',
      countOfLikes: 98,
      photoDescription: 'I love my girlfriend 💗💗💗',
      dateOfPost: '11 минут назад',
      comment: [
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
      nickName: 'platitenalogi',
      subtitle: 'Second best programmer in the world',
      countOfLikes: 54,
      photoDescription: '__procherk__ girlfriend the best one',
      dateOfPost: '3 дней назад',
      comment: [
        {
          senderName: 'platitenalogi',
          senderCommentText: 'чувак да ты на меня похож тебе не кажется?',
        },
        {
          senderName: 'Span Company',
          senderCommentText: 'оффер на твоей почте!',
        },
      ],
    },
    {
      id: 3,
      nickName: 'sonnechkaaa',
      subtitle: 'The best girlfriend in the world',
      countOfLikes: 100357,
      photoDescription: 'I love you __procherk__',
      dateOfPost: '23 минут назад',
      comment: [
        {
          senderName: '__procherk__',
          senderCommentText: 'оставил коммент сам себе',
        },
        {
          senderName: 'lordOfDark',
          senderCommentText: 'я бы теней добавил',
        },
      ],
    },
  ]);

  const [postComments, setPostComments] = useState([
    {
      senderName: '__procherk__',
      senderCommentText: 'оставил коммент сам себе',
    },
    {
      senderName: 'lordOfDark',
      senderCommentText: 'я бы теней добавил',
    },
  ]);
  const [postCommentInfo, setPostCommentInfo] = useState('');
  const [comentId, setComentId] = useState(null);
  const { setCurrentPostId } = useContext(AuthContext);

  // useEffect(() => {
  //   fetch('http://localhost:3003/posts')
  //     .then((res) => res.json())
  //     .then((data) => setPostsData(data));
  // }, []);
  const currentPostInput = postsPata.find(({ id }) => id === comentId);
  const currentPostId = currentPostInput?.id;
  console.log(currentPostId == comentId);
  setCurrentPostId(currentPostId);

  useEffect(() => {}, []);

  const handleCommentPost = (e, inputId) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdBy = 'Procherk';
    let newCommentPost = {
      id: comentId,
      senderName: createdBy,
      senderCommentText: postCommentInfo,
    };
    postsPata.map(({ comment }, index) => {
      if (index + 1 === newCommentPost.id) {
        comment.push(newCommentPost);
      }
    });
    setPostsData(postsPata);
    setPostCommentInfo('');
  };

  return (
    <div>
      {postsPata.map(
        ({ comment, dateOfPost, nickName, countOfLikes, photoDescription, subtitle, id }, i) => (
          <Post
            key={i}
            id={id}
            handleSubmit={handleSubmit}
            postCommentInfo={postCommentInfo}
            comment={comment}
            setComentId={setComentId}
            setPostCommentInfo={setPostCommentInfo}
            nickName={nickName}
            countOfLikes={countOfLikes}
            photoDescription={photoDescription}
            subtitle={subtitle}
            dateOfPost={dateOfPost}
          />
        ),
      )}
    </div>
  );
};

export default PostList;
