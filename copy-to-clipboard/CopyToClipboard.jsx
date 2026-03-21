import React, { useState, useRef } from 'react';

const CopyToClipboard = ({ textToCopy = "Allwell Azubike" }) => {
  const [isCopied, setIsCopied] = useState(false);
  const textInputRef = useRef(null);

  const handleCopy = async () => {
    try {
      // modern way (requires HTTPS or localhost)
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textInputRef.current.value);
      } else {
        // fallback for local file:// testing or older browsers
        textInputRef.current.select();
        document.execCommand("copy");
        // deselect the text so it doesn't stay highlighted
        window.getSelection().removeAllRanges();
      }

      // update ui state
      setIsCopied(true);
      
      // reset after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
      alert("Failed to copy to clipboard.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4">
      <h2 className="text-2xl font-bold mb-5 text-gray-800">Copy to Clipboard</h2>
      
      <div className="relative">
        <input 
          type="text" 
          ref={textInputRef}
          value={textToCopy} 
          readOnly
          className="w-full bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 pr-24 outline-none transition-all duration-200"
        />
        <button 
          onClick={handleCopy}
          className={`absolute right-1.5 top-1.5 bottom-1.5 text-white font-medium text-sm px-4 rounded-md transition-colors duration-200 flex items-center justify-center min-w-[70px] ${
            isCopied ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
      
      {/* copied message */}
      <p 
        className={`mt-3 text-sm text-green-600 font-medium transition-opacity duration-300 flex items-center gap-1 ${
          isCopied ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        Copied to clipboard!
      </p>
    </div>
  );
};

export default CopyToClipboard;
