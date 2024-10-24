import React from 'react';
import { Header } from './components/Header';
import { Ticker } from './components/Ticker';
import { SignupSection } from './components/SignupSection';
import { NewsGrid } from './components/NewsGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Ticker />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <SignupSection />
        
        {/* Featured Story */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-[#111] h-[400px] flex items-center justify-center">
            <span className="text-green-500 text-6xl font-mono">118.74</span>
          </div>
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-600">The Big Take</span>
              <h2 className="text-2xl font-bold mt-2">6,900 Traders storm the NYSE trading floor to proclaim that 6900 is better than 500</h2>
            </div>
            <p className="text-gray-700">
              In a bold move that could forever change the landscape of global finance, a group of 6900 traders recently launched a daring assault on the New York Stock Exchange (NYSE) with the goal of replacing the venerable S&P 500 with a new, more expansive index.
            </p>
          </div>
        </div>
        <NewsGrid />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
