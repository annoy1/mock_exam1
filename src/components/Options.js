import React from 'react';

const Options = ({ options, selectedOption, handleAnswer }) => {
  return (
    <div className="options">
      {options.map((option) => (
        <button
          key={option}
          className={`option-button ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
