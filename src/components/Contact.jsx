import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      return toast.error("All fields are required");
    }

    if (!isValidEmail(email)) {
      return toast.error("Invalid email format");
    }

    if (message.length < 10) {
      return toast.error("Message must be at least 10 characters long");
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = validateForm();

    if (success === true) {
      setIsFormSubmitted(true);
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "setthawut.p@yahoo.com",
        message: formData.message,
      };

      emailjs
        .send(
          "service_juax6hk", // Replace with your EmailJS Service ID
          "template_sxjk0bk", // Replace with your EmailJS Template ID
          templateParams,
          "MLX9yYlcsf4OnllER" // Replace with your EmailJS Public Key
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!");
          setIsFormSubmitted(false);

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send message. Please try again.");
        });
    }
  };

  return (
    <div id="contact" className="container mx-auto py-10">
      <h2 className="text-3xl text-center font-bold">Contact</h2>
      <p className="text-center">
        Any questions or inquiries? Don't hesitate to reach out!
      </p>

      <div className="flex flex-col px-4 md:flex-row justify-center">
        {/* Contact Information */}
        <div className="flex justify-center pt-10">
          <div className="md:w-xs">
            <h3 className="text-lg text-center md:text-start font-bold">
              Contact Information
            </h3>
            <ul className="text-gray-600 my-6">
              <li className="flex items-center gap-2">
                <span className="font-bold">
                  <MdOutlineMailOutline />
                </span>{" "}
                setthawut.p@yahoo.com
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">
                  <CiPhone />
                </span>{" "}
                +66 88-260-5687
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">
                  <IoLocationOutline />
                </span>{" "}
                Bangkok, Thailand
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/setthawut-pimthong"
                target="_blank"
              >
                <FaLinkedin className="text-blue-900" />
              </a>
              <a href="https://github.com/oopbest" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center pt-8">
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
              <legend className="fieldset-legend">Let's get in touch</legend>

              <label className="fieldset-label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />

              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />

              <label className="fieldset-label">Message</label>
              <textarea
                className="textarea"
                placeholder="Message"
                value={formData.message}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
              ></textarea>

              <button
                type="submit"
                className="btn btn-neutral mt-4"
                disabled={isFormSubmitted}
              >
                Submit
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
