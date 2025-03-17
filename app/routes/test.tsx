import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function LoveLetter() {
  const [showLetter, setShowLetter] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let audio;

    if (showLetter) {
      audio = new Audio("/meet.mp3");
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().catch((err) => console.log("Autoplay blocked:", err));
    }

    return () => {
      if (audio) {
        audio.pause();
        audio = null;
      }
    };
  }, [showLetter]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-100 flex items-center justify-center px-4 py-12">
      {!showLetter && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative z-10 bg-pink-100 text-pink-800 rounded-md w-72 h-48 flex items-center justify-center cursor-pointer shadow-xl border border-pink-200 hover:scale-105 transition-all duration-300"
          onClick={() => setShowLetter(true)}
          style={{
            background: "linear-gradient(145deg, #ffe4e6 0%, #fecdd3 100%)",
            perspective: 1000,
          }}
        >
          {/* Envelope Body */}
          <div className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden">
            {/* Flap */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 0 }}
              whileHover={{ rotateX: -120 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-1/2 origin-top transform"
              style={{
                clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                background: "#fecdd3",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            />
            {/* Envelope Content */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative z-10 text-5xl mt-8"
            >
              <img
                src="mae.png"
                alt="Envelope with a special surprise inside"
                className="w-48 h-48"
              />
            </motion.div>
          </div>
        </motion.div>
      )}

      {showLetter && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white bg-opacity-80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl max-w-3xl w-full border border-pink-200 relative z-0"
        >
          <h1 className="text-5xl font-serif text-pink-700 font-bold mb-6 text-center">
            My Dearest Love,
          </h1>

          <p className="mb-8 text-lg text-gray-700 leading-relaxed text-justify">
            Sometimes, I wonder how it is that two lives, so ordinary, so
            separate, can intertwine in the most beautiful way, like the first
            rays of morning light sneaking through a window you never knew you
            needed open. You arrived like a quiet whisper, unassuming, yet
            impossible to ignore. At first, it was nothing more than a passing
            glance, a fleeting thought. But then, without even realizing it, you
            became the part of my day I look forward to, the unexpected rhythm
            that made the chaos feel like a dance. What strikes me most is how
            natural it all feels, how every moment spent with you seems to
            effortlessly melt into the next, like a melody I never want to end.
            There are no grand gestures, no dramatic declarations, just the
            comfort of knowing that, in this world, I found something real.
            Something that doesn’t need to be loud to be understood. In the
            quiet spaces between our words, in the shared glances and the soft
            laughter, I find something far greater than I ever imagined. You’ve
            become my favorite part of this everyday life, the little spark that
            makes the mundane feel extraordinary. Maybe that’s the way love
            works, silent and unassuming, not demanding attention, but filling
            the empty spaces in the most unexpected ways. I’m learning, slowly,
            that sometimes it’s not about the big moments but the small ones,
            the ones that pass by without notice, yet leave a mark that stays
            forever. And in these quiet moments, I realize that I’m lucky. I’m
            lucky to have found you in the most unexpected of places, where love
            doesn’t announce itself but simply becomes.
          </p>

          <p className="text-right text-2xl text-pink-600 font-signature mt-12">
            With all the love in my heart,
            <br />
            Park Seo Junzel
            <img src="maemae.png" alt="love letter" className="w-48 h-48" />
          </p>
        </motion.div>
      )}

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;700&display=swap");

        .font-serif {
          font-family: "Playfair Display", serif;
        }

        .font-signature {
          font-family: "Great Vibes", cursive;
        }
      `}</style>
    </div>
  );
}
