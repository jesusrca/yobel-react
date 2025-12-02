import React, { useState, useEffect } from "react";

interface CountryTimeHeaderProps {
  country: string;
  timezone: string;
}

export function CountryTimeHeader({ country, timezone }: CountryTimeHeaderProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
          timeZone: timezone,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        });
        setTime(timeString.toLowerCase());
      } catch {
        setTime('12:00 pm');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 flex items-center justify-between">
      <h3 className="text-3xl md:text-4xl tracking-tight text-black font-[Neue_Augenblick]">
        {country}
      </h3>
      <p className="text-gray-500 text-2xl md:text-3xl font-[Neue_Augenblick]">{time}</p>
    </div>
  );
}