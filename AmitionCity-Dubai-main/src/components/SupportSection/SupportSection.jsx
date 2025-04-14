const SupportSection = () => {
  return (
    <div className="bg-[#FDF7F2] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get Support from Our Expert team by call or Chating</h2>
          <p className="text-gray-600 mb-8">
            Get expert support via call or chat for tailored assistance. Connect with us today for prompt help.
          </p>
          <div className="flex justify-center gap-4">
          <a 
  href="https://wa.me/971581425513" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-green-500 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-all duration-300 
             hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:scale-105 hover:shadow-lg"
>
  {/* WhatsApp Icon Add Here If Needed */}
  Chat Now!
</a>

<a 
  href="https://wa.me/971581425513" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-yellow-600 text-white px-6 py-2 rounded-md transition-all duration-300 
  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 hover:shadow-lg"
>
  Get Started
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;