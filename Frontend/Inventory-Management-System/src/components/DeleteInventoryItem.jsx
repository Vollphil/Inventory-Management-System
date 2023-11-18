const DeleteInventoryItem = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/inventory/deleteItem/${id}`, {
            method: 'DELETE'
        });

        
        if (!response.ok) {
            const errorResponse = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}, Body: ${errorResponse}`);
        }

        
        if (response.status !== 204) {
            return await response.text();
        } else {
            return null; 
        }
    } catch (error) {
        console.error('Error deleting inventory item: ', error.message);
        throw error; 
    }
};
export default DeleteInventoryItem;
