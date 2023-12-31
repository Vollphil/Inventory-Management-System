const GetAllInventoryItems = async (setInventoryData, sortOrder = "asc") => {
    try {
        const response = await fetch(`http://localhost:8080/inventory?sort=${sortOrder}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }
        const data = await response.json();
        setInventoryData(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
};

export default GetAllInventoryItems;
