import React from 'react';
import './Feed.css';

function Feed() {
  return (
    <div className="rectangles-wrapper">
      <div className="rectangles-container">
        <div className="rectangle">
          <div className="rectangle-content">
            <div className="rectangle-img">
              <img src="https://via.placeholder.com/150" alt="Product" />
            </div>
            <div className="rectangle-description">
              <h3>USC Trojan Shirt</h3>
              <p>This vintage shirt is $50, lightly used.                 </p>
            </div>
          </div>
          <div className="buy-now-btn">
            <button>Buy Now</button>
          </div>
        </div>
        <div className="rectangle">
          <div className="rectangle-content">
            <div className="rectangle-img">
              <img src="https://via.placeholder.com/150" alt="Product" />
            </div>
            <div className="rectangle-description">
              <h3>Lorenzo 1x1 bedroom</h3>
              <p>I am subletting my bedroom from March to May at 2000 a month</p>
            </div>
          </div>
          <div className="buy-now-btn">
            <button>Buy Now</button>
          </div>
        </div>
        <div className="rectangle">
          <div className="rectangle-content">
            <div className="rectangle-img">
              <img src="https://via.placeholder.com/150" alt="Product" />
            </div>
            <div className="rectangle-description">
              <h3>USC Backpack</h3>
              <p>This USC backpack was given to me by Caleb Williams.$50       </p>
            </div>
          </div>
          <div className="buy-now-btn">
            <button>Buy Now</button>
          </div>
        </div>
        <div className="rectangle">
          <div className="rectangle-content">
            <div className="rectangle-img">
              <img src="https://via.placeholder.com/150" alt="Product" />
            </div>
            <div className="rectangle-description">
              <h3>Carol Folt Mug</h3>
              <p>I have a mug with Carol Folt on it. Selling for $20.      </p>
            </div>
          </div>
          <div className="buy-now-btn">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;