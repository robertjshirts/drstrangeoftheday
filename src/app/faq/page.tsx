import Link from 'next/link';

export default function FaqPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Why?</h2>
          <p>Because I wanted to.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">What is day 2-1? What does that even mean?</h2>
          <p>I believe in drawing a Dr. Strange every day. This first Dr. Strange is the one with a normal title (Dr. Strange of the Day: Day 2). I also believe in freedom. That's why I offer free (first) comissions for anyone who would like their own Dr. Strange of the Day, and upload them for all to see (Dr. Strange of the Day 2-1, 2-2, etc).</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">How long can I have my Dr. Strange of the Day up for? Can I keep it up for two days? Or even three?</h2>
          <p>Listen here and listen close. If I catch ANYONE keeping a Dr. Strange of the Day up for longer than one day, I will personally never draw a Dr. Strange of the Day for them again. Be warned</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">How much are comissions after the first one?</h2>
          <p>$1 as long as you are close (less than 0.5 mi) and provide a marker and whiteboard.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">PLEASE LET ME ORDER A COMISSION</h2>
          <p>Forward your enquiries to robertjshirts@gmail.com</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Wait I have a question that isn't on here, what do I do?</h2>
          <p>Forward your enquiries to robertjshirts@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
