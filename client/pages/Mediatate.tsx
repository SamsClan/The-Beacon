// src/pages/Home.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Meditate: React.FC = () => {
  const navigate = useNavigate();
  const [showMoodBox, setShowMoodBox] = useState(false);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const detectMood = async () => {
    if (!text.trim()) {
      alert("Please type your mood first!");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5002/detect_mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      if (data.error) {
        alert(data.error);
        return;
      }

      setStatus(`Mood Detected: ${data.mood} 🌿`);
      setTimeout(() => {
        navigate(
          `/meditate?mood=${data.mood}&video=${encodeURIComponent(
            data.video
          )}&audio=${encodeURIComponent(data.audio)}`
        );
      }, 900);
    } catch (err) {
      console.error("Error detecting mood:", err);
      alert("Failed to detect mood. Check backend.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col items-center px-4 py-12">
      <header className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#66fcf1] mb-2">
          🧘‍♂️ Welcome to Mind Relax AI
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          Your space for peace, learning & emotional healing.
        </p>
      </header>

      <section className="w-full max-w-4xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
        <div className="flex-1 bg-[#111318] p-8 rounded-2xl shadow-[0_10px_30px_rgba(69,162,158,0.12)]">
          <h2 className="text-2xl font-semibold text-[#66fcf1] mb-3">🎥 How to Meditate</h2>
          <p className="text-gray-300 mb-6">
            Learn basic meditation techniques with step-by-step videos.
          </p>
          <button
            onClick={() => navigate("/how-to")}
            className="inline-block bg-[#45a29e] hover:bg-[#66fcf1] text-black font-medium px-5 py-2 rounded-lg transition"
          >
            Watch Tutorials
          </button>
        </div>

        <div className="flex-1 bg-[#111318] p-8 rounded-2xl shadow-[0_10px_30px_rgba(69,162,158,0.12)]">
          <h2 className="text-2xl font-semibold text-[#66fcf1] mb-3">🧘 Mood-Based Meditation</h2>
          <p className="text-gray-300 mb-6">Reduce stress with personalized videos and voice guidance.</p>
          <button
            onClick={() => setShowMoodBox(true)}
            className="inline-block bg-[#45a29e] hover:bg-[#66fcf1] text-black font-medium px-5 py-2 rounded-lg transition"
          >
            Start Now
          </button>
        </div>
      </section>

      {showMoodBox && (
        <div className="mt-10 w-full max-w-xl bg-[#111318] p-6 rounded-xl shadow-[0_10px_30px_rgba(69,162,158,0.08)]">
          <textarea
            className="w-full min-h-[120px] resize-none p-4 rounded-lg bg-[#0f1214] border border-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#45a29e]"
            placeholder="Describe your current mood..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={detectMood}
              className="bg-[#3276EA] hover:bg-[#235bcc] px-4 py-2 rounded-lg font-semibold transition"
            >
              Find My Meditation
            </button>
            <button
              onClick={() => {
                setShowMoodBox(false);
                setText("");
                setStatus("");
              }}
              className="text-sm text-gray-300 underline"
            >
              Cancel
            </button>
          </div>
          {status && <div className="mt-3 text-green-300">{status}</div>}
        </div>
      )}
    </div>
  );
};

export default Meditate;
