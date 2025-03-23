import React from "react";
import { useState } from "react";

export default function AddTestCategory() {
  const [formData, setFormData] = useState({
    categoriesName: "",
    categoriesStatus: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="transform translate-x-44 min-h-screen w-2/3 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Add Test Categories</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="categoriesName"
            placeholder="Categories Name"
            value={formData.categoriesName}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z]+$"
            className="w-full p-2 border rounded"
          />
          <select
            name="categoriesStatus"
            value={formData.categoriesStatus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">~~SELECT~~</option>
            <option value="1">Available</option>
            <option value="2">Not Available</option>
          </select>
          <button
            type="submit"
            className="w-1/8 bg-green-700 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}