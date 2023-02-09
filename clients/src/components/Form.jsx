import React, { useEffect, useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import "./Form.scss";

export default function Form() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [send, setSend] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_7om11rh",
        "template_rhn8ctk",
        form.current,
        "Wsbrwl864pCYEvAsJ",
        setSend(false),
        setLoading(true)
      )
      .then(
        (result) => {
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");

          setSend(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="2500"
      >
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must atleast be 3 characters",
            },
          })}
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="error-container">
          <p className="error">{errors.name?.message}</p>
        </div>

        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          name="email"
        />
        <div className="error-container">
          <p className="error">{errors.email?.message}</p>
        </div>

        <textarea
          required
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="form-btn" type="submit">
          {send && <p>Send</p>}
          {loading && <p>Please Wait...</p>}
          {sent && <p>Sent</p>}
        </button>
        <p className="loading"></p>
      </form>
    </>
  );
}
