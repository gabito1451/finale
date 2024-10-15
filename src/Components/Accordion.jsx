import React, { useState } from "react";
import HeaderButton from "../ui/HeaderButton";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <div
        onClick={toggleAccordion}
        className={`flex justify-between items-center p-4 cursor-pointer mb-[2px] ${
          isOpen ? "bg-white text-black" : "bg-white text-[#1565c0]"
        }`}
      >
        <h3>{question}</h3>
        <span>{isOpen ? "−" : "+"}</span>
      </div>

      {/* Content of the accordion */}
      {isOpen && (
        <div className="p-4 bg-[#0d47a1] text-white">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const data = [
    {
      question: "How do I create an account?",
      answer: "You can create an account by...",
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, you need to...",
    },
    {
      question: "Where can I find more information?",
      answer: "More information is available at...",
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, you need to...",
    },
    {
      question: "Where can I find more information?",
      answer: "More information is available at...",
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, you need to...",
    },
    {
      question: "Where can I find more information?",
      answer: "More information is available at...",
    },
  ];

  return (
    <div className="w-full mx-auto bg-gray-100">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
