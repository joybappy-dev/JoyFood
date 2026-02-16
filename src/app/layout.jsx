import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Joy Foods | Home",
  description: "Joy Foods is a resturant, Serving Best Foods in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen text-white px-3 flex flex-col`}>
        <div
          className="fixed inset-0 bg-cover bg-center -z-20"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="fixed inset-0 bg-black/75 -z-10 backdrop-blur-sm"></div>

        <header className="sticky top-0 z-20 -mx-3">
          <div className="">
            <Navbar/>
          </div>
          <div className="border- border-gray-500 -mx-3"></div>
        </header>

        <main className="max-w-7xl mx-auto py-8 flex-1">{children}</main>

        <footer>
          <div className="border-t border-gray-500 -mx-3"></div>
          <p className="py-4">Footer</p>
        </footer>
      </body>
    </html>
  );
}
