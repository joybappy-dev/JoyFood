import { Lobster, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/page";
import CartProvider from "@/contexts/CartProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const lobster = Lobster({
  weight: "400",
  subsets: ["cyrillic"]
});

export const metadata = {
  title: {
    default: "Joy Food",
    template: "%s | Joy Food",
  },
  description: "Joy Foods is a resturant, Serving Best Foods in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-white px-3`}>
        <div
          className="fixed inset-0 bg-cover bg-center -z-20"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="fixed inset-0 bg-black/75 -z-10 backdrop-blur-sm"></div>

        <header className="sticky top-10 z-20 max-w-7xl mx-auto mb-8">
          <div className="">
            <Navbar />
          </div>
          <div className="border- border-gray-500 -mx-3"></div>
        </header>

        <main className={`py-12 flex-1 max-w-7xl mx-auto min-h-screen ${lobster.className}`}>
          <CartProvider>{children}</CartProvider>
        </main>

        <footer>
          <div className="border-t border-gray-500 -mx-3"></div>
          <p className="py-4 text-center">Footer Copyright JoyBappy</p>
        </footer>
      </body>
    </html>
  );
}
