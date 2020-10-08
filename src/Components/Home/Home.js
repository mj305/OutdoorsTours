import React from "react";
import "../sass/main.scss";

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
          <div className="col-1-of-2">IMMAGE</div>
        </div>
      </div>
    </>
  );
};

export default Home;
