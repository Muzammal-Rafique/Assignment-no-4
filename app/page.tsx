'use client'
import { useState } from 'react';
import { students } from './data';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


const Home = () => {
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);

  const handleNext = () => {
    setCurrentStudentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const handlePrevious = () => {
    setCurrentStudentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length);
  };

  const capitalizeFirstLetter = (string:string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const currentStudent = students[currentStudentIndex];

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-52 h-80 mx-4 my-4  bg-gradient-to-br from-pink-300 to-blue-500 shadow-md rounded-md overflow-hidden">
        <div className=' flex items-center justify-center'>
        <div className="bg-gradient-to-br from-pink-100 to-blue-900 m-3 h-32 w-32 rounded-full flex items-center justify-center">
          <span className="text-gray-700 text-7xl">
            {currentStudent.name.charAt(0).toUpperCase()}
          </span>
        </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">
            {capitalizeFirstLetter(currentStudent.name)}
          </h2>
          <p>Gender: {currentStudent.gender}</p>
          <p>Physics: {currentStudent.physics}</p>
          <p>Maths: {currentStudent.maths}</p>
          <p>English: {currentStudent.english}</p>
        </div>
      </div>

      <div className="flex justify-center gap-6 w-full mt-4">
        <button
          onClick={handlePrevious}
          className={`bg-blue-500 text-white flex items-center justify-center px-4 py-2 rounded-md ${
            currentStudentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentStudentIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className={`bg-blue-500 text-white flex items-center justify-center px-4 py-2 rounded-md ${
            currentStudentIndex === students.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentStudentIndex === students.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
