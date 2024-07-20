import React from 'react';

interface StacksProps {
  title: string;
  stacks: string[];
}

const Stacks: React.FC<StacksProps> = ({ title, stacks }) => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="flex flex-wrap">
        {stacks.map((stack, index) => (
          <li key={index} className="mb-2 mr-3 text-gray-700 font-semibold">
            {stack}
            {index < stacks.length - 1 && ' / '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stacks;
