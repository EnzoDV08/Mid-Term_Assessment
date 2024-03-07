import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../components/Home.css';

export default function Home() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className='para'>Your Soccer <br /> Destination for <br /> Everything</p>
            <p className='para1'>Find Your Favorite Team, and whe will keep you Updated</p>
            <button className='button'>Find</button>
          </div>
          <div className="col-md-6 position-relative">
            
            <div className="image-container">
              <img className='img1' src={require('../assets/Group 1.png')} alt='' />
              <img className='img2' src={require('../assets/Group 2.png')} alt='' />
            </div>
          </div>
        </div>
      </div>
     
    );
}
