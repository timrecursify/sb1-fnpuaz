import React, { useEffect, useState } from 'react';

interface TickerItem {
  symbol: string;
  value: number;
  change: number;
}

export function Ticker() {
  const [tickerData, setTickerData] = useState<TickerItem[]>([
    { symbol: 'CNY/USD', value: 6.9420, change: -0.99 },
    { symbol: 'RUB/USD', value: 69.000, change: 2.34 },
    { symbol: 'INR/USD', value: 82.740, change: -0.45 },
    { symbol: 'BRL/USD', value: 4.9690, change: 1.23 },
    { symbol: 'ZAR/USD', value: 18.890, change: -0.67 },
    { symbol: 'S&P500', value: 5023.45, change: -99 },
    { symbol: 'BRICS', value: 6900.00, change: 69.000 },
    { symbol: 'MSFT', value: 420.69, change: -99 },
    { symbol: 'NVDA', value: 789.12, change: -99 },
  ]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setTickerData(prevData => 
        prevData.map(item => ({
          ...item,
          value: +(item.value * (1 + (Math.random() * 0.02 - 0.01))).toFixed(4),
          change: +(item.change + (Math.random() * 0.4 - 0.2)).toFixed(2)
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-2 overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker">
          {tickerData.map((item, index) => (
            <span key={index} className="flex items-center mr-8">
              <span className="font-medium">{item.symbol}</span>
              <span className="ml-2">{item.value.toFixed(4)}</span>
              <span className={`ml-2 ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change)}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}