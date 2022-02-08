import React, { useRef } from "react";
import * as emailjs from "emailjs-com";
import styled from "styled-components/macro";
import { useState } from "react";
import Modal from "../components/modal";

export const ContactUs = () => {
  const [openModel, setOpenModal] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "seanmc", form.current, "user_phcTljyBItI7OTOrLNHqx")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    //clears the form after sending the email
    e.target.reset();
    setOpenModal(true);
  };

  return (
    <Form className="form">
      <form ref={form} onSubmit={sendEmail}>
        {openModel && <Modal closeModal={setOpenModal} />}
        <div className="input-container">
          <input
            className="input"
            type="text"
            name="user_name"
            required
            autoComplete="nope"
            placeholder=" "
          />
          <label className="label-name">
            <span className="content-name">Name</span>
          </label>
        </div>
        <div className="input-container">
          <input
            className="input"
            type="email"
            name="user_email"
            placeholder=" "
            required
            autoComplete="nope"
          />
          <label className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        <div className="input-container">
          <textarea
            className="input"
            name="message"
            id="message"
            placeholder=" "
          />
          <label className="label-name">
            <span className="content-name">Message</span>
          </label>
        </div>
        <input id="send" type="submit" value="Send" />
      </form>
    </Form>
  );
};

const Form = styled.div`
  position: relative;
  span {
    color: white;
  }
  color: white;
  .input-container {
    max-width: 400px;
    min-width: 340px;
    position: relative;
    height: 63px;
    overflow: hidden;
    margin: auto;
    margin-bottom: 0.5rem;
    @media (min-width: 576px) {
      min-width: 400px;
    }
    @media (min-width: 992px) {
      min-width: 500px;
      max-width: 600px;
    }
  }

  .input-container .input {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    background: transparent;
    border: none;
    outline: none;
    color: white;
  }

  #message {
    padding: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s,
      color 5000s ease-in-out 0s;
  }

  .input-container label {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    pointer-events: none;
    border-bottom: 1px solid white;
  }

  .input-container .label::after {
    content: " ";
    position: absolute;
    background: transparent;
    bottom: -1px;
    left: 0%;
    height: 100%;
    width: 100%;
    border-bottom: 5px solid red;
    transition: transform 0.5s ease;
  }

  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 0.5s ease;
    color: white;
  }

  .input-container .input:focus + .label-name .content-name,
  .input-container .input:not(:placeholder-shown) + .label-name .content-name {
    transform: translate(15%, -150%);
    font-size: 14px;
    color: var(--yellow);
    text-shadow: 0px 0px 1px var(--yellow);
  }

  .input-container #message:focus + .label-name .content-name,
  .input-container
    #message:not(:placeholder-shown)
    + .label-name
    .content-name {
    display: none;
  }

  .input-container .input:focus + label,
  .input-container .input:not(:placeholder-shown) + label {
    border-bottom: 2px solid var(--yellow);
    -webkit-filter: drop-shadow(0px 0px 2px var(--yellow));
    filter: drop-shadow(0px 0px 2px var(--yellow));
  }

  #send {
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid var(--yellow);
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    &:hover {
      background-color: var(--yellow);
      color: #282828;
      -webkit-filter: drop-shadow(0px 0px 2px var(--yellow));
      filter: drop-shadow(0px 0px 2px var(--yellow));
      text-shadow: 0px 0px 2px #282828;
    }
  }
  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export default ContactUs;
