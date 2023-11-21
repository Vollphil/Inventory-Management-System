import { useEffect, useState } from "react"
import GetAllInventoryItems from "../components/GetAllInventoryItems";
import GetInventoryItemByName from "../components/GetInvenoryItemByName";
import UpdateInventoryModal from "../components/UpdateInventoryModal";
import DeletePopUpModal from "../components/DeletePopUpModal";

const InventoryTable = () => {
const [inventoryData,setInventoryData] = useState([]);
const [showUpdateModal, setShowUpdateModal] = useState(false);
const [showDeleteModal,setShowDeleteModal]=useState(false);
const [selectedItem, setSelectedItem] = useState(null);
const [sortOrder, setSortOrder] = useState("asc");
const [currentSearchQuery, setCurrentSearchQuery] = useState("");

const fetchInventoryData = (sortOrder = 'asc') => {
    console.log("Fetching inventory data with sort order:", sortOrder);
    GetAllInventoryItems(setInventoryData, sortOrder);
};

useEffect(() => {
    fetchInventoryData()
    
},[]);

const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setShowUpdateModal(true);
}
const handleDeleteClick =(item) =>{
    console.log("Delete clicked for item: ", item);
    setSelectedItem(item);
    setShowDeleteModal(true);
}

const handleNameSearch= (event) => {
    const query = event.target.value;
    setCurrentSearchQuery(query);
    if(query.length >= 2){
    GetInventoryItemByName(query,setInventoryData, sortOrder);
    }else{
        GetAllInventoryItems(setInventoryData);
    }
}
const handleSortToggle = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    console.log("New sort order:", newSortOrder);
    if (currentSearchQuery) {
        GetInventoryItemByName(currentSearchQuery, setInventoryData, newSortOrder);
    } else {
        GetAllInventoryItems(setInventoryData, newSortOrder);
    }
};

    return(
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                <div className="space-x-4">
                 <span className="text-lg font-medium ">
                      Search for Inventory Name:
                  </span>
                <input type="text" onChange={handleNameSearch} placeholder="Search Inventory" className=" px-4 py-2 border border-grey-300 rounded-lg text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400 w-full sm:w-auto"></input>
                </div>
                
                <button type="button"  onClick={handleSortToggle} className="py-2 px-4 rounded bg-red-500 text-white">Cancel</button>
                <table className="border-separate border border-slate-400 w-full text-base text-gray-800 dark:text-gray-200">
                    <thead className= "text-lg text-gray-900 uppercase bg-indigo-50 dark:bg-gray-700 dark:text-gray-200">
                        <tr>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6" onClick={handleSortToggle}>Name</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Category</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Quantity</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Price</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Supplier</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Purchase Date</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Last Updated</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Status</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Update</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((inventory)=> (
                            <tr key={inventory.id}>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center">{inventory.name}</td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center">{inventory.category}</td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center">{inventory.quantity}</td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center">{inventory.price}</td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center">{inventory.supplier}</td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center">{inventory.purchaseDate}</td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center">{inventory.lastUpdated}</td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center">{inventory.status}</td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center"><button type ="button" onClick={() => handleUpdateClick(inventory)} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button></td>
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center"><button type="button" onClick={() => handleDeleteClick(inventory)} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showUpdateModal && selectedItem && (
            <UpdateInventoryModal 
                item={selectedItem} 
                onCancel={() => setShowUpdateModal(false)}
                onSuccess={fetchInventoryData}
            />
        )}
        {showDeleteModal && selectedItem && (
        <DeletePopUpModal
         id={selectedItem.id}
         onCancel={() => setShowDeleteModal(false)}
         onSuccess={fetchInventoryData}
         />
        )}
            </div>
    )
}
export default InventoryTable;