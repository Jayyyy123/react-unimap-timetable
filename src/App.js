import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RA72 from "./RA72";
import RE09 from "./RE09";
import RP52 from "./RP52";
import RK28 from "./RK28";
import RK90 from "./RK90";
import RK01 from "./RK01";
import RK05 from "./RK05";
import RK07 from "./RK07";
import RK08 from "./RK08";
import RK12 from "./RK12";
import RK13 from "./RK13";
import RK20 from "./RK20";
import RK23 from "./RK23";
import RK24 from "./RK24";
import RK32 from "./RK32";
import RK53 from "./RK53";
import RK56 from "./RK56";
import RK84 from "./RK84";
import RK85 from "./RK85";
import RK86 from "./RK86";
import RK89 from "./RK89";
import RK93 from "./RK93";
import RY01 from "./RY01";
import RY11 from "./RY11";
import RY20 from "./RY20";
import RY21 from "./RY21";
import RY31 from "./RY31";
import RY32 from "./RY32";
import RY40 from "./RY40";
import RY41 from "./RY41";
import RY43 from "./RY43";
import RY44 from "./RY44";
import RY55 from "./RY55";
import RY56 from "./RY56";
import RY57 from "./RY57";
import RY58 from "./RY58";
import RY87 from "./RY87";
import RY88 from "./RY88";
// import { auth } from "./firebase";
// import { useStateValue } from "./StateProvider";
// import Login from "./Login";
// import Register from "./Register";

function App() {
  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   // will only run once when the app component loads
  //   auth.onAuthStateChanged((authUser) => {
  //     // console.log("The user is >>> ", authUser.displayName);
  //     // console.log("The email is >>> ", authUser.email);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //       // the user is logged out
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/ra72">
            <Navbar />
            <RA72 />
          </Route>
          <Route path="/re09">
            <Navbar />
            <RE09 />
          </Route>
          <Route path="/rp52">
            <Navbar />
            <RP52 />
          </Route>
          <Route path="/rk28">
            <Navbar />
            <RK28 />
          </Route>
          <Route path="/rk90">
            <Navbar />
            <RK90 />
          </Route>
          <Route path="/rk01">
            <Navbar />
            <RK01 />
          </Route>
          <Route path="/rk05">
            <Navbar />
            <RK05 />
          </Route>
          <Route path="/rk07">
            <Navbar />
            <RK07 />
          </Route>
          <Route path="/rk08">
            <Navbar />
            <RK08 />
          </Route>
          <Route path="/rk12">
            <Navbar />
            <RK12 />
          </Route>
          <Route path="/rk13">
            <Navbar />
            <RK13 />
          </Route>
          <Route path="/rk20">
            <Navbar />
            <RK20 />
          </Route>
          <Route path="/rk23">
            <Navbar />
            <RK23 />
          </Route>
          <Route path="/rk24">
            <Navbar />
            <RK24 />
          </Route>
          <Route path="/rk32">
            <Navbar />
            <RK32 />
          </Route>
          <Route path="/rk53">
            <Navbar />
            <RK53 />
          </Route>
          <Route path="/rk56">
            <Navbar />
            <RK56 />
          </Route>
          <Route path="/rk84">
            <Navbar />
            <RK84 />
          </Route>
          <Route path="/rk85">
            <Navbar />
            <RK85 />
          </Route>
          <Route path="/rk86">
            <Navbar />
            <RK86 />
          </Route>
          <Route path="/rk89">
            <Navbar />
            <RK89 />
          </Route>
          <Route path="/rk93">
            <Navbar />
            <RK93 />
          </Route>
          <Route path="/ry01">
            <Navbar />
            <RY01 />
          </Route>
          <Route path="/ry11">
            <Navbar />
            <RY11 />
          </Route>
          <Route path="/ry20">
            <Navbar />
            <RY20 />
          </Route>
          <Route path="/ry21">
            <Navbar />
            <RY21 />
          </Route>
          <Route path="/ry31">
            <Navbar />
            <RY31 />
          </Route>
          <Route path="/ry32">
            <Navbar />
            <RY32 />
          </Route>
          <Route path="/ry40">
            <Navbar />
            <RY40 />
          </Route>
          <Route path="/ry41">
            <Navbar />
            <RY41 />
          </Route>
          <Route path="/ry43">
            <Navbar />
            <RY43 />
          </Route>
          <Route path="/ry44">
            <Navbar />
            <RY44 />
          </Route>
          <Route path="/ry55">
            <Navbar />
            <RY55 />
          </Route>
          <Route path="/ry56">
            <Navbar />
            <RY56 />
          </Route>
          <Route path="/ry57">
            <Navbar />
            <RY57 />
          </Route>
          <Route path="/ry58">
            <Navbar />
            <RY58 />
          </Route>
          <Route path="/ry87">
            <Navbar />
            <RY87 />
          </Route>
          <Route path="/ry88">
            <Navbar />
            <RY88 />
          </Route>
          {/* <Route path="/register">
            <Navbar />
            <Register />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route> */}
          {/* Default path */}
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
