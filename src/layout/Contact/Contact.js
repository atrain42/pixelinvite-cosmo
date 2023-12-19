import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "../../components";
import rsvp from "../../img/rsvp.png";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <section className='contact'>
        <div className='contact-text'>
          <img src={rsvp} alt='baby' />
          <h1>RSVP</h1>
          <p>Please fill out the form below</p>
        </div>
        <form
          action='https://formsubmit.co/pixelprism42@gmail.com'
          method='POST'
        >
          <input
            type='hidden'
            name='_subject'
            value="Someone just RSVP'd!"
          ></input>
          <input type='text' name='_honey' className='honeypot' placeholder />
          <input type='hidden' name='_captcha' value='false' />
          <input
            type='hidden'
            name='_next'
            value='https://pixelinvite-beaniebaby.netlify.app/thanks'
          />
          <input
            type='text'
            name='First&nbsp;Name'
            placeholder='First Name *'
            required
          />
          <input
            type='text'
            name='Last&nbsp;Name'
            placeholder='Last Name *'
            required
          />
          <h1 id='rea'>Are you attending? *</h1>
          <span>
            <input
              required
              type='radio'
              id='accept'
              name='rsvp'
              value='Yes'
              className='radio-btn radio-container'
            />
            <label
              for='accept'
              onclick="selectRadioButton('accept')"
              className='radio-container'
            >
              Accept with pleasure
            </label>
          </span>
          <span>
            <input
              required
              type='radio'
              id='decline'
              name='rsvp'
              value='No'
              className='radio-btn radio-container'
            />
            <label
              for='decline'
              onclick="selectRadioButton('decline')"
              className='radio-container'
            >
              Decline with regret
            </label>
          </span>
          <textarea
            name='message'
            cols='20'
            rows='15'
            placeholder='Message'
          ></textarea>
          <button className='nav-btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </motion.div>
  )
};

export default Contact;
