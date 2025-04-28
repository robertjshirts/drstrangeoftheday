// This is now a fully Server Component
import { getImageList } from "@/lib/getImageList";
import DrImage from "@/component/drimage"; 
import RefImage from "@/component/refimage";

export default function Home() {
  // Fetch the list server-side
  const imageList = getImageList(); 
  // Determine the dayNumber using the exact same logic as before
  const dayNumber = imageList.filter(day => !isNaN(Number(day)))[0]; 
  console.log("dayNumber", dayNumber);

  // Render the page content directly
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-8">
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
