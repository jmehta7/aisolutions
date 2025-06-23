import React, { useState } from 'react';

const optionLabels = ['A', 'B', 'C', 'D'];

export default function MultipleChoiceQuestion({ question, options, correctOption, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option === correctOption);
    }
  };

  return (
    <div className="p-4 border rounded shadow max-w-md">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <ul>
        {options.map((option, index) => {
          const label = optionLabels[index] || String.fromCharCode(65 + index); // fallback if more than 4 options
          return (
            <li
              key={index}
              className={`p-3 mb-2 border rounded cursor-pointer flex items-center ${
                selectedOption === option ? 'bg-blue-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <span className="font-bold w-6">{label}. </span>
              <span className="ml-2">{option}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
