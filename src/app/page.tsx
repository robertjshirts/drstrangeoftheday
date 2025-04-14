'use client';

import Link from "next/link"; // Import Link
import DrImage from "@/component/drimage"; // Import the new component

export default function Home() {
  // Manually update day number so it stays up until the next day at 5pm and i don't wanna code that
  const dayNumber = 2;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <h1 className="text-4xl font-bold text-center">Dr. Strange of the Day: Day {dayNumber}</h1>
      <DrImage dayNumber={dayNumber} /> {/* Use the new component */}
      {/* Add link to the gallery */}
      <Link href="/gallery" className="mt-8 text-blue-500 hover:text-blue-700 underline">
        View Gallery
      </Link>
    </div>
  );
}
