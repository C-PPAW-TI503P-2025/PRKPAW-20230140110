import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token
    navigate('/login'); // Kembali ke login
  };

  return (
    // Latar belakang gradien yang lebih dinamis
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4">
      
      {/* Kartu utama dengan bayangan dan efek hover */}
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center transform transition-all hover:scale-105 duration-300">
        
        {/* Ikon SVG (centang) dengan animasi 'bounce' */}
        <svg 
          className="w-16 h-16 mx-auto mb-6 text-green-500 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          >
          </path>
        </svg>

        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Login Berhasil!
        </h1>
       
        <p className="text-lg text-gray-600 mb-10">
          Selamat datang di zona aman Anda.
        </p>

        {/* Tombol Logout yang memenuhi lebar kartu */}
        <button
          onClick={handleLogout}
          className="w-full py-3 px-6 bg-red-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
        >
          Logout
        </button>
      </div>

      {/* Sedikit footer untuk pemanis */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Anda telah masuk ke area terproteksi.</p>
      </footer>
    </div>
  );
}

export default DashboardPage;