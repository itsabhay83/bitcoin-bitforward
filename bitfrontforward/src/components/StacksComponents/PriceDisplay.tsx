import React from "react";

const PriceDisplay: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-0 py-5 max-md:flex-wrap max-md:gap-5 max-sm:flex-col max-sm:gap-4">
      <div className="text-white max-md:flex-[1_1_calc(50%_-_10px)] max-sm:w-full">
        <div className="mb-1.5 text-sm text-neutral-400">BTC/USD</div>
        <div className="mb-1.5 text-base font-semibold">$96,337.00</div>
      </div>
      <div className="text-white max-md:flex-[1_1_calc(50%_-_10px)] max-sm:w-full">
        <div className="mb-1.5 text-sm text-neutral-400">SOL/USD</div>
        <div className="mb-1.5 text-base font-semibold">$147.43</div>
      </div>
      <div className="text-white max-md:flex-[1_1_calc(50%_-_10px)] max-sm:w-full">
        <div className="mb-1.5 text-sm text-neutral-400">ETH/USD</div>
        <div className="mb-1.5 text-base font-semibold">$1,826.34</div>
      </div>
      <div className="text-white max-md:flex-[1_1_calc(50%_-_10px)] max-sm:w-full">
        <div className="mb-1.5 text-sm text-neutral-400">Volatility Index</div>
        <div className="mb-1.5 text-base font-semibold">27.35</div>
      </div>
    </div>
  );
};

export default PriceDisplay;
