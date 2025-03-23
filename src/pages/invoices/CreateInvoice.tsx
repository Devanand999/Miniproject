import React from "react";
import { useState, useEffect } from "react";

const InvoiceForm = () => {
  const [invoice, setInvoice] = useState({
    invoiceNo: "",
    invoiceDate: "",
    customerName: "",
    contactNo: "",
    items: [],
    discount: "",
    gst: 18,
    paidAmount: "",
    paymentType: "",
    paymentStatus: "",
    paymentPlace: "",
  });

  useEffect(() => {
    
    
   
    const today = new Date().toISOString().split("T")[0];
    setInvoice((prev) => ({ ...prev,  invoiceDate: today }));
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 gap-4">
      <div>
          <label className="block text-sm font-medium">Invoice No</label>
          <input type="text" className="w-full border rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Invoice Date</label>
          <input
            type="date"
            value={invoice.invoiceDate}
            readOnly
            className="w-full border rounded-md p-2 bg-gray-100"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Customer Name</label>
        <select className="w-full border rounded-md p-2">
          <option>--SELECT--</option>
        </select>
      </div>

      <div className="mt-4 border-t pt-4">
        <h3 className="font-semibold">Food</h3>
        <div className="grid grid-cols-4 gap-2 items-center">
          <select className="border rounded-md p-2">
            <option>--SELECT--</option>
          </select>
          <input type="text" placeholder="Rate" className="border rounded-md p-2" />
          <input type="text" placeholder="Quantity" className="border rounded-md p-2" />
          <input type="text" placeholder="Total" className="border rounded-md p-2 bg-gray-100" readOnly />
        </div>
      </div>

      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">+</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">🗑</button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Sub Amount</label>
          <input type="text" className="w-full border rounded-md p-2 bg-gray-100" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium">Total Amount</label>
          <input type="text" className="w-full border rounded-md p-2 bg-gray-100" readOnly />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Discount</label>
          <input type="text" className="w-full border rounded-md p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Grand Total</label>
          <input type="text" className="w-full border rounded-md p-2 bg-gray-100" readOnly />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">GST 18%</label>
          <input type="text" className="w-full border rounded-md p-2 bg-gray-100" readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium">Paid Amount</label>
          <input type="text" className="w-full border rounded-md p-2" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Payment Type</label>
          <select className="w-full border rounded-md p-2">
            <option>--SELECT--</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Payment Place</label>
          <select className="w-full border rounded-md p-2">
            <option>--SELECT--</option>
          </select>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <button className="w-1/8 bg-green-700 text-white p-2 rounded">Submit</button>
        <button className="w-1/8 bg-red-600 text-white p-2 rounded">Reset</button>
      </div>
    </div>
  );
};

export default InvoiceForm;