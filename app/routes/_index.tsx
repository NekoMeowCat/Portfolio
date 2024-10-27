import type { MetaFunction } from "@remix-run/node";
import Carousel from "~/component/carousel";

export const meta: MetaFunction = () => {
  return [
    { title: "Junzel Dela Torre" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function dashboard() {
  return (
    <main className="min-h-screen max-w-full overflow-hidden bg-[#F8F0DC]">
      <section className="min-w-full flex flex-wrap">
        <article className="h-auto w-full flex flex-col space-y-6 px-6 w-full">
          <div className="block md:flex md:justify-between">
            <span className="flex gap-x-2 p-2 items-center">
              <img
                src="/pokemon-models/bulbasaur.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/charmander.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/squirtle.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
            </span>
            <span className="flex gap-x-2 p-2 justify-center items-center">
              <img
                src="/pokemon-models/ivysaur.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/charmeleon.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/wartortle.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
            </span>
            <span className="flex gap-x-2 p-2 justify-end items-center">
              <img
                src="/pokemon-models/venusaur.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/charizard.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/blastoise.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
            </span>
            <span className="flex items-end uppercase text-7xl md:text-8xl font-bueno border h-auto text-black py-2">
              Lorem, ipsum dolor.
            </span>
          </div>
          <article className="relative flex justify-start uppercase text-[8rem] md:text-[12rem] font-anton border h-auto text-black tracking-tight leading-none">
            <span className="absolute top-2 left-4 text-black">
              junzel dela torre
            </span>
            <span
              className="relative text-[#F8F0DC]"
              style={{
                textShadow:
                  "2px 2px 0 #75726b, -2px -2px 0 #75726b, 2px -2px 0 #75726b, -2px 2px 0 #75726b",
              }}
            >
              junzel dela torre
            </span>
          </article>
          <article className="flex flex-col h-full w-full justify-between gap-y-6 md:gap-y-10">
            <div className="h-auto border block md:flex md:justify-between space-y-6 md:space-y-0">
              <div className="flex flex-col">
                <span className="uppercase font-anton text-2xl md:text-4xl tracking-tight">
                  work days
                </span>
                <span className="font-bueno uppercase text-xl md:text-4xl">
                  monday - friday
                </span>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="uppercase font-anton text-2xl md:text-4xl tracking-tight">
                  philippines
                </span>
                <span className="font-bueno uppercase text-xl md:text-4xl">
                  butuan city
                </span>
              </div>
            </div>
            <div className="h-auto border block md:flex md:justify-between space-y-6 md:space-y-0">
              <div className="block md:flex md:flex-row md:gap-x-4">
                <span className="uppercase font-anton text-2xl md:text-4xl tracking-tight">
                  socials
                </span>
                <div className="font-bueno uppercase text-xl md:text-2xl flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    github
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    facebook
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    linkedin
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    instagram
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="uppercase font-anton text-2xl md:text-4xl tracking-tight">
                  connect with me?
                </span>
                <span className="flex md:justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 md:size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <a
                    href="mailto:jddelatorre.aclc@gmail.com"
                    className="font-bueno uppercase text-xl md:text-4xl underline"
                  >
                    jddelatorre.aclc@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </article>
        </article>
      </section>

      <section className="flex-wrap h-auto max-w-full border bg-[#F8F0DC] mt-14 px-6">
        <article className="border border-green-500 h-auto text-5xl md:text-6xl font-bold font-bueno md:w-3/4 leading-tight uppercase tracking-wide text-black">
          I am a creative independent developer with two years of experience
          working freelancing. I specialize in building and developing new
          digital solutions, combining my technical expertise and creativity to
          achieve successful projects for my clients.
        </article>
        <span className="flex items-end justify-end uppercase text-gray-400 text-7xl md:text-9xl font-bueno border h-auto text-black mt-10">
          Lorem ipsum dolor sit.
        </span>
        <article className="block md:flex justify-between w-full">
          <div className="block md:flex md:justify-between items-end">
            <span className="flex gap-x-3 p-2 items-end">
              <img
                src="/pokemon-models/chikorita.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/cyndaquil.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/totodile.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
            </span>
          </div>
          <div className="block md:flex md:justify-between justify-center items-center">
            <span className="flex gap-x-3 p-2 justify-center items-end">
              <img
                src="/pokemon-models/bayleef.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/quilava.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/croconaw.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
            </span>
          </div>
          <div className="block md:flex md:justify-between items-end">
            <span className="flex gap-x-3 p-2 items-end justify-end">
              <img
                src="/pokemon-models/meganium.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/typhlosion.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
              <img
                src="/pokemon-models/feraligatr.gif"
                alt=""
                className="hover:translate-x-6 duration-700"
              />
            </span>
          </div>
        </article>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen m-2 px-4 bg-[#F8F0DC]">
        <article className="flex flex-col border items-start relative my-6 md:my-0">
          {/* Background Image */}
          <img
            src="/bg.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ opacity: 0.6 }} // Adjust opacity if needed
          />

          <div className="relative z-10 w-full">
            <div className="flex items-end justify-end w-full p-2 text-slate-800 font-black font-anton text-8xl md:text-9xl">
              19
            </div>
            <div className="relative mb-3 font-black font-anton text-7xl md:text-9xl">
              <h1
                className="absolute top-3 left-4 text-black"
                style={{
                  textShadow:
                    "2px 2px 0 black, -2px -2px 0 black, -2px 2px 0 black, 2px -2px 0 black, 0 0 5px black",
                }}
              >
                WORK
              </h1>
              <h1
                className="relative text-[#EDE9DD]"
                style={{
                  textShadow:
                    "2px 2px 0 black, -2px -2px 0 black, -2px 2px 0 black, 2px -2px 0 black, 0 0 5px black",
                }}
              >
                WORK
              </h1>
            </div>
            <div className="relative font-black font-anton text-7xl md:text-9xl">
              <h1
                className="absolute top-3 left-4 text-black"
                style={{
                  textShadow:
                    "2px 2px 0 black, -2px -2px 0 black, -2px 2px 0 black, 2px -2px 0 black, 0 0 5px black",
                }}
              >
                EXPERIENCE
              </h1>
              <h1
                className="relative text-[#EDE9DD]"
                style={{
                  textShadow:
                    "2px 2px 0 black, -2px -2px 0 black, -2px 2px 0 black, 2px -2px 0 black, 0 0 5px black",
                }}
              >
                EXPERIENCE
              </h1>
            </div>
          </div>

          {/* Unown Images */}
          <div className="relative z-10 mt-8 h-full w-full flex flex-col space-y-8">
            <div className="flex justify-evenly">
              <span className="w-full">
                <img
                  src="/pokemon-models/unown-charlie.gif"
                  alt=""
                  className=""
                />
              </span>
              <span className="w-full">
                <img
                  src="/pokemon-models/unown-foxtrot.gif"
                  alt=""
                  className=""
                />
              </span>
              <span className="w-full">
                <img src="/pokemon-models/latias.gif" alt="" className="" />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="w-full flex items-center justify-center">
                <img
                  src="/pokemon-models/unown-juliet.gif"
                  alt=""
                  className=""
                />
              </span>
              <span className="w-full flex items-center justify-center">
                <img src="/pokemon-models/latios.gif" alt="" className="" />
              </span>
              <span className="w-full flex items-center justify-center">
                <img src="/pokemon-models/unown.gif" alt="" className="" />
              </span>
            </div>
          </div>
        </article>

        <article className="block border bg-slate-800 relative flex flex-col">
          <div className="flex justify-between items-center p-2">
            <span className="font-black font-anton text-[#F8F0DC] text-8xl md:text-9xl border h-auto">
              98
            </span>
            <span className="flex items-end">
              <img
                src="/pokemon-models/ludicolo.gif"
                alt="Bayleef"
                className=""
              />
            </span>
          </div>

          <img
            src="/pokeball.png"
            alt="Pokéball"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
          />

          <Carousel />
        </article>
      </section>
    </main>
  );
}
