import React from 'react';
import './style.css';

const Team = () => {
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
              <h1>Meet Our Team</h1>
              <div class="pers">
        
                <div class="pe">
                  <img src="../images/dani.jpg" alt=""/>
                  <div class="p-name">Daniyal Jamal</div>
                  <div class="p-des">Designer</div>
                  <div class="p-sm">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
        
                <div class="pe">
                  <img src="../images/abd.jpg" alt=""/>
                  <div class="p-name">Abdul Rehman</div>
                  <div class="p-des">Designer</div>
                  <div class="p-sm">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
        
                <div class="pe">
                  <img src="../images/yaseen.jpg" alt=""/>
                  <div class="p-name">Yaseen Khan</div>
                  <div class="p-des">Developer</div>
                  <div class="p-sm">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
                
                <div class="pe">
                    <img src="../images/kashi.jpg" alt=""/>
                    <div class="p-name">Kashif Ahmed</div>
                    <div class="p-des">Developer</div>
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

export default Team;
