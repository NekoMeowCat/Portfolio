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
                src="bd.png"
                alt="Envelope with a special surprise inside"
                className="w-30 h-30"
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
          className="bg-white bg-opacity-80 backdrop-blur-lg p-12 rounded-xl shadow-2xl max-w-3xl w-full border border-pink-200 relative z-0"
        >
          <h1 className="text-5xl font-serif text-[#6b9080] font-bold mb-6 text-center">
            생일 축하해요
          </h1>

          <h2 className="text-left mb-4 capitalize font-serif text-[#6b9080] italic font-medium">
            Saengil chukhahae,
          </h2>

          <p className="mb-3 text-base text-gray-700 leading-6 tracking-wide text-justify">
            There are stories that speak of people who change often, not just in
            the way they look, but in the way they feel, the weight they carry,
            the light they share. And somehow, I find those stories quietly
            familiar when I think of you. Because even as time moves and days
            shift you into different shapes, softer some days, stronger on
            others, you remain you. Honest. Brave. Unknowingly radiant. And I
            want you to know, especially today: I see you. Not just the version
            of you that the world claps for, but the one that shows up even when
            it's hard. The one that doubts, and dreams, and does it all with a
            heart so full it spills into everyone lucky enough to stand near
            you. You are loved, not for what you do or how you seem, but simply
            because you are. I’m thankful for the way you move through this
            world, for your presence, your warmth, your wonder. And if ever you
            feel unsure or worn thin, I hope you remember this: you are not
            alone. You never have been. And my heart? It’s always known where
            home is—it’s wherever you are. And to the love that wraps itself
            around you, even when you forget it’s there. You’ve touched so many
            lives in ways you’ll never truly know, quietly shaping the world
            with every step you take. The way you listen, with all of yourself.
            The way you give without hesitation, even when you think there’s
            nothing left to give. The way you hold the space for others to grow,
            even when you feel like you're still figuring it out yourself. I see
            how hard you work to be true to yourself, how much you give to those
            around you, yet I also see the softness that lies beneath your
            strength, the gentle spirit that still holds on to kindness, even
            when the world can feel cold. That, to me, is one of the most
            beautiful things about you—how you balance the fire and the calm,
            the loud and the quiet. And so, I want you to hold this in your
            heart, especially today: you are an extraordinary person, even on
            the days you doubt it. Even when you’re not sure of the path ahead,
            know that you have already carved a space for yourself here, in this
            world, in my heart, and in the hearts of so many who love you. And
            when the days feel heavy or the world feels too big, always
            remember: you are not alone. I am here, and I always will be.
            Through every chapter, every change, every season. There’s nothing
            that can take away how deeply you are loved. Here’s to the person
            you are, and the person you’re still becoming. To the parts of you
            that are yet to bloom, and the ones that are already here, shining
            brighter than you could ever imagine. You are a story still being
            written, and it’s already beautiful.
          </p>

          <p className="text-right text-2xl text-[#6b9080] font-signature mt-12">
            With all the love in my heart,
            <br />
            Park Seo Junzel
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
