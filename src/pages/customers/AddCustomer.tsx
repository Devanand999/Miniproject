import React from "react";
import { useState } from "react";

export default function AddCustomer() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    mob_no: "",
    reffering: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="transform translate-x-44 min-h-screen w-2/3 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md ">
        <h2 className="text-xl font-bold text-center mb-4">Add Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
           
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="mob_no"
            placeholder="Mobile No"
            value={formData.mob_no}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="reffering"
            placeholder="Reffering"
            value={formData.reffering}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded h-24"
          />
          <button
            type="submit"
            className="w-1/8 bg-green-700 text-white p-2 rounded "    
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
