import React from "react";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="absolute w-full text-center text-amber-600 font-semibold top-20">
          Memuat halaman...
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
