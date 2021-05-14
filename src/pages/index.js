import React from 'react';
import './style.css';


const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <section>
       <div class="container">
        <h2>Personality Prediction using video processing</h2>
      </div>
      <div class="container">
        <input type="file" id="real-file" hidden="hidden"/>
        <br/>
        <span id="custom-text">No file chosen, yet.</span>
        <br/>
        <button id="custom-button" class="button button1">Select a file</button>
        <button class="button button1">Upload a file</button>
      </div>
    </section>
    </div>
  );
};

export default Home;
