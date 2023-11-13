import { useEffect, useState } from "react"
import GetAllInventoryItems from "../components/GetAllInventoryItems";

const InventoryTable = () => {
const [inventoryData,setInventoryData] = useState([]);

useEffect(() => {
    GetAllInventoryItems(setInventoryData)
    
},[]);

    return(
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-base text-gray-800 dark:text-gray-200">
                    <thead className= "text-lg text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                        <tr>
                            <th scope="col" className="py-3 px-6">Name</th>
                            <th scope="col" className="py-3 px-6">Category</th>
                            <th scope="col" className="py-3 px-6">Quantity</th>
                            <th scope="col" className="py-3 px-6">Price</th>
                            <th scope="col" className="py-3 px-6">Supplier</th>
                            <th scope="col" className="py-3 px-6">Purchase Date</th>
                            <th scope="col" className="py-3 px-6">Last Updated</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((inventory)=> (
                            <tr key={inventory.id}>
                                <td className="py-4 px-6 text-center    ">{inventory.name}</td>
                                <td className="py-4 px-6 text-center">{inventory.category}</td>
                                <td className="py-4 px-6 text-center">{inventory.quantity}</td>
                                <td className="py-4 px-6 text-center">{inventory.price}</td>
                                <td className="py-4 px-6 text-center">{inventory.supplier}</td>
                                <td className="py-4 px-6 text-center">{inventory.purchaseDate}</td>
                                <td className="py-4 px-6 text-center">{inventory.lastUpdated}</td>
                                <td className="py-4 px-6 text-center">{inventory.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}
export default InventoryTable;