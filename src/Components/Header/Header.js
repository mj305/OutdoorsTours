import React from "react";
import "./Header.css";
import logoWhite from "../Assets/logoWhite.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo" src={logoWhite} alt="logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub"> is Where Life Happens</span>
        </h1>

        <a
          href="https://mariabeckles.herokuapp.com/"
          target="blank"
          className="btn btn--white btn--animated"
        >
          Discover Our Tours
        </a>
      </div>
    </header>
  );
};

export default Header;
