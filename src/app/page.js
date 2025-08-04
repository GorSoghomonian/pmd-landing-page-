import Link from 'next/link';
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between px-8 py-4">
            <div className={`text-2xl font-bold text-black ${pacifico.className}`} aria-label="Logo">Logo</div>
            <ul className="flex items-center gap-8 fz-10 font-medium text-gray-700 ">
              <li>
                <Link href="/" className="font-medium transition-all duration-300 hover:text-blue-600 cursor-pointer text-blue-600">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-blue-600 transition">Industries</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">Services ▾</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">PMD Solutions</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 ">
          Leading consulting firm providing comprehensive business solutions,<br className="hidden md:inline" /> 
          automation services, and strategic guidance to help your business thrive.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="px-8 py-4 bg-[#2A73DD] text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Explore Our Services →
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 border-2 border-[#2A73DD] text-[#2A73DD] rounded-full font-semibold text-lg hover:bg-[#2A73DD] hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Learn About Us
          </Link>
        </div>
      </section>
    </main>
  );
}
