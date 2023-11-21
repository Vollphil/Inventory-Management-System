const GetInventoryItemByName = (inputValue, setInventoryData, sortOrder) => {
        fetch(`http://localhost:8080/inventory/searchName?name=${inputValue}&sort=${sortOrder}`)
        .then(response => response.json())
        .then(data => setInventoryData(data))
        .catch(error => console.error('Error:', error));
    }
    
    export default GetInventoryItemByName;
    