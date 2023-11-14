

const GetInventoryItemByName =(inputValue,setInventoryData)=>{
 
    
        fetch(`http://localhost:8080/inventory/searchName?name=${inputValue}`)
        .then(response => response.json())
        .then(data => setInventoryData(data))
        .catch(error => console.error('Error',error))
    


}
export default GetInventoryItemByName;