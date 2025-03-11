import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Portfolio = () => {
  // JavaScript for Blob Effect
  useEffect(() => {
    const cursor = document.querySelector(".blob");

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 overflow-hidden relative">
      {/* Gradient Blob */}
      <div className="blob"></div>
      {/* Hero Section */}
      <motion.div
        className="text-center mt-20 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Amine Abdellatif</h1>
        <h2 className="text-2xl mt-4 text-gray-300 h-12 flex items-center justify-center">
          <Typewriter
            words={["Software Engineer", "Web Developer", "AI Enthusiast"]}
            loop={true}
          />
        </h2>
      </motion.div>
      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6 relative z-10">
        <a
          href="https://github.com/AmineLebanon1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amine-a-45979b186/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:amine.al.abdellatif@gmail.com"
          className="text-2xl hover:text-red-400"
        >
          <FaEnvelope />
        </a>
      </div>
      {/* About Me Section */}
      <motion.div
        className="mt-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center">About Me</h2>
        <p className="text-gray-400 text-center mt-6 max-w-3xl font-semibold mx-auto text-lg leading-7 font-light">
          I'm a results-driven Computer Science graduate with a passion for
          building innovative software solutions. Proficient in Java, Python,
          and AI frameworks, I thrive on solving complex problems and creating
          impactful applications. My work spans web development, machine
          learning, and database optimization, with a strong focus on delivering
          high-quality results.
        </p>
      </motion.div>
      {/* Projects Section */}
      <motion.div
        className="mt-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "ICAN: Lebanese Sign Language to Arabic",
              description:
                "A web app that converts sign language to audio/text using AI.",
              technologies: "Python, OpenCV, TensorFlow",
              link: "https://icanlebanon.com/", // Updated link
            },
            {
              title: "Task-to-Earn Website",
              description:
                "A task management website with API integration and Firebase authentication.",
              technologies: "HTML, CSS, JavaScript, Firebase",
              link: "https://github.com/AmineLebanon1/Adlitude", // Updated link
            },
            {
              title: "AI Lebanese Lotto Guesser",
              description:
                "A Random Forest model to predict lottery numbers based on historical data.",
              technologies: "Python, Scikit-learn, Pandas",
              link: "https://github.com/AmineLebanon1/Machine-Learning-LOTTO", // Updated link
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative bg-gray-800 p-6 rounded-xl shadow-lg transition duration-500 
                   hover:shadow-[0_0_10px_#7F00FF,0_0_40px_#BF40BF,0_0_80px_#7F00FF] 
                   hover:bg-[#FFFFF] hover:text-white"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <p className="text-gray-400">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>
      {/* Contact Section */}
      <motion.div
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="text-gray-400 mt-2">
          Feel free to reach out via email or LinkedIn.
        </p>

        {/* Download Resume Button */}
        <a
          href="AmineAbdellatifCV.pdf" // Replace with the actual path to your resume file
          download="AmineAbdellatif.pdf"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;
