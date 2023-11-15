import { useState } from "react";
import PostInventoryItem from "../components/PostInventoryItem";

const CreateInventoryItem = () => {
const [inventoryName,setInventoryName] = useState("");
const [inventoryCategory, setInventoryCategory] = useState('');
const [inventoryQuantity, setInventoryQuantity] = useState(0);
const [inventoryPrice, setInventoryPrice] = useState(0.0);
const [inventorySupplier, setInventorySupplier] = useState('');
const [inventoryStatus, setInventoryStatus] = useState('AVAILABLE');


const handleStatusChange = (event) => {
    setInventoryStatus(event.target.value);
};

const handleSubmit =(e) => {
    e.preventDefault()
    PostInventoryItem(inventoryName,inventoryCategory,inventoryQuantity,inventoryPrice,inventorySupplier,inventoryStatus);
}
    return(
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <h1 className="text-2xl font-bold text-center mb-6">Create a new Inventory Item</h1>
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Name</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={inventoryName}
                    type="text"
                    placeholder="Inventory Name"
                    onChange={(e) => setInventoryName(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Category</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={inventoryCategory}
                    type="text"
                    placeholder="Inventory Category"
                    onChange={(e) => setInventoryCategory(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Quantity</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={inventoryQuantity}
                    type="number"
                    onChange={(e) => setInventoryQuantity(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Price</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={inventoryPrice}
                    type="number"
                    onChange={(e) => setInventoryPrice(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Supplier</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={inventorySupplier}
                    type="text"
                    placeholder="Inventory Supplier"
                    onChange={(e) => setInventorySupplier(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Status</label>
                <select
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={inventoryStatus}
                    onChange={handleStatusChange}
                >
                    <option value="AVAILABLE">Available</option>
                    <option value="OUT_OF_STOCK">Out of Stock</option>
                    <option value="DISCONTINUED">Discontinued</option>
                </select>
            </div>
            <button
            
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
            >
                Create
            </button>
        </div>
    </div>
    )
}
export default CreateInventoryItem;