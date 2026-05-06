import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from '../../sections/Footer';
import { MessageCircle } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">{children}</main>
      <Footer />

      {/* Sticky Conversion Anchor: WhatsApp */}
      <a
        href="https://wa.me/918200347067"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7" fill="white">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.418-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.276 13.276 0 0 1-6.79-1.864l-.487-.29-5.001 1.191 1.218-4.86-.318-.5A13.243 13.243 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.987c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.898.2-.266.398-1.031 1.295-1.264 1.561-.232.266-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.055-1.981-2.358-2.213-2.756-.232-.398-.025-.613.175-.812.18-.178.398-.465.598-.698.199-.233.265-.4.398-.665.133-.266.066-.499-.033-.698-.1-.2-.898-2.163-1.23-2.961-.323-.775-.651-.67-.899-.682l-.765-.013c-.266 0-.699.1-.1065.499-.366.398-1.396 1.362-1.396 3.322s1.43 3.854 1.629 4.12c.2.266 2.815 4.298 6.822 6.027.954.412 1.698.658 2.278.843.957.305 1.828.262 2.516.159.768-.114 2.355-.963 2.688-1.893.333-.93.333-1.728.233-1.893-.1-.166-.366-.266-.764-.465z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
};
