import React, { useState, useRef } from 'react';
import Card from "components/card";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdSend, MdCallReceived } from 'react-icons/md';

const Widget = (props) => {
  const { icon, title, subtitle, tooltipText, showSendReceive } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setShowTooltip(false);
  };

  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px] relative">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <div className="flex items-center justify-between">
          <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
          {showSendReceive && (
            <div className="flex items-center space-x-2">
              <button className="p-1 text-gray-300 hover:bg-gray-700 rounded-full">
                <MdSend size={20} />
              </button>
              <button className="p-1 text-gray-300 hover:bg-gray-700 rounded-full">
                <MdCallReceived size={20} />
              </button>
            </div>
          )}
          <div className="relative flex-shrink-0 ml-4">
            <span className="cursor-help" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <AiOutlineInfoCircle size={16}/>
              {showTooltip && (
                <div className="absolute -left-40 -top-10 p-2 bg-black opacity-75 text-xs shadow-lg rounded-md text-gray-100 z-10">
                  {tooltipText}
                </div>
              )}
            </span>
          </div>
        </div>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
