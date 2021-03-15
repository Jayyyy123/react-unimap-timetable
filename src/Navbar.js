import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Navbar() {
  const [{ user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(user);
  return (
    <div className="navBar__body">
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Poppins&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"
        rel="stylesheet"
      ></link>
      <div className="navBar__title">
        <a href="/home">
          <h1>UniMAP</h1>
        </a>
      </div>
      <div className="navBar__drop">
        <div className="navBar__dropdown">
          <button id="navBar__dropbtn" className="navBar__dropbtn">
            <h1>RA</h1>
            <ArrowDropDownIcon />
          </button>
          <div className="dropdown-content">
            <Link to="/ra72">RA72</Link>
          </div>
        </div>
        <div className="navBar__dropdown">
          <button className="navBar__dropbtn">
            <h1>RE</h1>
            <ArrowDropDownIcon />
          </button>
          <div className="dropdown-content">
            <Link to="/re09">RE09</Link>
          </div>
        </div>
        <div className="navBar__dropdown">
          <button className="navBar__dropbtn">
            <h1>RK</h1>
            <ArrowDropDownIcon />
          </button>
          <div className="dropdown-content">
            <Link to="/rk28">RK28</Link>
            <Link to="/rk90">RK90</Link>
            <Link to="/rk01">RK01</Link>
            <Link to="/rk05">RK05</Link>
            <Link to="/rk07">RK07</Link>
            <Link to="/rk08">RK08</Link>
            <Link to="/rk12">RK12</Link>
            <Link to="/rk13">RK13</Link>
            <Link to="/rk20">RK20</Link>
            <Link to="/rk23">RK23</Link>
            <Link to="/rk24">RK24</Link>
            <Link to="/rk32">RK32</Link>
            <Link to="/rk53">RK53</Link>
            <Link to="/rk56">RK56</Link>
            <Link to="/rk84">RK84</Link>
            <Link to="/rk85">RK85</Link>
            <Link to="/rk86">RK86</Link>
            <Link to="/rk89">RK89</Link>
            <Link to="/rk93">RK93</Link>
          </div>
        </div>
        <div className="navBar__dropdown">
          <button className="navBar__dropbtn">
            <h1>RP</h1>
            <ArrowDropDownIcon />
          </button>
          <div className="dropdown-content">
            <Link to="/rp52">RP52</Link>
          </div>
        </div>
        <div className="navBar__dropdown">
          <button className="navBar__dropbtn">
            <h1>RY</h1>
            <ArrowDropDownIcon />
          </button>
          <div className="dropdown-content">
            <Link to="/ry01">RY01</Link>
            <Link to="/ry11">RY11</Link>
            <Link to="/ry20">RY20</Link>
            <Link to="/ry21">RY21</Link>
            <Link to="/ry31">RY31</Link>
            <Link to="/ry32">RY32</Link>
            <Link to="/ry40">RY40</Link>
            <Link to="/ry41">RY41</Link>
            <Link to="/ry43">RY43</Link>
            <Link to="/ry44">RY44</Link>
            <Link to="/ry55">RY55</Link>
            <Link to="/ry56">RY56</Link>
            <Link to="/ry57">RY57</Link>
            <Link to="/ry58">RY58</Link>
            <Link to="/ry87">RY87</Link>
            <Link to="/ry88">RY88</Link>
          </div>
        </div>
        {/* <div className="navBar__dropdown">
            <button className="navBar__dropbtn">
              <h1>UR</h1>
              <ArrowDropDownIcon />
            </button>
            <div className="dropdown-content">
              <a href="#">UR6321001</a>
              <a href="#">UR6340001</a>
              <a href="#">UR6340002</a>
              <a href="#">UR6521001</a>
              <a href="#">UR6521002</a>
              <a href="#">UR6521003</a>
              <a href="#">UR6521004</a>
              <a href="#">UR6521005</a>
              <a href="#">UR6521006</a>
              <a href="#">UR6522001</a>
              <a href="#">UR6522002</a>
              <a href="#">UR6522003</a>
              <a href="#">UR6523001</a>
              <a href="#">UR6523002</a>
              <a href="#">UR6523003</a>
              <a href="#">UR6523004</a>
              <a href="#">UR6523005</a>
              <a href="#">UR6523006</a>
              <a href="#">UR6523007</a>
              <a href="#">UR6523008</a>
              <a href="#">UR6523009</a>
              <a href="#">UR6523011</a>
              <a href="#">UR6524001</a>
              <a href="#">UR6524002</a>
              <a href="#">UR6524003</a>
              <a href="#">UR6524004</a>
              <a href="#">UR6524005</a>
              <a href="#">UR6524006</a>
              <a href="#">UR6525001</a>
              <a href="#">UR6526001</a>
              <a href="#">UR6526002</a>
              <a href="#">UR6526003</a>
              <a href="#">UR6527001</a>
              <a href="#">UR6540001</a>
              <a href="#">UR6543001</a>
              <a href="#">UR6582001</a>
            </div>
          </div> */}
      </div>
      {/* <div className="navBar__login">
        <div onClick={handleAuthentication} className="navBar__option">
          <Link to={!user && "/login"} className="navBar__link">
            <span className="navBar__optionLineOne">Log In</span>
          </Link>
          <hr />
          <Link to="/register" className="navBar__link">
            <span className="navBar__optionLineOne">Register</span>
          </Link>
        </div>
        <div className="navBar__userLogin"></div>
      </div> */}
    </div>
  );
}

export default Navbar;
