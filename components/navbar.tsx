import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center px-36 py-5 mx-12 rounded-lg my-4">
      <h1 className="font-bold text-xl">
        <Link href="/">UPayments Store</Link>
      </h1>
      <h1 className="font-bold text-xl">Register</h1>
    </div>
  );
};

export default Navbar;
