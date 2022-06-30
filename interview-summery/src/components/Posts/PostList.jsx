import React, { useState, useEffect } from 'react';
import Post from './Post';

const PostList = () => {
  const [postsPata, setPostsData] = useState([]);
  const [postCommentInfo, setPostCommentInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/posts')
      .then((res) => res.json())
      .then((data) => setPostsData(data));
  }, []);

  const handleCommentPost = (e, inputId) => {
    const currentPostInput = postsPata.find(({ id }) => id === inputId);
    if (currentPostInput) {
      console.log(currentPostInput);
      setPostCommentInfo(e.target.value);
    }
  };

  return (
    <div>
      {postsPata.map(
        ({ comment, dateOfPost, nickName, countOfLikes, photoDescription, subtitle, id }, i) => (
          <Post
            key={i}
            id={id}
            postCommentInfo={postCommentInfo}
            handleCommentPost={handleCommentPost}
            comment={comment}
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
