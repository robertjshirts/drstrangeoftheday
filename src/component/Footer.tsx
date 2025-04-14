import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="container mx-auto flex justify-center space-x-4 p-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Home
        </Link>
        <Link href="/gallery" className="text-blue-500 hover:text-blue-700 underline">
          Gallery
        </Link>
        <Link href="/faq" className="text-blue-500 hover:text-blue-700 underline">
          FAQ
        </Link>
      </nav>
    </footer>
  );
}
