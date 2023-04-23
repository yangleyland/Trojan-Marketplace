import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feed.css';

function Feed() {


  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Final_Project/ItemFetchServlet');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="rectangles-wrapper">
      <div className="rectangles-container">
      {items.map(item => (
        <div className="rectangle">
          <div className="rectangle-content">
            <div className="rectangle-img">
              <img src={item.image_url} alt="Product" />
            </div>
            <div className="rectangle-description">
              <h3>{item.item_name}</h3>
              <p>{item.item_description}</p>
            </div>
          </div>
          <div className="buy-now-btn">
            <button>Buy Now</button>
          </div>
        </div>
        ))}
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