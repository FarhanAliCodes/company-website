import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white p-6 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-2xl">
            My Software Company
          </Link>
          <div>
            <Link href="/" className="mx-4 hover:underline">Home</Link>
            <Link href="/about" className="mx-4 hover:underline">About</Link>
            <Link href="/services" className="mx-4 hover:underline">Services</Link>
            <Link href="/contact" className="mx-4 hover:underline">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-6">{children}</main>
      <footer className="bg-blue-800 text-white p-4 text-center">
        © 2024 My Software Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;