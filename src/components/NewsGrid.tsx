import React from 'react';

export function NewsGrid() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Large Featured Article - Spans 8 columns */}
      <article className="col-span-8 border-t-4 border-black pt-4">
        <img 
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000" 
          alt="BRICS Summit" 
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-2xl font-bold mb-3">BRICS Alliance Unveils Revolutionary Digital Payment System</h3>
        <p className="text-gray-600 mb-4">
          In a historic move that signals a significant shift in global financial dynamics, the BRICS nations have jointly announced the development of a groundbreaking digital payment system. The initiative, dubbed "BRICS Pay," aims to revolutionize cross-border transactions and challenge the dominance of traditional payment networks.
        </p>
        <p className="text-gray-600">
          The system's architecture leverages cutting-edge blockchain technology while maintaining compatibility with existing financial infrastructure, ensuring a smooth transition for both institutions and end-users. Early testing phases have shown promising results, with transaction times averaging under 3 seconds and costs reduced by up to 95% compared to conventional methods.
        </p>
      </article>

      {/* Medium Article - Spans 4 columns */}
      <article className="col-span-4 border-t-4 border-blue-600 pt-4">
        <h3 className="text-xl font-bold mb-3">Central Banks Prepare for BRICS Pay Integration</h3>
        <p className="text-gray-600">
          Central banks across BRICS nations are rapidly adapting their systems to accommodate the upcoming BRICS Pay platform. The integration process, expected to complete by Q2 2024, represents one of the largest coordinated financial infrastructure updates in recent history.
        </p>
      </article>

      {/* Wide Article - Spans 6 columns */}
      <article className="col-span-6 border-t-4 border-green-600 pt-4">
        <h3 className="text-xl font-bold mb-3">Global Markets React: Traditional Payment Providers Face New Reality</h3>
        <p className="text-gray-600">
          As BRICS Pay gains momentum, established payment providers are scrambling to adapt their strategies. Industry analysts predict a significant shift in market share within the next 18 months, with traditional providers potentially losing up to 30% of international transaction volume to the new platform.
        </p>
      </article>

      {/* Small Article - Spans 3 columns */}
      <article className="col-span-3 border-t-4 border-red-600 pt-4">
        <h3 className="text-lg font-bold mb-3">Tech Giants Eye BRICS Pay Integration</h3>
        <p className="text-gray-600">
          Major technology companies are showing strong interest in integrating BRICS Pay into their platforms, recognizing the potential for expanded market reach in emerging economies.
        </p>
      </article>

      {/* Small Article - Spans 3 columns */}
      <article className="col-span-3 border-t-4 border-purple-600 pt-4">
        <h3 className="text-lg font-bold mb-3">Security Experts Praise BRICS Pay Architecture</h3>
        <p className="text-gray-600">
          Leading cybersecurity firms have lauded the robust security measures implemented in the BRICS Pay system, highlighting its innovative approach to fraud prevention.
        </p>
      </article>

      {/* Medium-Wide Article - Spans 7 columns */}
      <article className="col-span-7 border-t-4 border-yellow-600 pt-4">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
          alt="Digital Payment" 
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-xl font-bold mb-3">BRICS Pay to Enable Instant Cross-Border Settlements</h3>
        <p className="text-gray-600">
          The new payment system's architecture enables real-time settlement of cross-border transactions, eliminating the traditional 2-3 day waiting period. This breakthrough could save businesses billions in working capital costs annually while significantly reducing currency exchange risks.
        </p>
      </article>

      {/* Medium Article - Spans 5 columns */}
      <article className="col-span-5 border-t-4 border-indigo-600 pt-4">
        <h3 className="text-xl font-bold mb-3">Merchants Worldwide Prepare for BRICS Pay Launch</h3>
        <p className="text-gray-600">
          A survey of global merchants reveals overwhelming interest in adopting BRICS Pay, with over 70% of respondents planning to integrate the system within the first six months of its public launch. The promise of lower fees and instant settlements has particularly attracted small and medium-sized businesses.
        </p>
      </article>
    </div>
  );
}