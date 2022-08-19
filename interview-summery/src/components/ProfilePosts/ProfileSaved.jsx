import React, { useEffect } from 'react';
import Post from '../Posts/Post';

const ProfileSaved = () => {
  const savedPosts = JSON.parse(localStorage.getItem('posts'));

  return (
    <div>
      {savedPosts.map(
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
            comment={comment}
            photoOfPost={photoOfPost}
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

export default ProfileSaved;
