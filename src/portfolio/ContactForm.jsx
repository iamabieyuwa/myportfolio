import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './css/contactForm.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      // Add form data to Firestore
      await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        message: message,
      });

      // Show success message to user and reset form
      setResponseMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setResponseMessage("Error sending message.");
    }
  };
    return (
        <div className="contact-section">
            <motion.h1
                className="contact-heading"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                Get in Touch
            </motion.h1>
            <motion.form
                onSubmit={handleSubmit}
                className="contact-form"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                <motion.input
                    type="text"
                    id="name"
             value={name}
            onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="contact-input"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    required
                />
                <motion.input
                    type="email"
                    id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="contact-input"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    required
                />
                <motion.textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="contact-textarea"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    required
                />
                <motion.button
                    type="submit"
                    className="contact-button"
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    Send Message
                </motion.button>
            </motion.form>
            <p>{responseMessage}</p>
            <motion.div
                className="social-icons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                <a href="https://github.com/iamabieyuwa" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/@iamnosakare" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://wa.me/08147032984" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </motion.div>
            <footer className="footer">
                &copy; 2024 Abieyuwa. All rights reserved.
            </footer>
        </div>
    );
};

export default ContactForm;
