import React from "react";
import { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
}

export default function AddFood() {
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    rate: "",
    categoryName: "",
    productStatus: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Mock API call to fetch categories
    setCategories([
      { id: 1, name: "Vegetables" },
      { id: 2, name: "Fruits" },
      { id: 3, name: "Dairy" },
    ]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className=" transform translate-x-44 min-h-screen w-2/3 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Add Food</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="productName"
            placeholder="Food Name"
            value={formData.productName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            pattern="^[0-9]+$"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="rate"
            placeholder="Rate"
            value={formData.rate}
            onChange={handleChange}
            required
            pattern="^[0-9]+$"
            className="w-full p-2 border rounded"
          />
          <select
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">~~SELECT~~</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <select
            name="productStatus"
            value={formData.productStatus}
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