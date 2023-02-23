import React, { useRef,useEffect } from "react";
import emailjs from "@emailjs/browser";
import Solo from "../image/Solo.png"

const Message = ({send,setSend}) => {
  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jgxaq26",
        "template_dqbjsvh",
        form.current,
        "V6Em_mb-Hfax-6XFC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const SendAnimation=()=>{

  }

  return (
    <div className="mt-32">
      <p className="text-2xl">
        <span className="text-purple-500  ">#</span>message me
      </p>
      <div className="flex flex-col items-center justify-center mt-10 ">
        <img className="h-[250px] mb-5" src={Solo} alt="solo"/>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col sm:flex-row gap-3 ">
            <div>
              <p>Name</p>
              <input
                className="bg-[#282C33] border"
                type="text"
                name="user_name"
              />
            </div>
            <div>
              <p>Email</p>
              <input
                className="bg-[#282C33] border"
                type="email"
                name="user_email"
              />
            </div>
          </div>
          <div className="mt-3">
            <p>Message</p>
            <textarea
              className="bg-[#282C33] border w-full py-4 sm:px-10"
              name="message"
            />
          </div>
          <div  className="flex justify-end ">
            <input
              onClick={()=>setSend(show=>!show)}
              className="border 
              p-2 px-4 hover:bg-purple-600 cursor-pointer
             hover:border-purple-600"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
        
    </div>
  );
};

export default Message;
