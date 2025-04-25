import { useState } from 'react';
import { useNavigate } from 'react-router';

function CreateDesignation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  
  const navigate = useNavigate();

  const handleCreate = () => {
    const newDesignation = {
      name,
      email,
      phone,
      city
    };
    console.log('Created Designation:', newDesignation);

    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Create Designation</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="border px-4 py-3 rounded-lg w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-3 rounded-lg w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone No"
          className="border px-4 py-3 rounded-lg w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          className="border px-4 py-3 rounded-lg w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Create
        </button>

        <button
          onClick={() => navigate('/designation')}
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CreateDesignation;
