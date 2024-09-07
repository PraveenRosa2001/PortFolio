import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Praveen</span> <br />
          <span className="typewriter">
            <Typewriter
              words={['Website Designer']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className="introPara">
            I am a skilled web designer with experience in creating <br />
            visually appealing and user-friendly websites.
          </p>
        </span>
        <Link><button className="btn"><img src={btnImg} alt=""/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
