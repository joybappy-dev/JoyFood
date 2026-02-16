import React from "react";

const Button = ({ children, props }) => {
  return (
    <button
      {...props}
      className="px-7 py-2 rounded-sm font-semibold text-yellow-400
                   bg-white/10 backdrop-blur-md
                   border border-white/20
                   hover:bg-white/20
                   transition-all duration-300
                   shadow-lg hover:shadow-xl
                   active:scale-95"
    >
      {children}
    </button>
  );
};

export default Button;
