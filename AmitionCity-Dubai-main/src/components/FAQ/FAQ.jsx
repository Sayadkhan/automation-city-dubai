import { useState } from "react";
import vector from "../../assets/img/Vector (2).png";
import obj4 from "../../assets/img/Objects (4).png";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  { 
    question: "Can I change my plan later?", 
    answer: "Yes, you can upgrade or modify your plan anytime based on availability and terms." 
  },
  { 
    question: "What is your cancellation policy?", 
    answer: "Cancellation policies vary by booking; check terms or contact us for details on refunds and fees." 
  },
  { 
    question: "Can other info be added to an invoice?", 
    answer: "" 
  },
  { 
    question: "How does billing work?", 
    answer: "" 
  },
  { 
    question: "How do I change my account email?", 
    answer: "" 
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="lg:my-20 sm:my-10 my-5 w-full max-w-screen-2xl mx-auto relative z-10">
      <div className="relative">
        <div className="absolute -top-5 right-0 z-0">
          <img src={obj4} className="w-full h-full" alt="decorative element" />
        </div>
      </div>

      <div className="mx-auto flex flex-col justify-center w-full max-w-4xl my-4 px-4 sm:px-6 lg:px-8">
        <img 
          src={vector} 
          alt="" 
          className="mx-auto mb-4 w-full max-w-[150px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]" 
        />
        <h2 className="font-bold mb-2 text-center text-black text-lg sm:text-2xl md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="flex flex-col justify-center mx-auto text-center px-2">
          <p className="text-black text-sm sm:text-base md:text-lg">
            Everything you need to know about the services and billing.
          </p>
        </div>
      </div>

      <div className="divide-y divide-[#EAECF0] max-w-4xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="relative"
            onMouseLeave={() => setOpenIndex(null)}
          >
            <div className="flex w-full items-center justify-between py-3 sm:py-4">
              <span 
                className="text-left pr-4 text-black text-base sm:text-lg md:text-xl font-medium"
                onMouseEnter={() => setOpenIndex(index)}
              >
                {faq.question}
              </span>
              
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <svg
                    onMouseEnter={() => setOpenIndex(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 sm:h-6 sm:w-6 transform transition-all duration-300 rotate-180 hover:scale-110"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                ) : (
                  <svg
                    onMouseEnter={() => setOpenIndex(index)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 sm:h-6 sm:w-6 transform transition-all duration-300 hover:scale-110"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                )}
              </div>
            </div>

            {faq.answer && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-black text-sm sm:text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}