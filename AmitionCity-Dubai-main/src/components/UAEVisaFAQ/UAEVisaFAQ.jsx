import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  { id: 1, title: "How to Apply" },
  { id: 2, title: "Documentation" },
  { id: 4, title: "Entering UAE" },
  { id: 5, title: "Extending VISA" },
  { id: 6, title: "Change of status" },
  { id: 7, title: "Insurrance" },
  { id: 8, title: "On arrival visa" },
];

export default function UAEVisaFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 mx-auto p-5  rounded-lg shadow-2xl bg-white w-full ">
      {faqItems.map((item, index) => (
        <div
          key={item.id}
          className="border-b last:border-b-0 py-3 cursor-pointer flex justify-between items-center"
          onClick={() => toggleFAQ(index)}
        >
          <span className="font-medium">{`${item.id}. ${item.title}`}</span>
          {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      ))}
    </div>
  );
}
