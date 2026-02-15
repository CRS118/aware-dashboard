import React, { useState, useEffect } from 'react';
import { fetchFloodWarnings } from '../services/api';

function FloodWarnings() {
  const [floodData, setFloodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFloodData() {
      try {
        const data = await fetchFloodWarnings();
        setFloodData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load flood warnings');
        setLoading(false);
      }
    }
    
    loadFloodData();
  }, []);

  return (
    <div>
      <h2>Flood Warnings</h2>
      
      {loading && <p>Loading flood warnings...</p>}
      
      {error && <p>{error}</p>}
      
      {!loading && !error && (
        <div>
          <p>Found {floodData.length} flood warnings</p>

          <div>
            {floodData.map((warning) => (
              <div key={warning['@id']}>
                <h3>{warning.description}</h3>
                <p>Severity: {warning.severity}</p>
                <p>Area: {warning.eaAreaName}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FloodWarnings;