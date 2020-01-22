import React, { useState } from "react";
import Post from "./Post";

const LikeSection = props => {
  const [letlike, setlike] = useState(props.likes);
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
            <i
              onClick={event => {
                setlike(letlike + 1);
              }}
              className="far fa-heart"
            />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">
        {letlike}
        likes
      </p>
    </div>
  );
};

export default LikeSection;
