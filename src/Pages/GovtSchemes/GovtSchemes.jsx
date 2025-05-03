
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SchemeFilter = () => {
  const [schemes, setSchemes] = useState([]);
  const [filter, setFilter] = useState({ State: '', Category: '', Department: '' });

  useEffect(() => {
    fetchSchemes();
  }, [filter]);

  const fetchSchemes = async () => {
    const query = new URLSearchParams(filter).toString();
    const res = await axios.get(`http://localhost:5000/api/schemes?${query}`);
    setSchemes(res.data);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Find Government Agriculture Schemes</h2>
      <div className="flex gap-4 mb-4">
        <input type="text" placeholder="State" value={filter.State}
          onChange={(e) => setFilter({ ...filter, State: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="Category" value={filter.Category}
          onChange={(e) => setFilter({ ...filter, Category: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="Department" value={filter.Department}
          onChange={(e) => setFilter({ ...filter, Department: e.target.value })} className="p-2 border rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schemes.map((scheme, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{scheme.Name || 'Unnamed Scheme'}</h3>
            <p><strong>State:</strong> {scheme.State}</p>
            <p><strong>Category:</strong> {scheme.Category}</p>
            <p><strong>Department:</strong> {scheme.Department}</p>
            <p><strong>Description:</strong> {scheme.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemeFilter;