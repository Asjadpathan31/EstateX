import { motion } from "framer-motion";

function PropertyCard({ property }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
        alt="property"
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="p-4">

        <h2 className="text-xl font-bold text-gray-800">
          {property.title}
        </h2>

        <p className="text-gray-500 mt-1">
          📍 {property.location}
        </p>

        <p className="text-blue-600 font-bold mt-2 text-lg">
          ₹ {property.price}
        </p>

        <p className="text-gray-600 mt-2">
          {property.description}
        </p>

      </div>

    </motion.div>
  );
}

export default PropertyCard;