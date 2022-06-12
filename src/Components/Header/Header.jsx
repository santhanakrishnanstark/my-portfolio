import "./Header.css";

import Profile from "../../Assets/sandyspecpic.jpg";
import { useEffect, useState } from "react";
import AudioFile from "../../Assets/themechange.mp3";

const Header = () => {
  const [checkedValue, setCheckedValue] = useState("default");
  const audio = new Audio(AudioFile);

  useEffect(() => {
    // set default page theme
    document.querySelector("body").classList.add("default");
  }, []);

  useEffect(() => {
    // change page theme
    document.querySelector("body").className = "";
    document.querySelector("body").classList.add(checkedValue);
  }, [checkedValue]);

  const handleChange = (value) => {
    setCheckedValue(value);

    // play audio
    audio.play();
  };

  return (
    <header>
      <div className="container">
        <a href="/" className="brand">
          <img
            src={Profile}
            alt="profile-pic"
            className="profile-pic"
            width="50"
            height="50"
          />
          <p className="ff-caveat fs-2 ff-bold brand-name">Sandy Krish</p>
        </a>
        <div className="theme-menu">
          <ul>
            <li>
              <input
                type="radio"
                name="theme-color"
                id="light"
                value="default"
                aria-label="theme light"
                checked={checkedValue === "default" ? true : false}
                onChange={(e) => handleChange(e.target.value)}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-color"
                id="dark"
                value="dark"
                aria-label="theme dark"
                checked={checkedValue === "dark" ? true : false}
                onChange={(e) => handleChange(e.target.value)}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
