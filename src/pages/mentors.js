/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';

const Mentors = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"/>
      <section>
        <div class="team-section">
            <div class="inner-width">
              <h1>Our Mentors</h1>
              <div class="pers">
        
              <div class="pe">
                  <img src="images\32_Dr_ Saman Riaz.jpg" alt=""/>
                  <div class="p-name">Dr. Saman Riaz</div>
                  <div class="p-des">PHD, Computer Science and Technology</div>
                  <div class="p-sm">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div class="pe">
                  <img src="images\113_Ms_ Saira Qamar.jpg" alt=""/>
                  <div class="p-name">Ms. Saira Qamar</div>
                  <div class="p-des">MS/Mphil, Computer Science,</div>
                  <div class="p-sm">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
                  </div>
              </div>
        
            </div>
    </section>
    </div>
  );
};

export default Mentors;
