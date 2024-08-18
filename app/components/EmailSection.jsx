"use client";
import React, { useState } from "react";
import emailjs from 'emailjs-com';  
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,   
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID      
    ).then((result) => {
      console.log("Email sent successfully!");
      setEmailSubmitted(true);
    }, (error) => {
      console.error("Error sending email:", error.text);
    });
  };

  return (
    <section id="contact" className='grid md:grid-cols-2 my-15 md:my-12 py-24 gap-24'>
      <div className='flex flex-col ml-4 mr-3'>
        <h5 className='text-xl font-bold text-white my-2 mt-10'>Let&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I&apos;m currently looking for internships, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to respond as soon as possible.
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/Yoriichi17">
            <Image src={GithubIcon} alt='Git hub icon'/>
          </Link>
          <Link href="https://www.linkedin.com/in/anirudhpnayak017/">
            <Image src={LinkedinIcon} alt='Linked in icon'/>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col mr-3 ml-3 mt-10" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your subject here...."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default EmailSection;
