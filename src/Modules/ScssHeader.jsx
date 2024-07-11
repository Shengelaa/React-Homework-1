import React from "react";
import EarthImage from "../Assets/earth.png";

import Style from "./ScssHeader.module.scss";

const ScssHeader = () => {
  return (
    <header className={Style.myHeader}>
      <div className={Style.Mydiv}>
        <img src={EarthImage} alt='' />
        <p>my travel journal.</p>
      </div>
    </header>
  );
};

export default ScssHeader;
