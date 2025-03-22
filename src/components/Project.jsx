import React from "react";
import { motion } from "framer-motion";

const FIRST_PROJECT_URL = "https://fullstack-chat-app-gcmo.onrender.com";
const FIRST_PROJECT_SOURCE = "https://github.com/oopbest/fullstack-chat-app";

const SECOND_PROJECT_URL = "https://mern-crash-course-q1vc.onrender.com";
const SECOND_PROJECT_SOURCE = "https://github.com/oopbest/mern-crash-course";

const THIRD_PROJECT_URL = "https://topvalue.com";

const FOURTH_PROJECT_URL = "https://mern-chat-app-yt-8xug.onrender.com/";
const FOURTH_PROJECT_SOURCE = "https://github.com/oopbest/mern-chat-app";

function Project() {
  return (
    <section id="projects" className="bg-base-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Project Fourth */}
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all">
            <figure className="h-2/4">
              <motion.img
                src="/project-image-4.png"
                alt="Homepage Screenshot"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Full-Stack Friendly Real-Time Chat App
              </h3>
              <p className="text-gray-600">
                Tech Stacks: React, Tailwind CSS, Daisy UI, Node.js, Express,
                MongoDB, Mongoose, Zustand, useContext, Socket.io, JWT
              </p>
              <div className="card-actions justify-center mt-4">
                <a
                  target="_blank"
                  href={FOURTH_PROJECT_URL}
                  className="btn btn-primary"
                >
                  View Project
                </a>
                <a
                  target="_blank"
                  href={FOURTH_PROJECT_SOURCE}
                  className="btn btn-secondary"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          {/* Project One */}
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all">
            <figure className="h-2/4">
              <motion.img
                src="/project-image-1.png"
                alt="Homepage Screenshot"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Full-Stack Real-Time Chat App with Image Uploads
              </h3>
              <p className="text-gray-600">
                Tech Stacks: React, Tailwind CSS, Daisy UI, Node.js, Express,
                MongoDB, Mongoose, Zustand, Cloudinary, Socket.io, JWT
              </p>
              <div className="card-actions justify-center mt-4">
                <a
                  target="_blank"
                  href={FIRST_PROJECT_URL}
                  className="btn btn-primary"
                >
                  View Project
                </a>
                <a
                  target="_blank"
                  href={FIRST_PROJECT_SOURCE}
                  className="btn btn-secondary"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          {/* Project Two */}
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all">
            <figure className="h-2/4">
              <motion.img
                src="/project-image-2.png"
                alt="Homepage Screenshot"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Full-stack a Product Store & Deployment
              </h3>
              <p className="text-gray-600">
                Tech Stacks: React, Chakra UI, Zustand, Node.js, MongoDB,
                Mongoose
              </p>
              <div className="card-actions justify-center mt-4">
                <a
                  target="_blank"
                  href={SECOND_PROJECT_URL}
                  className="btn btn-primary"
                >
                  View Project
                </a>
                <a
                  target="_blank"
                  href={SECOND_PROJECT_SOURCE}
                  className="btn btn-secondary"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          {/* Project Three */}
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-all">
            <figure className="h-2/4">
              <motion.img
                src="/project-image-3.png"
                alt="Homepage Screenshot"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">
                Topvalue E-commerce website
              </h3>
              <p className="text-gray-600">
                Tech Stacks: Next.js 12, Redux Toolkit, NextAuth.js, PHP
                (Magento 2), MySQL, Google Cloud Platform
              </p>
              <div className="card-actions justify-center mt-4">
                <a
                  target="_blank"
                  href={THIRD_PROJECT_URL}
                  className="btn btn-primary"
                >
                  View Project
                </a>
                {/* <a href="#" className="btn btn-secondary">
                  Source
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
