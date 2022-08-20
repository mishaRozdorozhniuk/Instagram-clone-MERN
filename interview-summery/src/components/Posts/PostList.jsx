import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contex';
import profilePostFoto1 from '../../icons/profPost1.jpeg';
import profilePostFoto2 from '../../icons/profPost2.jpeg';
import profilePostFoto3 from '../../icons/profPost3.jpeg';
import profilePostFoto4 from '../../icons/profPost4.jpeg';
import profilePostFoto5 from '../../icons/profPost5.jpeg';
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
      photoOfPost: profilePostFoto1,
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
      photoDescription: 'your girlfriend the best one',
      dateOfPost: '3 дней назад',
      photoOfPost: profilePostFoto2,
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
      photoOfPost: profilePostFoto3,
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
    {
      id: 4,
      nickName: 'armagedon',
      subtitle: 'Give me five dollars please',
      countOfLikes: 94,
      photoDescription: 'I want smuzi',
      dateOfPost: '1 час назад',
      photoOfPost: profilePostFoto4,
      comment: [
        {
          senderName: 'ancous',
          senderCommentText: 'Hey milka I love fish',
        },
        {
          senderName: 'milka',
          senderCommentText: 'I love milka men',
        },
      ],
    },
    {
      id: 5,
      nickName: 'maxim',
      subtitle: 'Give me five dollars please',
      countOfLikes: 94,
      photoDescription: 'I love you __procherk__',
      dateOfPost: '1 час назад',
      photoOfPost: profilePostFoto5,
      comment: [
        {
          senderName: 'cucumber365',
          senderCommentText: '...',
        },
        {
          senderName: 'kk_irill',
          senderCommentText: 'I am kirill',
        },
        {
          senderName: 'Ulbi tv',
          senderCommentText: 'check my new video dude',
        },
      ],
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

  useEffect(() => {
    setCurrentPostId(currentPostId);
  }, [comentId, currentPostId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postCommentInfo == false) {
      return false;
    } else {
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
    }
  };

  return (
    <div>
      {postsPata.map(
        (
          {
            comment,
            photoOfPost,
            dateOfPost,
            nickName,
            countOfLikes,
            photoDescription,
            subtitle,
            id,
          },
          i,
        ) => (
          <Post
            key={i}
            id={id}
            handleSubmit={handleSubmit}
            postCommentInfo={postCommentInfo}
            comment={comment}
            postsPata={postsPata}
            setComentId={setComentId}
            photoOfPost={photoOfPost}
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
