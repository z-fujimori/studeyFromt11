import React from 'react';

export type InputTitle = {
    text: string;
    eText: string;
};

const Title = ({text, eText}:InputTitle) => {
  return (
    <div className="flex items-center [writing-mode:vertical-rl] p-3">
        <h3 className="sm:text-xl mb-5">{text}</h3>
        <p className="hidden sm:block text-center text-[9px]">{eText}</p>
    </div>
  )
}

export default Title