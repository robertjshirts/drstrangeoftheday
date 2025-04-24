// This is now a Server Component
import * as React from 'react';
import DrImage from '@/component/drimage'; 
import { getImageList } from '@/lib/getImageList'; // Import the server-side function

// Assuming images follow the pattern drstrangeoftheday-{dayNumber}.jpg
// Display in reverse chronological order (handled by getImageList)

export default function Gallery() {
  // Fetch the list server-side
  const imageDays = getImageList(); 
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
