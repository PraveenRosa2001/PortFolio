import React from "react";
import "./intro.css";
import bg from "../../assets/image2.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MyCv from "../../assets/SE_20APC4546_Praveen_Dilshan.pdf"; // Ensure this path is correct

const Intro = () => {
  // Function to handle the download programmatically
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = MyCv;
    a.download = "SE_20APC4546_Praveen_Dilshan.pdf";
    a.click(); // Trigger the download
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Praveen Dilshan</span> <br />
          <span className="typewriter">
            <Typewriter
              words={["Software Engineer"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className="introPara">
            I am a skilled web and app developer, specializing in creating
            visually <br />
            appealing, user-friendly websites and mobile apps with seamless{" "}
            <br />
            user experiences.
          </p>
          {/* Social Media Links */}
          <div className="socialLinks">
            <a
              href="https://github.com/PraveenRosa2001"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-rosa-476a35238/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <FaLinkedin size={35} />
            </a>
          </div>
        </span>

        {/* Button for navigation and download */}
        <Link to="contact">
          <button className="btn" onClick={handleDownload}>
            <img src={btnImg} alt="" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
