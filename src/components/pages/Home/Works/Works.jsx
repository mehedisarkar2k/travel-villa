import React from "react";
import Title from "../../../shared/Title/Title";
import WorkStyle from "./Works.module.css";

const Works = () => {
  return (
    <div>
      <div className="my-container my-20">
        <Title title="Our Work" />
        <div className={WorkStyle.workGallery}>
          <img
            className={WorkStyle.first}
            src="http://themes.codezion.com/angular/toor/assets/images/tour-block_4.jpg"
            alt=""
          />
          <img
            className={WorkStyle.second}
            src="http://themes.codezion.com/angular/toor/assets/images/tour-block_2.jpg"
            alt=""
          />
          <img
            className={WorkStyle.third}
            src="http://themes.codezion.com/angular/toor/assets/images/tour-block_3.jpg"
            alt=""
          />
          <img
            className={WorkStyle.fourth}
            src="http://themes.codezion.com/angular/toor/assets/images/tour-block_1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
