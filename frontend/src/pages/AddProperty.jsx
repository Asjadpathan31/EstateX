import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function AddProperty() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    property_type: ""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("Sending Data:", formData);

    try {

      await API.post(
        "/properties/add",
        formData
      );

      alert("Property Added Successfully!");

      navigate("/properties");

    } catch (error) {

      console.log(
        "ERROR RESPONSE:",
        error.response?.data
      );

      alert("Failed to add property");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >

        <h2 className="text-2xl font-bold text-center mb-6">
          Add Property
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-4"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="property_type"
          placeholder="Property Type"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add Property
        </button>

      </form>

    </div>

  );

}

export default AddProperty;