// Loader.tsx

import React from 'react';
import "../assets/styles/components/loader.scss";

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loader-text">{text}</p>
    </div>
  );
};

export default Loader;
