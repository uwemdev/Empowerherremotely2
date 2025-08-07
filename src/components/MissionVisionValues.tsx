 const MissionVisionValues = () => {
  return (
    <section className="flex flex-wrap justify-center gap-10 px-5 py-16 bg-gray-100">
      <div className="w-full max-w-sm text-center p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <img
          src="https://img.icons8.com/ios-filled/100/goal.png"
          alt="Mission Icon"
          className="w-20 h-20 mx-auto mb-4 hover:brightness-90 transition"
        />
        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-700 transition">
          <span className="text-gray-500 font-normal">OUR</span> MISSION
        </h3>
        <p className="text-sm text-gray-600 hover:text-gray-800 transition">
          To equip women—especially those in underserved and underrepresented communities—with the knowledge, tools, and network they need to thrive in the global remote economy.
        </p>
      </div>

      <div className="w-full max-w-sm text-center p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <img
          src="https://img.icons8.com/ios-filled/100/sun--v1.png"
          alt="Vision Icon"
          className="w-20 h-20 mx-auto mb-4 hover:brightness-90 transition"
        />
        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-700 transition">
          <span className="text-gray-500 font-normal">OUR</span> VISION
        </h3>
        <p className="text-sm text-gray-600 hover:text-gray-800 transition">
          A world where every woman has the freedom, flexibility, and financial stability that remote work can offer—regardless of her background or location.
        </p>
      </div>

      <div className="w-full max-w-sm text-center p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <img
          src="https://img.icons8.com/ios-filled/100/prize.png"
          alt="Values Icon"
          className="w-20 h-20 mx-auto mb-4 hover:brightness-90 transition"
        />
        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-700 transition">
          <span className="text-gray-500 font-normal">OUR</span> VALUES
        </h3>
        <p className="text-sm text-gray-600 hover:text-gray-800 transition">
          We believe in inclusion, integrity, and impact. We are committed to uplifting women with respect, empathy, and transparency—fostering a community where everyone is empowered to grow, lead, and succeed remotely.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionValues;
