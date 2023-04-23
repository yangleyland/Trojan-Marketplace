import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="image">
        <img
          src="https://www.simpleimageresizer.com/_uploads/photos/f140f7ce/USC_map_pic_1_750x750.png"
          alt="large image"
        />
      </div>
      <div className="rectangles">
        <div className="rectangle">
          <h2 style={{textAlign: 'center'}}>Welcome to the Trojan Marketplace</h2>
          <p style={{textAlign: 'center'}}>To get started, please click the login button to access the feed</p>
          <p style={{textAlign: 'center'}}>Once items are sold, meet ups will be at RTCC, Entrance 4, and Leavey Library</p>
        </div>
      </div>
    </div>
  );
}

export default Home;