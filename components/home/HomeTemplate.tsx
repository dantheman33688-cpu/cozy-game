"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Rating } from "@/components/rating/Rating";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";

export function HomeTemplate() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const game = getOtherGames().find(game =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (game) {
      const element = document.getElementById("other-games");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={handleSearch}
      />

      <main className="container mx-auto px-4 py-8">
        <GameSection />
        <OtherGames
          games={getOtherGames()}
          onGameSelect={setActiveGame}
        />
        
        <section
          id="core-gameplay"
          className="mb-16 text-center bg-gradient-to-b from-blue-50 to-white py-12 px-6 rounded-2xl shadow-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Core Gameplay Mechanics & High-Score Secrets ⚙️
          </h2>

          {/* Mastering Launch Power */}
          <div className="max-w-4xl mx-auto text-left space-y-4">
            <h3 className="text-2xl font-semibold text-blue-700">
              Mastering Launch Power and Angle Precision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The foundation of success in <strong>Thorn Ball</strong> lies in understanding and controlling the launch mechanics.
              Every shot begins with the pull-back mechanic, which determines your launch power. The further you pull back, the stronger
              the launch — but precision is everything.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To adjust the launch angle, use a diagonal slide motion on your screen. Combining the right angle with the perfect amount
              of power ensures your thorn ball travels efficiently, reaching even the most scattered balloons.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Players aiming for consistent high scores must develop muscle memory for both controls. Experiment in early levels to understand
              how small variations affect your trajectory — this practice pays off when tackling advanced puzzles later on.
            </p>
            <img 
            height="267" width="400" 
            alt="Thorn Ball gameplay showing a thorn projectile being launched to pop colorful balloons through precise rebound physics" 
            title="Thorn Ball Launch Mechanics – Mastering Precision and Rebound Physics to Pop Balloons" 
            loading="lazy" 
            src="/assets/thorn-and-balloons/thorn-and-balloons-gameplay.webp" 
            />
          </div>
        </section>


        <section
          id="physics"
          className="mb-16 text-center bg-gradient-to-b from-indigo-50 to-white py-12 px-6 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            The Physics of Wall Bounces and Chain Reactions 🔁
          </h3>
          <div className="max-w-4xl mx-auto text-left space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Thorn Ball’s physics system rewards players who think beyond direct hits. Each wall bounce changes your trajectory,
              allowing you to reach hidden or protected balloons.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Advanced players use calculated rebounds to create chain reactions, where one shot pops multiple clusters. Observe how
              your ball’s speed decreases slightly with each bounce, and plan to use walls to deflect toward dense groups of balloons.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For pro-level play, anticipate your second and third bounces before launching. When mastered, these techniques lead to
              satisfying, high-efficiency clears — essential for leaderboard domination.
            </p>
          </div>
        </section>

        <section
          id="scoring"
          className="mb-16 text-center bg-gradient-to-b from-blue-50 to-white py-12 px-6 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Maximizing Scores: Time Bonus vs. Shots Taken 💯
          </h3>
          <div className="max-w-4xl mx-auto text-left space-y-4">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Shots Taken</strong> – The fewer shots, the better.</li>
              <li><strong>Time Remaining</strong> – Faster level completions grant large time bonuses.</li>
              <li><strong>Accuracy & Chain Pops</strong> – Multi-balloon hits reward combo points.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To achieve record-breaking scores, prioritize precision and speed equally. A methodical yet quick approach yields both
              time bonuses and minimal shot penalties. Top players practice levels repeatedly to memorize ideal launch setups,
              turning seconds into huge point gains.
            </p>
          </div>
        </section>

        <section
          id="strategies"
          className="mb-16 text-center bg-gradient-to-b from-indigo-50 to-white py-12 px-6 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Advanced Level Strategies & Walkthrough Tips 🚀
          </h3>
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                Unlocking One-Shot Clearances on Hard Levels
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Among the community’s most celebrated feats is the one-shot clearance — completing a level with a single,
                perfectly calculated launch. This strategy requires patience and experimentation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Start by identifying balloon clusters and obstacle gaps, then test launch power in small increments to map the
                best trajectory. Recording your attempts or referencing community walkthroughs can save time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Once found, the one-shot clearance not only brings massive satisfaction but also the highest possible level rating —
                a must for leaderboard chasers.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                Quick Thinking: Optimal Trajectories for Scattered Balloons
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Harder stages often scatter balloons across complex patterns, demanding fast, adaptive thinking. You have only
                30 seconds to act — so efficiency is key.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Focus first on trajectory visualization: before launching, trace an imaginary line through the densest clusters
                or toward bounce-friendly walls.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Use environmental assists such as walls or moving platforms to execute trick shots. By aiming slightly off-center,
                you can initiate long ricochets that clean up multiple targets at once.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The best players train themselves to analyze patterns instantly, turning a stressful countdown into a display
                of calm precision.
              </p>
            </div>
          </div>
        </section>

        <section
          id="community"
          className="mb-16 text-center bg-gradient-to-b from-blue-50 to-white py-12 px-6 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Essential Walkthroughs and Community Trick Shots 🌐
          </h3>
          <div className="max-w-4xl mx-auto text-left space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The Thorn Ball community has built a treasure trove of walkthrough videos and trick shot compilations, showcasing
              elite strategies for the toughest levels.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Studying these resources allows new players to internalize optimal angles, timing, and physics-based rebounds.
              Platforms like YouTube, Reddit, and Discord feature ongoing discussions, where veteran players share updated
              power-angle charts and hidden shortcut techniques.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By observing community methods and adapting them to your playstyle, you’ll drastically cut down learning time
              and improve your accuracy under pressure.
            </p>
          </div>

          {/* ✅ 嵌入 YouTube Shorts 视频 */}
          <div className="mt-8 flex justify-center">
            <iframe
              width="360"
              height="640"
              src="https://youtube.com/embed/KeXQUmVqddk?si=bArUV3QJMCB9ng9C"
              title="Thorn & Balloons Level 57 – The Solution Nobody Expected! 🤯🎈"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl shadow-lg border border-gray-200"
            ></iframe>
          </div>

          <p className="mt-4 text-gray-600 text-sm italic">
            🎥 Watch this highlight: A perfect trick-shot clearance on a challenging Thorn Ball level — precision, timing, and rebound mastery in action.
          </p>
        </section>

        <section
          id="player-feedback"
          className="mb-16 text-center bg-gradient-to-b from-indigo-50 to-white py-12 px-6 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Player Feedback, Common Pain Points & FAQs 💬
          </h3>

          <div className="max-w-4xl mx-auto text-left space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                Overcoming the 30-Second Time Pressure
              </h4>
              <p className="text-gray-700 leading-relaxed">
                The 30-second timer is both thrilling and punishing. Many players report frustration at the mental pressure it creates.
                To stay composed, treat your first few seconds as setup time: identify targets, plan your launch, then commit confidently.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Practicing mindfulness and breathing control can improve your reaction under stress. With repetition, the countdown
                becomes a motivator rather than an obstacle — sharpening your reflexes and boosting efficiency.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                Solving Precise Control Difficulties and Minor Bugs
              </h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Adjust your screen sensitivity in the settings menu.</li>
                <li>Play with consistent finger placement to build muscle memory.</li>
                <li>Use a stylus if your touchscreen struggles with accuracy.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Developers have acknowledged minor input lag and trajectory misalignment bugs. Until patched, patience and recalibration
                remain your best defense.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                Addressing Difficulty Spikes and IAP/Ad Fairness
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Some players express concern over sudden difficulty spikes and perceived imbalance between free and paid users.
                While <strong>Thorn Ball</strong> remains free-to-play, in-app purchases (IAPs) like extra time or hint systems can
                tilt the challenge. To maintain fairness, focus on honing skill and level memory.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ads between levels can disrupt rhythm; many users recommend playing offline or purchasing the ad-free upgrade.
                Despite these issues, the community agrees that Thorn Ball’s deep mechanics make it one of the most rewarding
                physics puzzle games available.
              </p>
            </div>
          </div>
        </section>

        <section
          id="call-to-action"
          className="mb-16 text-center bg-gradient-to-b from-yellow-50 to-white py-12 px-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Call to Action — Ready to Master Thorn Ball? 🎯
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 mb-2">
            Mastering <strong>Thorn Ball</strong> requires a combination of precision physics understanding, fast problem-solving, and calm under pressure.
          </p>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
            By mastering launch control, optimizing trajectories, and learning from community insights, you can steadily climb the global leaderboards.
            Each bounce, each second saved, and each perfectly executed chain reaction brings you closer to true Thorn Ball mastery — where skill, not luck, defines the ultimate score.
          </p>
          
        </section>

        <section className="mb-16" id="rating">
          <Rating />
        </section>

        <section
          id="download"
          className="text-center bg-gradient-to-b from-yellow-50 to-white py-12 px-6 rounded-2xl shadow-md mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Download Thorn And Balloons 🎈
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Play <strong>Thorn and Balloons</strong> anytime, anywhere! Choose your platform below to start popping balloons now.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.funspace.balloonbounce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 fill-current"
              >
                <path d="M325.3 234.3 104.9 14.7C97.1 6.9 85.4 3.5 74.3 6.2c-11.2 2.7-19.3 10.8-22 22-2.6 11 0.7 22.8 8.5 30.6L251.1 256 60.8 446.2c-7.8 7.8-11.1 19.6-8.5 30.6 2.7 11.2 10.8 19.3 22 22 11.2 2.7 22.8-0.7 30.6-8.5l220.4-219.6 84.9 84.8c7.8 7.8 19.6 11.1 30.6 8.5 11.2-2.7 19.3-10.8 22-22 2.6-11-0.7-22.8-8.5-30.6l-99.5-99.1 99.5-99.1c7.8-7.8 11.1-19.6 8.5-30.6-2.7-11.2-10.8-19.3-22-22-11-2.6-22.8 0.7-30.6 8.5l-84.9 84.8z" />
              </svg>
              <span className="text-lg font-medium">Get it on Google Play</span>
            </a>

            {/* App Store */}
            <a
              href="https://apps.apple.com/jp/app/thorn-and-balloons/id1611756991"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-6 h-6 fill-current"
              >
                <path d="M318.7 268c-.1-36.7 16.4-64.4 50-84.8-18.8-27.2-47.1-42.3-84.8-45.2-35.6-2.8-74.2 20.7-88.1 20.7-14.4 0-46.9-19.8-72.7-19.3-37.5.6-71.9 21.8-90.9 55.6-39 67.6-10 168 27.9 223.1 18.5 27.1 40.5 57.5 69.5 56.3 27.7-1.1 38.3-17.8 72.1-17.8 33.6 0 43 17.8 72.6 17.2 29.9-.5 48.8-27.6 67.1-54.9 21.2-31.1 30-61.2 29.9-62.8-.6-.3-57.4-22-57.6-87.1zM257.3 93.2c27-32.3 24.6-61.6 23.7-71.2-23 1.3-50 15.4-65.9 34.5-17 20.3-26.9 45.3-24.9 71.3 25.3 2 48.4-11.1 67.1-34.6z"/>
              </svg>
              <span className="text-lg font-medium">Download on App Store</span>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}