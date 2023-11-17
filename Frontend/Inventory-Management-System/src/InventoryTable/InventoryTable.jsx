import { useEffect, useState } from "react"
import GetAllInventoryItems from "../components/GetAllInventoryItems";
import GetInventoryItemByName from "../components/GetInvenoryItemByName";
import UpdateInventoryModal from "../components/UpdateInventoryModal";
const InventoryTable = () => {
const [inventoryData,setInventoryData] = useState([]);
const [showUpdateModal, setShowUpdateModal] = useState(false);
const [selectedItemForUpdate, setSelectedItemForUpdate] = useState(null);

const fetchInventoryData = () => {
    GetAllInventoryItems(setInventoryData);
};


useEffect(() => {
    fetchInventoryData()
    
},[]);

const handleUpdateClick = (item) => {
    setSelectedItemForUpdate(item);
    setShowUpdateModal(true);
}


const handleNameSearch= (event) => {
    const query = event.target.value;
    if(query.length >= 2){
    GetInventoryItemByName(query,setInventoryData);
    }else{
        GetAllInventoryItems(setInventoryData);
    }
}

    return(
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                <div className="space-x-4">
                 <span className="text-lg font-medium ">
                      Search for Inventory Name:
                  </span>
                <input type="text" onChange={handleNameSearch} placeholder="Search Inventory" className=" px-4 py-2 border border-grey-300 rounded-lg text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400 w-full sm:w-auto"></input>
                </div>
                <table className="border-separate border border-slate-400 w-full text-base text-gray-800 dark:text-gray-200">
                    <thead className= "text-lg text-gray-900 uppercase bg-indigo-50 dark:bg-gray-700 dark:text-gray-200">
                        <tr>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Name</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Category</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Quantity</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Price</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Supplier</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Purchase Date</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Last Updated</th>
                            <th scope="col" className="border-separate border border-slate-400 py-3 px-6">Status</th>
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
                                <td className="border-separate border border-slate-400 py-4 px-6 text-center"><button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showUpdateModal && selectedItemForUpdate && (
            <UpdateInventoryModal 
                item={selectedItemForUpdate} 
                onCancel={() => setShowUpdateModal(false)}
                onUpdated={fetchInventoryData}
            />
        )}
            </div>
    )
}
export default InventoryTable;