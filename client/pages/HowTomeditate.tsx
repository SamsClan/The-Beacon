// src/pages/HowToMeditate.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const HowToMeditate: React.FC = () => {
  const navigate = useNavigate();

  const videos = [
    {
      src: "https://www.youtube.com/embed/inpok4MKVLM?autoplay=0&rel=0",
      title: "1️⃣ Guided Meditation for Beginners (10 min)",
    },
    {
      src: "https://www.youtube.com/embed/ZToicYcHIOU?autoplay=0&rel=0",
      title: "2️⃣ Mindful Breathing Exercise",
    },
    {
      src: "https://www.youtube.com/embed/sTANio_2E0Q?autoplay=0&rel=0",
      title: "3️⃣ Meditation to Reduce Anxiety",
    },
    {
      src: "https://www.youtube.com/embed/o-6f5wQXSu8?autoplay=0&rel=0",
      title: "4️⃣ Learn to Focus with Mindfulness",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#66fcf1]">🎥 Learn How to Meditate</h1>
          <p className="text-gray-300 mt-2">Watch step-by-step videos to master mindfulness and relaxation.</p>
          <div className="mt-4">
            <button
              onClick={() => navigate("/")}
              className="bg-[#45a29e] hover:bg-[#66fcf1] text-black px-4 py-2 rounded-lg transition"
            >
              ← Back Home
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-stretch">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="bg-[#111318] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(69,162,158,0.12)] transform hover:scale-[1.03] transition"
            >
              <div className="w-full aspect-[16/9] bg-black">
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <div className="text-[#66fcf1] font-medium">{video.title}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HowToMeditate;
