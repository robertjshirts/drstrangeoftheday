'use client';

import Image from "next/image";
import * as React from "react";

interface DrImageProps {
  dayNumber: string;
}

export default function DrImage({ dayNumber }: DrImageProps) {
  const [blurred, setBlurred] = React.useState(true);
  const [imageError, setImageError] = React.useState(false);

  const handleClick = () => setBlurred(false);
  const handleError = () => setImageError(true);

  const imageUrl = `/drstrangeoftheday-${dayNumber}.jpg`;
  const isCommissioned = isNaN(Number(dayNumber)); // Check if dayNumber is not a simple number

  if (imageError) {
    return <p className="text-xl text-gray-500">No Dr. Strange for day {dayNumber}</p>;
  }

  return (
    <Image
      src={imageUrl}
      alt={`Dr. Strange of the Day ${dayNumber}, drawn beautifully by me`}
      width={500}
      height={500}
      className={`rounded-lg shadow-lg ${isCommissioned ? 'border-2 border-red-500' : ''}`} // Add border conditionally
      priority // Prioritize loading the image as it's the main content
      title={isCommissioned ? "Commissioned" : undefined} // Add tooltip conditionally
      style={{
        filter: blurred ? "blur(30px)" : "none",
        cursor: blurred ? "pointer" : "default",
        transition: "filter 0.5s ease-out",
      }}
      onClick={handleClick}
      onError={handleError} // Handle image loading errors
    />
  );
}
