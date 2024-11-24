export const apiFetch = async (url, method, body = null) => {
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : null,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
  
      return data;
    } catch (error) {
      console.error("API Error:", error.message);
      throw error;
    }
};
  