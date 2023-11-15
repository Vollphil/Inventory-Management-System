const PostInventoryItem = (inventoryName,inventoryCategory,inventoryQuantity,inventoryPrice,inventorySupplier,inventoryStatus) =>{
    return fetch("http://localhost:8080/createItem",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({name: inventoryName,
            category:inventoryCategory,
            quantity:inventoryQuantity,
            price: inventoryPrice,
            supplier:inventorySupplier,
            status: inventoryStatus})
    }).then((res) => res.json());

}
export default PostInventoryItem;