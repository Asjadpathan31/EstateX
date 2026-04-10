import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import API from "../api/api";

function PropertyList() {

  const [properties, setProperties] = useState([]);

  // Fetch properties from backend
  useEffect(() => {

    const fetchProperties = async () => {
      try {

        const res = await API.get("/properties");

        setProperties(res.data);

      } catch (error) {

        console.error("Error fetching properties:", error);

      }
    };

    fetchProperties();

  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Featured Properties
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {properties.length > 0 ? (

          properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))

        ) : (

          <p className="text-gray-500">
            No properties found
          </p>

        )}

      </div>

    </div>
  );
}

export default PropertyList;