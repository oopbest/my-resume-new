import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingText = "I am Setthawut, a Full-Stack Developer.";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < typingText.length) {
        setText(typingText.substring(0, index + 1));
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 200); // adjust the speed of the typing animation
    return () => clearInterval(intervalId);
  }, [index, typingText]);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/hero-image.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              {text} <span className="caret">|</span>
            </h1>
            <p className="mb-5">
              I look forward to the opportunity to work with you and contribute
              to the success of your project. I am eager to be a part of your
              team. Let's create something amazing together!
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
