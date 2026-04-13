import { useEffect, useState } from "react";
import API from "../api/api";
import PropertyCard from "./PropertyCard";

function PropertyList() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {

    fetchProperties();

  }, []);

  const fetchProperties = async () => {

    try {

      const res = await API.get("/properties/");

      setProperties(res.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="grid md:grid-cols-3 gap-6 p-8">

      {properties.map((property) => (

        <PropertyCard
          key={property.id}
          property={property}
        />

      ))}

    </div>

  );

}

export default PropertyList;