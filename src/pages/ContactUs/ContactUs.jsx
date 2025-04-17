import React, { useState, useRef } from "react";
import "./ContactUs.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecondNavBar from "../../components/SecondNavBar/SecondNavBar";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import emailjs from "@emailjs/browser";
import Loader from "../../components/Loader/Loader";

const ContactUs = ({ lineBorder, setLineBorder, setShowLoader }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, description } = formData;
    if (!name || !email || !description) {
      toast.error("Please fill in all fields!");

      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address!");
      return;
    }

    try {
      setLoading(true);

      // await emailjs.sendForm(
      //   "service_4c2f1ae",
      //   "template_a9975j8",
      //   form.current,
      //   {
      //     publicKey: "XlaWneTV4aaF9gQII",
      //   }
      // );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", description: "" });
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <Loader show={loading} />

      <div className={loading ? "blur-content" : ""}>
        <SecondNavBar
          lineBorder={lineBorder}
          setLineBorder={setLineBorder}
          setShowLoader={setShowLoader}
        />
        <div className="main-contact-container">
          <div className="contact-container">
            <h2>Contact Me</h2>
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Your Message"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Send</button>
            </form>
            <ToastContainer position="bottom-center" />
          </div>

          <div className="connect-me">
            <h2>Also available in</h2>
            <ul className="social-icons">
              <BsLinkedin size="25px" />
              <IoIosMail size="30px" />
              <FaWhatsapp size="27px" />
              <FaInstagram size="27px" />
              <BsTwitterX size="25px" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
