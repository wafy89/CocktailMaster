import React from "react";
import video404 from "../images/404.mp4";

function Page404 () {
  return (
    <div className="notFoundContainer">
      <video className="main-video" autoPlay="true" loop muted="true">
                    <source src={ video404 } type="video/mp4" />
                </video>
    </div>
  )}


export default Page404;
