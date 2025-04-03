import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav class="bg-gray-900 text-white p-4">
  <div class="container mx-auto flex justify-between items-center">
    <a href="#" class="text-xl font-bold">Brand</a>
    <div class="hidden md:flex space-x-6">
      <a href="#" class="hover:text-gray-400">Home</a>
      <a href="#" class="hover:text-gray-400">About</a>
      <a href="#" class="hover:text-gray-400">Services</a>
      <a href="#" class="hover:text-gray-400">Contact</a>
    </div>
    <button class="md:hidden text-gray-300 focus:outline-none" id="menu-button">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
  <div class="hidden md:hidden flex flex-col space-y-2 p-4" id="mobile-menu">
    <a href="#" class="block text-center text-gray-300 hover:text-gray-400">Home</a>
    <a href="#" class="block text-center text-gray-300 hover:text-gray-400">About</a>
    <a href="#" class="block text-center text-gray-300 hover:text-gray-400">Services</a>
    <a href="#" class="block text-center text-gray-300 hover:text-gray-400">Contact</a>
  </div>
</nav>
    </div>
  )
}

export default Nav
