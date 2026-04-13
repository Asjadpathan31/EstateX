function PropertyCard({ property }) {

  return (

    <div className="bg-white shadow-md rounded-xl p-6">

      <h3 className="text-xl font-bold mb-2">
        {property.title}
      </h3>

      <p className="text-gray-600 mb-2">
        {property.description}
      </p>

      <p className="font-semibold text-blue-600 mb-2">
        ₹ {property.price}
      </p>

      <p className="text-sm text-gray-500 mb-1">
        📍 {property.location}
      </p>

      <p className="text-sm text-gray-500">
        🏠 {property.property_type}
      </p>

    </div>

  );

}

export default PropertyCard;