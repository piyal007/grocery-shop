import { Menu, Search, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cards = [];
for (let i = 0; i < 9; i++) {
  cards.push(
    <div className="flex gap-4 rounded-md bg-white p-2 md:p-4 items-center shadow-md" key={i}>
                <div className="bg-[#EFEBE3] p-3 rounded-md">
                  <Image
                    src="/images/sm_card.png"
                    alt=""
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <div className="flex gap-2 text-xs md:text-sm items-center">
                    <Star fill="#FFC107" size={20} className="text-[#FFC107]" />
                    <p>4.5</p>
                  </div>
                  <p className="font-medium my-1 text-xs md:text-xs">Tomatoo 500 g</p>
                  <p className="text-xs md:text-sm">$39.99</p>
                </div>
              </div>
  );
}

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
              <h1 className="font-semibold text-[#111111] text-4xl leading-tight">
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
          <h2 className="font-semibold text-2xl text-[#179800] mb-6">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card 1 */}
            <div className="bg-[#EFEBE3] rounded-md p-6 text-center">
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full flex items-center justify-center mx-auto">
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
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full flex items-center justify-center mx-auto">
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
              <div className="w-24 h-24 bg-[#FAF9F6] rounded-full flex items-center justify-center mx-auto">
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
        {/* products */}
        <section className="py-12 bg-[#EFEBE3]">
          {/* section container */}
          <div className="container">
            <h2 className="font-semibold text-2xl text-[#179800] mb-6">
              Popular Products
            </h2>
            {/* card container */}
            <div className="grid grid-cols-2 md:grid-cols-[1.5fr_repeat(3,1fr)] gap-4">
              {/* card 1 */}
              <div className="offer-card col-span-2 md:col-span-1 md:row-span-3 rounded-md p-4 relative shadow-md">
                <h4 className="text-white text-3xl mt-6 md:mt-16">30% OFF</h4>
                <p className="text-sm my-4">
                  Discover a world of treats, toys, and
                  <br />
                  essentials handpicked for
                </p>
                <button className="px-6 py-1 bg-white text-[#111111] rounded-md cursor-pointer mb-6">
                  Buy Now
                </button>
                <div className="absolute bottom-0 right-2">
                  <Image
                    src="/images/offer_card.png"
                    alt=""
                    width={160}
                    height={250}
                    className=" object-cover"
                  />
                </div>
              </div>
              {/* card 2 */}
              {/* <div className="flex gap-4 rounded-md bg-white px-4 items-center shadow-md">
                <div className="bg-[#EFEBE3] p-3 rounded-md">
                  <Image
                    src="/images/sm_card.png"
                    alt=""
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <div className="flex gap-2 text-sm items-center">
                    <Star fill="#FFC107" size={20} className="text-[#FFC107]" />
                    <p>4.5</p>
                  </div>
                  <p className="font-medium my-1">Tomatoo 500 g</p>
                  <p className="text-sm">$39.99</p>
                </div>
              </div> */}
              {cards}
            </div>
          </div>
        </section>
        {/* discount section */}
        <section>
          {/* container */}
          <div className="container py-12">
            <h2 className="text-[#179800] font-semibold text-2xl mb-6">
              Arrival & Offers
            </h2>
            {/* card container */}
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-2 md:gap-4 *:border">
              {/* card 1 */}
              <div className="bg-[#115414] rounded-md grid grid-cols-2 gap-4">
                <div className="p-6 flex flex-col justify-center gap-4">
                  <Image
                    src="/images/daawat.png"
                    alt=""
                    width={150}
                    height={50}
                  />
                  <button className="bg-[#63B76D] text-[#FAF9F6] px-6 py-2 rounded-md cursor-pointer">
                    Cook Exotic Dishes
                  </button>
                  <p className="text-[#FAF9F6] text-2xl">
                    UP to{" "}
                    <span className="text-white font-semibold">20% OFF</span>
                  </p>
                </div>
                <div className="pt-6">
                  <Image
                    src="/images/discount_card1.png"
                    alt=""
                    width={300}
                    height={400}
                  />
                </div>
              </div>
              {/* card 2 */}
              <div className="bg-[#102861] rounded-md grid grid-cols-[1.5fr_1fr]">
                <div className="p-6 flex flex-col justify-center gap-4">
                  <Image
                    src="/images/india.png"
                    alt=""
                    width={80}
                    height={40}
                  />
                  <button className="bg-[#2A4D97] text-[#FAF9F6] px-6 py-2 rounded-md cursor-pointer">
                    World’s No.1 Rice
                  </button>
                  <p className="text-[#FAF9F6] text-xl">
                    UP to{" "}
                    <span className="text-white font-semibold">40% OFF</span>
                  </p>
                </div>
                <div className="flex flex-col justify-end items-center">
                  <Image
                    src="/images/discount_card2.png"
                    alt=""
                    width={150}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
