import React, { useState } from "react";
import "./Picture.css"
import PropTypes from "prop-types";

const Picture = ({ className, src, alt }) => {
  const [isComplete, setComplete] = useState(false);

  const progressLoad = (e) => {
    const img = e.target;
    setComplete(img.complete);
  };

  return (
    <div className="wrapper-picture">
        <img
          lazy="true"
          onLoad={(e) => progressLoad(e)}
          className={className}
          src={
            src
              ? src
              : "https://icon-library.com/images/photo-placeholder-icon/photo-placeholder-icon-17.jpg"
          }
          alt={alt}
        />
      {isComplete === false && <div className="placeholder"></div>}
    </div>
  );
};

export default Picture;

Picture.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};
