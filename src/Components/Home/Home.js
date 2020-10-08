import React from "react";
import "../sass/main.scss";

import nat1Large from "../Assets/nat1Large.jpg";
import nat2Large from "../Assets/nat2Large.jpg";
import nat3Large from "../Assets/nat3Large.jpg";

const Home = () => {
  return (
    <>
      <div className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people.
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heding-tertiary u-margin-bottom-small">
              You're going to fall in love with nature.
            </h3>
            <p className="paragraph u-margin-bottom-small">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <h3 className="heding-tertiary u-margin-bottom-small">
              Live dventures like you never havev before{" "}
            </h3>
            <p className="paragraph u-margin-bottom-small">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <a href="#" className="btn-text">
              Learn more&rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                className="composition__photo composition__photo--p1"
                src={nat1Large}
                alt="forest image"
              />
              <img
                className="composition__photo composition__photo--p2"
                src={nat2Large}
                alt="biker on the road"
              />
              <img
                className="composition__photo composition__photo--p3"
                src={nat3Large}
                alt="hiker on a hill"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
