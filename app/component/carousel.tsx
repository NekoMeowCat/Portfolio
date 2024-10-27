export default function CarouselItem() {
  return (
    <div
      data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "isInfiniteLoop": true,
  "slidesQty": 1
}'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full h-screen bg-white">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full bg-slate-800 p-6 dark:bg-neutral-900">
              <img
                src="/ALPharma.png"
                alt=""
                className="h-[33rem] md:h-[40rem]"
              />
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full bg-slate-800 p-6 dark:bg-neutral-800">
              <img
                src="/aneco1.png"
                alt=""
                className="h-[33rem] md:h-[40rem]"
              />
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full bg-slate-800 p-6 dark:bg-neutral-700">
              <img
                src="/cmai12.png"
                alt=""
                className="h-[33rem] md:h-[40rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <span className="text-2xl" aria-hidden="true">
          <img
            src="/pokemon-models/cacnea.gif"
            alt=""
            className="hover:scale-125 duration-500"
          />
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          {/* <svg
            className="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg> */}
          <img
            src="/pokemon-models/cacnea_2.gif"
            alt=""
            className="hover:scale-125 duration-500"
          />
        </span>
      </button>

      <div className="hs-carousel-info inline-flex justify-center px-4 absolute bottom-10 md:bottom-1 start-[50%] -translate-x-[50%] bg-slate-800 text-white">
        <span className="hs-carousel-info-current me-1">0</span>/
        <span className="hs-carousel-info-total ms-1">0</span>
      </div>
    </div>
  );
}
