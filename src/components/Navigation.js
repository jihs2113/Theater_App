
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      {/* <Link 
                to={{
                    pathname: "/about",
                    state: {
                        fromNavigation: true
                        //route로 props의 정보를 보내준다.
                    }
                }}> */}
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;