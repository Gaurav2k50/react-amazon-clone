import React from "react";
import "./Section.css";

const Section = ({ headerText, images, footerText }) => {
  return (
    <div className="section-main-container">
      <div className="card-main-container">
        <div className="card-header-container">{headerText}</div>
        <div className="card-images-container">
          {images.map((item, index) => (
            <div className="images" key={index}>
              <img src={item.image} alt="" width="120px" height="90px" />
              <span className="images-text">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="card-footer-container">{footerText}</div>
      </div>
    </div>
  );
};

export default Section;
