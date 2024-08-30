import React, { useEffect } from 'react';
import './App.css';
import sj15about from './assets/sj15about.png';

const AboutMe = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.querySelector('.aboutme-section');
      const aboutMePhoto = document.querySelector('.aboutmephoto');

      const rect = aboutMeSection.getBoundingClientRect();

      // Check if the AboutMe section is fully in view
      if (rect.bottom <= window.innerHeight) {
        aboutMePhoto.classList.add('transformed');
      } else {
        aboutMePhoto.classList.remove('transformed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="aboutme-section bg-red-300 flex justify-center" style={{ height: '100vh' }}>
      <div className="aboutmephoto bg-white flex justify-center items-end">
        <img src={sj15about} alt="sourav" />
      </div>
    </div>
  );
};

export default AboutMe;
