const PatchInventoryItem= async(id,updateFields) => {
    try{
        console.log("Update Fields: ", updateFields);
        console.log("Id: ", id);

        const response = await fetch(`http://localhost:8080/inventory/updateItem/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
            
            },
            body: JSON.stringify(updateFields)
            
        });
        if(!response.ok){
            const errorResponse = await response.text();
            throw new Error(`HTTP error! Status ${response.status} Body: ${errorResponse}`);
            
        }   
        return await response.json();
    }catch(error){
        console.error('There was a problem with the fetch operation: ', error.message)
        return error.message; 
    }
}
export default PatchInventoryItem;