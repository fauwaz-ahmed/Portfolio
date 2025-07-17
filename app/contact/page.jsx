"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const text = "Say Hello..";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current, 
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-32 2xl:px-64 gap-8 lg:gap-0">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center pt-16 lg:pt-0">
          <div className="flex justify-center items-center text-6xl">
            {text.split("").map((letters, index) => (
              <motion.div
                className=""
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letters}
              </motion.div>
            ))}
            😊
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 w-full flex flex-col justify-center p-7 rounded-xl gap-8 bg-red-50 lg:w-1/2 lg:h-full mb-16 lg:mb-0"
        >
          <p>Dear Fauwaz Ahmed,</p>
          <textarea
            name="user_message"
            id=""
            rows={6}
            className="resize-none border-b-1 border-b-black flex outline-none"
            placeholder="Write Your message..."
            required
          ></textarea>
          <span>my mail address is:</span>
          <input
            type="email"
            name="user_email"
            className="border-b-1 border-b-black flex outline-none"
            required
          />
          <span>Regard</span>
          <button className="bg-blue-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="font-semibold text-green-400">
              Your message has been successfully sent!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong! Please try again.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;