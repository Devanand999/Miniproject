import React from 'react';
import { Users, Receipt, DollarSign, Calendar } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const DashboardCard = ({ title, value, icon: Icon, color }) => (
  <div className={`rounded-lg shadow-md p-6 text-white h-40 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
      <div className="p-3 rounded-full bg-white bg-opacity-20">
        <Icon className="text-white" size={24} />
      </div>
    </div>
  </div>
);

const salesData = [
  { name: 'Masala dosa', value: 45.8 },
  { name: 'Chicken 65', value: 8.3 },
  { name: 'Porotta', value: 8.3 },
  { name: 'Appam', value: 8.3 },
  { name: 'Ghee roast', value: 40.2 },
];

const COLORS = ['#4169E1', '#FF4500', '#FFA500', '#228B22', '#800080'];

const Dashboard = () => {
  const stats = [
    { title: 'Total Customers', value: '9', icon: Users, color: 'bg-green-500' },
    { title: 'Total Invoice', value: '3', icon: Receipt, color: 'bg-pink-500' },
    { title: 'Thursday 20, 2025', value: '20', icon: Calendar, color: 'bg-yellow-500' },
    { title: 'Total Revenue', value: '2739', icon: DollarSign, color: 'bg-teal-500' },
  ];

  return (
    <div className="">
    <div className="p-6 grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <h2 className="text-xl font-semibold mb-4">Food Average Sale per Day</h2>
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={30}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Invoices</h2>
        <input
          type="text"
          placeholder="Search..."
          className="mb-4 p-2 border rounded w-full"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Invoice Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(3)].map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-{String(index + 1).padStart(2, '0')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Customer {index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">+123456789</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{Math.floor(Math.random() * 10) + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;