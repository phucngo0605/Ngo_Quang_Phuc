
async function fetchModel(modelName, id) {
    const url = `/api/${modelName}/${id}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching model data:', error);
      throw error;
    }
  }
  
  export default fetchModel;