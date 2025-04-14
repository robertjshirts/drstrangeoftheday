'use client';

import Link from 'next/link';
import * as React from 'react';
import DrImage from '@/component/drimage'; // Import the DrImage component

// Assuming images follow the pattern drstrangeoftheday-{dayNumber}.jpg
// Display in reverse chronological order
const imageDays = ["2-1", "2", "1"]; // Manually list the available days based on the files found, reversed

export default function Gallery() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Dr. Strange Gallery</h1>
      {/* Use a flex column layout for scrolling */}
      <div className="flex flex-col items-center space-y-8 w-full max-w-xl">
        {imageDays.map((dayNumber) => (
          <div key={dayNumber} className="flex flex-col items-center space-y-2">
            <h2 className="text-2xl font-semibold">Day {dayNumber}</h2>
            <DrImage dayNumber={dayNumber} />
          </div>
        ))}
      </div>
    </div>
  );
}
