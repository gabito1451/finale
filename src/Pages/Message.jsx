import React, { useState } from "react";
import photo from "../../src/assets/avatar-sample.png";
import send from "../assets/send.svg";
import Mcard from "../Components/Mcard";
import CenteredButton from "../ui/CenteredButton";

const Message = () => {
  const [messages, setMessages] = useState([
    {
      position: "right",
      text: "Hi, Kyle. How are you doing? Did you get that job yesterday?",
      date: new Date(),
    },
    {
      position: "left",
      text: "Nope, they kicked me out of the office!",
      date: new Date(),
    },
    {
      position: "right",
      text: "Wow! I can invite you to my new project.",
      date: new Date(),
    },
    {
      position: "left",
      text: "That’s great! I need this job, but...",
      date: new Date(),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { position: "right", text: newMessage, date: new Date() },
      ]);
      setNewMessage("");
    }
  };
  const contacts = [
    {
      id: 1,
      name: "Darlene Black",
      message: "Hey, how is your project?",
      img: photo,
      isActive: false,
    },
    {
      id: 2,
      name: "Kyle Fisher",
      message: "Nope, they kicked me out of the office!",
      img: photo,
      isActive: true,
    },
    {
      id: 3,
      name: "Brandon Wilson",
      message: "Hey, how is your project?",
      img: photo,
      isActive: false,
    },
    {
      id: 4,
      name: "Kyle Fisher",
      message: "So, It’s up to you!",
      img: photo,
      isActive: false,
    },

    // Add more contacts as needed
  ];

  return (
    <div className=" hide-scrollbar overflow-y-auto h-full lg:grid  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:gap-[5px] mx-auto ps-4 md:px-24 mt-[40px] ">
      {/* Sidebar for Contacts */}
      <div className=" px-2 rounded ">
        <div className="mb-4 bg-[#FCFDFD] md:w-full">
          <h1 className="text-[#181818] text-[12px] font-bold w-full border-b mt-2 px-3 py-4">
            CHAT
          </h1>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={` flex items-center border-b border-[#F4F4F4] px-2 py-2 ${
                contact.id === 4
                  ? "border-l-8 px-[10px] border-b-[#F4F4F4] border-l-[#0d47a1]  "
                  : ""
              }`}
            >
              <img
                src={contact.img}
                alt="Avatar"
                className="rounded-full h-[70px] w-[70px]"
              />
              <div className="ml-3 ">
                <h3
                  className={`text-[14px] font-semibold ${
                    contact.isActive ? "bg-[  #0d47a1] text-white" : ""
                  }`}
                >
                  {contact.name}
                </h3>
                <p className="text-[10px] text-gray-500">{contact.message}</p>
              </div>
            </div>
          ))}
        </div>
        <Mcard className="mb-16 lg:mb-0">
          <div className="text-[12px] mx-auto ">
            <CenteredButton>Start New Chat</CenteredButton>
          </div>
        </Mcard>
      </div>

      {/* Chat Window */}
      <div className="col-span-3 flex-1 flex flex-col h-[1000px] md:h-[600px] overflow-y-auto  rounded bg-white mx-2 md:mx-12">
        {/* Chat Header */}
        <div className=" flex justify-between  items-center p-4 border-b border-gray-200">
          <h2 className="font-bold text-[12px]">
            CHAT WITH <span className="text-[#0275B1]">KYLE FISHER</span>
            {""}
            <span className="ml-2 text-[12px] text-[#181818] opacity-40">
              LAST ONLINE: 4 HOURS AGO
            </span>
          </h2>

          <div className="flex gap-2">
            <svg
              width="17"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9.43839L10.8446 17.4644C9.8455 18.4476 8.49043 19 7.07749 19C5.66455 19 4.30948 18.4476 3.31039 17.4644C2.31129 16.4811 1.75 15.1476 1.75 13.7571C1.75 12.3665 2.31129 11.033 3.31039 10.0497L11.4658 2.02375C12.1319 1.36825 13.0352 1 13.9772 1C14.9192 1 15.8225 1.36825 16.4886 2.02375C17.1547 2.67924 17.5289 3.56829 17.5289 4.4953C17.5289 5.42231 17.1547 6.31135 16.4886 6.96685L8.32432 14.9928C7.99129 15.3206 7.5396 15.5047 7.06862 15.5047C6.59764 15.5047 6.14595 15.3206 5.81291 14.9928C5.47988 14.6651 5.29279 14.2206 5.29279 13.7571C5.29279 13.2935 5.47988 12.849 5.81291 12.5213L13.3471 5.11537"
                stroke="#1a73e8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-[#181818] text-[12px]">
              Shared media (12)
            </span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 w-full">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.position === "right" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              {message.position === "left" ? (
                <div className="chat chat-start">
                  <div className="chat-bubble max-w-lg p-2  text-white rounded-[4px] bg-[#1a73e8]">
                    {message.text}
                  </div>
                </div>
              ) : (
                <div className="flex justify-between gap-3">
                  <div>
                    <div className="bg-[#E9F0F8] max-w-lg text-[#181818] p-3 rounded-lg ">
                      <p>{message.text}</p>
                    </div>
                    <span className="flex justify-end text-xs text-gray-300 mt-1">
                      {message.date.toLocaleTimeString()}
                    </span>
                  </div>
                  <img
                    className="h-[42px] w-[42px] rounded-full"
                    src={photo}
                    alt=""
                  />
                </div>
              )}
            </div>
          ))}
          <div className="border-t w-full border-gray-200 p-4 flex lg:gap-4 items-center ">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write your message..."
              className="w-[200px] md:flex-1 p-2 text-[18px]"
            />
            <div className="hidden md:flex md:opacity-40">
              <svg
                width="17"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9.43839L10.8446 17.4644C9.8455 18.4476 8.49043 19 7.07749 19C5.66455 19 4.30948 18.4476 3.31039 17.4644C2.31129 16.4811 1.75 15.1476 1.75 13.7571C1.75 12.3665 2.31129 11.033 3.31039 10.0497L11.4658 2.02375C12.1319 1.36825 13.0352 1 13.9772 1C14.9192 1 15.8225 1.36825 16.4886 2.02375C17.1547 2.67924 17.5289 3.56829 17.5289 4.4953C17.5289 5.42231 17.1547 6.31135 16.4886 6.96685L8.32432 14.9928C7.99129 15.3206 7.5396 15.5047 7.06862 15.5047C6.59764 15.5047 6.14595 15.3206 5.81291 14.9928C5.47988 14.6651 5.29279 14.2206 5.29279 13.7571C5.29279 13.2935 5.47988 12.849 5.81291 12.5213L13.3471 5.11537"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <button
              onClick={handleSendMessage}
              className="ml-2 bg-[#1a73e8] hover:bg-gradient-to-l text-white font-semibold py-1 px-1 rounded "
            >
              <img src={send} alt="send" />
            </button>
          </div>
        </div>

        {/* Message Input */}
      </div>
    </div>
  );
};

export default Message;
