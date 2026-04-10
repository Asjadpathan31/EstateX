import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="pt-24">

      {/* Background Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Find Your Dream Property
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-blue-100"
          >
            Buy, Sell or Rent properties easily with EstateX
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4"
          >

            <input
              type="text"
              placeholder="Enter location..."
              className="flex-1 px-4 py-3 border rounded-lg text-gray-700"
            />

            <select
              className="px-4 py-3 border rounded-lg text-gray-700"
            >
              <option>Property Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Search
            </button>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Hero;