import { useState } from 'react';
import { useNavigate } from 'react-router';

const designations = [
  { name: 'Arun Kumar', email: 'arun@gmail.com', phone: '9876543210', city: 'Coimbatore', role: 'Manager' },
  { name: 'Priya Sharma', email: 'priya@gmail.com', phone: '7894561230', city: 'Coimbatore', role: 'Admin' },
  { name: 'John Doe', email: 'john@gmail.com', phone: '9988776655', city: 'Coimbatore', role: 'Employee' },
  { name: 'Deepak Raj', email: 'deepak@gmail.com', phone: '7788996655', city: 'Coimbatore', role: 'Admin' },
];

function Designation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const filteredDesignations = designations.filter(designation =>
    designation.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRole === '' || designation.role === selectedRole)
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6">Designation</h2>

      <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded-lg w-full sm:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="flex gap-3">
          <select
            className="border px-3 py-2 rounded-lg w-40"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">Filter by Role</option>
            <option value="Manager">Manager</option>
            <option value="Chef">Chef</option>
            <option value="Waiter">Waiter</option>
            <option value="Cashier">Cashier</option>
          </select>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => navigate('/create-designation')}
          >
            Create New
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">S.No</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Phone No</th>
              <th className="p-3 border-b">City</th>
              <th className="p-3 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredDesignations.map((des, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{des.name}</td>
                <td className="p-3">{des.email}</td>
                <td className="p-3">{des.phone}</td>
                <td className="p-3">{des.city}</td>
                <td className="p-3">{des.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-100">Previous</button>
        <button className="px-3 py-1 border rounded-lg bg-blue-600 text-white">1</button>
        <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-100">Next</button>
      </div>
    </div>
  );
}

export default Designation;
