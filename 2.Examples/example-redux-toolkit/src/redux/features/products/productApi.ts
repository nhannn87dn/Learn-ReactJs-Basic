export const fetchData = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!response.ok) {
      throw new Error("Server error");
    }
    const data = await response.json();
    console.log("<<=== 🚀fetchData  ===>>", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch products", error);
    throw error;
  }
};
