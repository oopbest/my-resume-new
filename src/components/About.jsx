import React from "react";
import Skills from "./Skills";

function About() {
  return (
    <section id="about" className="container mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">About me</h2>
      <p className="text-xl mb-4">
        A highly skilled Full-Stack Developer with 11+ years of experience in
        developing and optimizing web applications. Proficient in both Front-end
        and Back-end technologies, with a focus on delivering user-centric and
        efficient solutions. Adept at collaborating with cross-functional teams
        to meet project goals and deadlines. Passionate about clean code,
        accessibility, and modern web technologies.
      </p>

      {/* Skills */}
      <Skills />

      {/* Summary */}
      {/* <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Year of experience</div>
          <div className="stat-value">11+</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Project completed</div>
          <div className="stat-value text-secondary">20+</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Skills</div>
          <div className="stat-value">30+</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div> */}
    </section>
  );
}

export default About;
