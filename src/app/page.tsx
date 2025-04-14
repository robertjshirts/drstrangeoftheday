import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Home() {
  const startDate = new Date("2025-04-13T00:00:00"); // Set the start date (April 13, 2025)
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - startDate.getTime();
  const dayNumber = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1; // Calculate day number

  const imagePath = path.join(process.cwd(), 'public', `drstrangeoftheday-${dayNumber}.jpg`);
  const imageExists = fs.existsSync(imagePath);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <h1 className="text-4xl font-bold text-center">Dr. Strange of the Day: Day {dayNumber}</h1>
      {imageExists ? (
        <Image
          src={`/drstrangeoftheday-${dayNumber}.jpg`}
          alt={`Dr. Strange of the Day ${dayNumber}, drawn beautifully by me`}
          width={500} // Use numbers directly for width/height
          height={500}
          className="rounded-lg shadow-lg"
          priority // Prioritize loading the image as it's the main content
        />
      ) : (
        <p className="text-xl text-gray-500">No Dr. Strange for day {dayNumber}</p>
      )}
    </div>
  );
}
