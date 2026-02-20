import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface TicketItemProps {
  title: string;
  description: string;
  price: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  isFree?: boolean;
}

export function TicketItem({ title, description, price, quantity, onQuantityChange, isFree = false }: TicketItemProps) {
  const handleDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-gray-200 bg-white mb-4">
      <div className="flex-1 max-w-xl pr-4">
        <h3 className="font-['Arquitecta'] font-bold text-gray-900 text-lg mb-1">{title}</h3>
        <p className="text-[#6b6b6b] font-['Open_Sans'] font-normal text-sm md:text-base leading-relaxed pr-4">{description}</p>
      </div>
      
      <div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
        <div className="font-['Arquitecta'] font-bold text-gray-900 text-xl">
          {isFree ? 'Free' : `$${price}`}
        </div>
        
        <div className="flex items-center">
          <button 
            onClick={handleDecrement}
            disabled={quantity === 0}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-500"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          
          <div className="w-10 h-10 flex items-center justify-center bg-[#f5f5f3] font-['Open_Sans'] font-bold text-gray-700 text-base border-y border-gray-200">
            {quantity}
          </div>
          
          <button 
            onClick={handleIncrement}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors text-gray-500"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
