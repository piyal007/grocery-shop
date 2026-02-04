import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav className="py-4">
          {/* Container */}
          <div className="container hidden lg:grid grid-cols-3 items-center">
            {/* logo */}
            <div className="*:cursor-pointer">
              <Image src="/images/logo.png" alt="" width={130} height={50} />
            </div>
            {/* Navigation */}
            <div className="">
              <ul className="flex gap-6 justify-center **:text-md *:hover:scale-105 *:transition-all">
                <li>
                  <Link href="">Product</Link>
                </li>
                <li>
                  <Link href="">Services</Link>
                </li>
                <li>
                  <Link href="">Contact Us</Link>
                </li>
              </ul>
            </div>
            {/* right buttons */}
            <div className="flex gap-6 justify-end *:text-md">
              <div className="flex gap-3 items-center *:cursor-pointer *:hover:scale-105 *:transition-all">
                <Search />
                <ShoppingCart />
              </div>
              <div className="flex gap-3 *:cursor-pointer *:hover:scale-105 *:transition-all">
                <button className="border border-[#179800] rounded-md px-6 py-1">
                  Login
                </button>
                <button className="bg-[#179800] rounded-md px-6 py-1 text-white">
                  Register
                </button>
              </div>
            </div>
          </div>
          {/* mobile menu */}
          <div className="lg:hidden flex justify-between items-center px-2">
            <div>
              <Image src="/images/m_logo.png" alt="" width={48} height={43} />
            </div>
            <div>
              <Menu className="text-[#179800]" />
            </div>
          </div>
        </nav>
        {/* hero area */}
        <section className="pt-4">
          {/* container */}
          <div className="container flex flex-col items-center">
            <div className="text-center">
              <h1 className="font-semibold text-[#111111] text-5xl leading-tight">
                Freshness{" "}
                <span className="text-[#179800]">
                  You Can
                  <br />
                  Count
                </span>{" "}
                On, Prices You’ll Love!
              </h1>
              <p className="text-sm py-4">
                Shop your daily essentials at unbeatable prices. From fresh
                produce to pantry
                <br />
                staples, we’ve got you covered every day!
              </p>
            </div>
            <div>
              <Image
                src="/images/hero.png"
                alt=""
                width={1031}
                height={838}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </header>
      <main>
        {/* services */}
        <section className="container py-12">
          <h2 className="font-semibold text-2xl text-[#179800] mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card 1 */}
            <div className="bg-[#EFEBE3] rounded-md p-6 text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto">
                <Image
                  src="/images/s1.png"
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h4 className="font-semibold text-[#111111] text-md py-2">
                24/7 Services
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
            {/* card 2 */}
            <div className="bg-[#EFEBE3] rounded-md p-6 text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto">
                <Image
                  src="/images/s2.png"
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h4 className="font-semibold text-[#111111] text-md py-2">
                Fast Delivery
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
            {/* card 3 */}
            <div className="bg-[#EFEBE3] rounded-md p-6 text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto">
                <Image
                  src="/images/s3.png"
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h4 className="font-semibold text-[#111111] text-md py-2">
                Healthy Products
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
