import { useState } from 'react';
import { useNavigate } from 'react-router';


const branches = [
  { name: 'Gandhipuram', address: '7a, Vadavalli, Cbe', manager: 'Arun kumar', employees: 100, industry: 'Restaurant' },
  { name: 'Vadavalli', address: '7a, Vadavalli, Cbe', manager: 'Arun kumar', employees: 180, industry: 'Cafe' },
  { name: 'RS Puram', address: '7a, Vadavalli, Cbe', manager: 'Arun kumar', employees: 140, industry: 'Cafe' },
  { name: 'Townhall', address: '7a, Vadavalli, Cbe', manager: 'Arun kumar', employees: 100, industry: 'Restaurant' },
  { name: 'Arun Kumar', address: '7a, Vadavalli, Cbe', manager: 'Arun kumar', employees: 180, industry: 'Restaurant' },
  { name: 'Arun Kumar', address: '7a, Vadavalli, Cbe', manager: 'Arun kumar', employees: 140, industry: 'Sweet Shop' },
];

function Branch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('');
  const navigate = useNavigate();

  const filteredBranches = branches.filter(branch =>
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterIndustry === '' || branch.industry === filterIndustry)
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Branch</h2>

     {/* Top Controls */}
<div className="flex flex-wrap items-center gap-3 mb-4">
  {/* Search input (left) */}
  <input
    type="text"
    placeholder="Search..."
    className="border px-3 py-2 rounded-lg w-full sm:w-64"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  {/* Right side controls */}
  <div className="ml-auto flex items-center gap-3">
    <select
      className="border px-3 py-2 rounded-lg w-40"
      value={filterIndustry}
      onChange={(e) => setFilterIndustry(e.target.value)}
    >
      <option value="">Filter</option>
      <option value="Restaurant">Restaurant</option>
      <option value="Cafe">Cafe</option>
      <option value="Sweet Shop">Sweet Shop</option>
    </select>

    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700" 
    onClick={() => navigate('/create-branch')}>
      Create New
    </button>
  </div>
</div>


      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">S.No</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Address</th>
              <th className="p-3 border-b">Manager Name</th>
              <th className="p-3 border-b">No Employee</th>
              <th className="p-3 border-b">Industries</th>
            </tr>
          </thead>
          <tbody>
            {filteredBranches.map((branch, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{branch.name}</td>
                <td className="p-3">{branch.address}</td>
                <td className="p-3">{branch.manager}</td>
                <td className="p-3">{branch.employees}</td>
                <td className="p-3">{branch.industry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2 mt-4">
        <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-100">Previous</button>
        <button className="px-3 py-1 border rounded-lg bg-blue-600 text-white">1</button>
        <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-100">Next</button>
      </div>
    </div>
  );
}

export default Branch;
