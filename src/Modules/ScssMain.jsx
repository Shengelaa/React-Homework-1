import React from "react";
import Data from "../data";
import Location from "../Assets/loc.png";
import Style from "./ScssMain.module.scss";

const ScssMain = () => {
  console.log(Data);

  return (
    <section className={Style.mySection}>
      {Data.map((item) => (
        <div key={item.id} className={Style.Divv}>
          <div className={Style.imgDiv}>
            <img src={item.imageUrl} alt='' className={Style.img1} />
          </div>
          <div className={Style.Secondp}>
            <div className={Style.firstSec}>
              <img
                src={Location}
                alt='LocationImage'
                className={Style.locationLogo}
              />
              <span className={Style.p1A}>
                <span className={Style.P1}>
                  {item.location.substring(0, 12)}
                </span>
                <span>
                  <a href={item.googleMapsUrl} className={Style.Ahref}>
                    View on Google Maps
                  </a>
                </span>
              </span>
            </div>
            <div className={Style.secondSec}>
              <h2>{item.title}</h2>
            </div>
            <div className={Style.thirdSec}>
              <p className={Style.Time}>
                {item.startDate} - {item.endDate}
              </p>
              <p className={Style.desc}>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ScssMain;
