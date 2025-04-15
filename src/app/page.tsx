'use client';

import DrImage from "@/component/drimage"; 
import RefImage from "@/component/refimage";

export default function Home() {
  // Manually update day number so it stays up until the next day at 1pm and i don't wanna code that
  const dayNumber = "3";

  return (
    <div className="flex flex-col items-center justify-center p-24 space-y-8">
      <h1 className="text-4xl font-bold text-center">Dr. Strange of the Day: Day {dayNumber}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <p>Reference image</p>
          <RefImage />
        </div>
        <div className="flex flex-col items-center">
          <p>Attempt #{dayNumber}</p>
          <DrImage dayNumber={dayNumber} />
        </div>
      </div>
    </div>
  );
}
