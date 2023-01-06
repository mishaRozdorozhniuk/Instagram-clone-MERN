import React, { useEffect, useState } from 'react';
import Share from '../../icons/Share';
import SaveIcon from './SaveIcon';
import axios from 'axios';

const PostFooterIcons = ({ savePost, savedPostId, like, comments, removePostId }) => {
  const [savedPostsData, setSavedPostsData] = useState([]);

  useEffect(() => {
    axios(`/savedPosts/savePost`)
      .then((res) => setSavedPostsData(res.data))
      .catch((error) => console.log('Error: ', error));
  }, []);

  console.log(savedPostsData);
  return (
    <div className="post__footer-icons">
      <div className="post-icons-inner">
        <img className="like-icon" src={like} alt="like" />
        <img className="comments-icon" src={comments} alt="comments" />
        <Share />
      </div>
      {!savePost ? (
        <div onClick={() => savedPostId()}>
          <SaveIcon remove={false} />
        </div>
      ) : (
        <div onClick={() => removePostId()}>
          <SaveIcon remove={true} />
        </div>
      )}
    </div>
  );
};

export default PostFooterIcons;
