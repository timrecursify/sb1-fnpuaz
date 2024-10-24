import React from 'react';
import { Twitter, Facebook, Link } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">BRICS Pay</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Link size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} BRICS Pay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}