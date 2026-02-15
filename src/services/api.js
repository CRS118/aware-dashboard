const API_BASE = 'https://environment.data.gov.uk/flood-monitoring';

export async function fetchFloodWarnings() {
  try {
    const response = await fetch(`${API_BASE}/id/floods`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching flood warnings:', error);
    return [];
  }
}