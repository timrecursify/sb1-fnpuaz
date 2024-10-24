import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

export function SignupSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 mb-12 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Wallet size={32} />
              <h2 className="text-3xl font-bold">BRICS Pay Wallet</h2>
            </div>
            <p className="text-lg mb-6">
              The future of international transactions is here. BRICS Pay Wallet will enable seamless cross-border payments between BRICS nations, bypassing traditional banking systems and reducing transaction costs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Zero-fee transfers between BRICS nations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Instant currency conversion at wholesale rates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Secure, blockchain-powered transactions
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
            <p className="mb-6">Be the first to experience the future of BRICS payments. Sign up for early access and updates.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                {submitted ? 'Thank you for signing up!' : 'Get Early Access'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}