import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const styleCSS = useRef();

  const [Search, setSearch] = useState("");
  const History = useHistory();

  const btn_css = () => {
    if (styleCSS.current.style.height <= "0px") {
      styleCSS.current.style.height = "110px";
      styleCSS.current.style.transition = "all 600ms ease";
    } else if (styleCSS.current.style.height <= "110px") {
      styleCSS.current.style.height = "0px";
      styleCSS.current.style.transition = "all 600ms ease";
    }
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    History.push(`/dog/${Search}`);
  };

  return (
    <>
      <div className="head_section">
        <button className="head_btn" onClick={btn_css}>
          Search
        </button>
        <span className="heading_title">
          <i className="fas fa-bone fa-2x" />
        </span>
        <i className="fas fa-user-circle fa-2x" />
      </div>
      <div className="scrollUp" ref={styleCSS}>
        <div className="main_header">
          <div className="mid">
            <div className="search-input">
              <a href="" target="_blank" hidden></a>
              <input
                type="text"
                placeholder="Type here to search..."
                onChange={(e) => setSearch(e.target.value)}
                value={Search}
              />
              <div className="autocom-box">
                {/* here list are inserted from javascript */}
              </div>
              <div onClick={SubmitHandler} className="icon">
                <i className="fas fa-search" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <script src={HeadSuggestions}></script>
      <script src={HeadScript}></script> */}
    </>
  );
};
///////////////////////////////////// warning! /////////////////////////////////////////
console.warn("HeadSuggestions & HeadScript script is not working!");
export default Header;
