import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/drstrangeoftheday-2.jpg"
        alt="Dr. Strange of the Day, drawn beautifully by me"
        width="500"
        height="500"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
