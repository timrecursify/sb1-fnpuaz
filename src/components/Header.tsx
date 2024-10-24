import React from 'react';

export function Header() {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">BRICS Pay</h1>
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString()}
          </div>
        </div>
        <div className="flex gap-4 mt-4 text-sm">
          <span className="hover:text-blue-600 cursor-pointer">LIVE TV</span>
          <span className="hover:text-blue-600 cursor-pointer">AEONS</span>
          <span className="hover:text-blue-600 cursor-pointer">CHART</span>
          <span className="hover:text-blue-600 cursor-pointer">REPORTS</span>
          <span className="hover:text-blue-600 cursor-pointer">BUY</span>
          <span className="hover:text-blue-600 cursor-pointer">BRIDGE</span>
          <span className="hover:text-blue-600 cursor-pointer">MERCH</span>
        </div>
      </div>
    </header>
  );
}