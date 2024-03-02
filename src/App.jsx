import React from 'react';
import 'tailwindcss/tailwind.css'; 

function App() {
  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-red-500 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <p className='font-bold text-xl font-serif'>Kalvium</p>
        </div>

        <div className='w-full block flex-grow sm:flex sm:items-center sm:w-auto '>
          <div className='text-sm sm:flex-grow space-x-4'>
            <a href="#" className="nav-link text-gray-600 hover:text-gray-100">About us</a>
            <a href="#" className="nav-link text-gray-600 hover:text-gray-100">Contact</a>
            <a href="#" className="nav-link text-gray-600 hover:text-gray-100">Courses</a>
          </div>
          <div>
            <a href="#" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Log in</a>
          </div>
        </div>
      </nav>
      <div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6 ml-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Button one</button>
      </div>
      <div class="flex items-center p-4 mb-4 ml-6 mr-6 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-600" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span> 
  <div>
    <span class="font-medium">Alert!</span> This is awesome.
  </div>
</div>


      <div className="card flex items-center bg-white shadow-lg mx-auto mt-5 rounded-lg p-4 w-3/4 h-32 ">
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className="h-20" alt="Kalvium Logo" />
        </div>
        <div className="mx-3">
          <strong> Kalvium Store </strong>
          <p> You have a new course! </p>
        </div>
      </div>

      <div className="footer bg-gray-300 mt-8 text-center py-4">
        <p> ©️ 2021 Copyright: <a href="#" className="font-bold text-slate-700">Kalvium</a> </p>
      </div>
    </>
  );
}

export default App;
