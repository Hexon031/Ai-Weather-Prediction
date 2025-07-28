
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-12">
      <div className="w-16 h-16 border-4 border-sky-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
