import Link from 'next/link';

export default function FaqPage() {
  return (
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm p-5">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">WHY?</h2>
          <p>Because I wanted to.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">WHY DO SOME IMAGES HAVE A RED BORDER? WHAT IS DAY 2-1??</h2>
          <p>I believe in drawing a Dr. Strange every day. This first Dr. Strange is the one with a normal title (Dr. Strange of the Day: Day 2). I also believe in freedom. That's why I offer free comissions for anyone who would like their own Dr. Strange of the Day, and upload them for all to see. Commissions are outlined in red, and given a different name (Dr. Strange of the Day 2-1, 2-2, etc).</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">HOW LONG CAN I HAVE MY DR. STRANGE OF THE DAY UP FOR? CAN I KEEP IT UP FOR TWO DAYS? OR EVEN THREE?</h2>
          <p>Listen here and listen close. If I catch ANYONE keeping a Dr. Strange of the Day up for longer than one day, I will personally never draw a Dr. Strange of the Day for them again. Be warned</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">OH MY GOD I DON'T LIVE ANYWHERE NEAR YOU CAN I STILL GET A DR. STRANGE OF THE DAY? PLEASE?</h2>
          <p>Of course dear viewer. Simply request a commission, and I will send you a very high quality picture of your Dr. Strange of the Day. Never fret, as I will ensure to destroy it by the 24hr mark to ensure that you can request another one in the future.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">WHERE CAN I FIND YOU ON TIKTOK</h2>
          <p>Great question, just go to my <a className="underline" href="https://www.tiktok.com/@mistershirts">TikTok</a></p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">WHERE CAN I FIND YOU ON INSTAGRAM</h2>
          <p>Great question, just go to my <a className="underline" href="https://www.instagram.com/drstrangeoftheday">Instagram</a></p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">PLEASE LET ME ORDER A COMISSION</h2>
          <p>Forward your enquiries to robertjshirts@gmail.com</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">WAIT I HAVE A QUESTION THAT ISN'T ON HERE, WHAT DO I DO?</h2>
          <p>Forward your enquiries to robertjshirts@gmail.com</p>
        </div>
      </div>
  );
}