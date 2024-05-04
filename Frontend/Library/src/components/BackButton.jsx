import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div>
      <Link
        to={destination}
        className='flex items-center bg-sky-800 text-white px-2 py-1 rounded-md hover:bg-sky-700 focus:outline-none focus:bg-sky-700 w-24' 
      >
        <BsArrowLeft className='text-xl ' />
        <span className='text-base font-medium'></span>
      </Link>
    </div>
  );
};

export default BackButton;
