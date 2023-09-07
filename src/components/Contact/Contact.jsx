import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { EarthCanvas, StarsCanvas } from "../canvas";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    setIsFormValid(name && email && message);
  }, [name, email, message]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
  
    switch (name) {
      case 'user_name':
        setName(value);
        break;
      case 'user_email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
        return;
    }
    emailjs.sendForm('service_fw8vqvu', 'template_1everhj', form.current, 't_NkU5u7x-KOk0AID')

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setName("");
    setEmail("");
    setMessage("");
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
};

  return (
    <div id="contact" className="position-relative row mt-5 text-white p-5" >
      <StarsCanvas />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='col-xl-6 col-lg-6 d-flex align-items-center justify-content-center'
      >
        <div style={{ backgroundColor: "#333333", padding: "20px" }}>
          <p>Get in touch</p>
          <h3>Contact.</h3>
          <form ref={form} onSubmit={handleSubmit} className='form-group'>
          <label className='form-label text-white mb-3'>Your Name</label>
          <input
            type='text'
            name='user_name'
            value={name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className='form-control bg-dark text-white rounded'
            style={{width:"70vh"}} 
          />
          <label className='form-label text-white mt-3 mb-3'>Your Email</label>
          <input
            type='email'
            name='user_email'
            value={email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className='form-control bg-dark text-white rounded'
            style={{width:"70vh"}} 

          />
          <label className='form-label text-white mt-3 mb-3'>Your Message</label>
          <textarea
            rows={7}
            name='message'
            value={message}
            onChange={handleChange}
            placeholder='What you want to say?'
            className='form-control bg-dark text-white rounded'
            style={{width:"70vh"}} 

          ></textarea>
          <button
            type='submit'
            className='btn btn-dark mt-3'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='col-xl-6 col-lg-6'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");