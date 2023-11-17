import { useState } from "react"
import PatchInventoryItem from "./PatchInventoryItem";
import PropTypes from 'prop-types';


  const UpdateInventoryModal = ({item,onCancel,onUpdated}) => {
    const [updateName,setUpdateName] = useState(item.name);
    const [updateCategory,setUpdateCategory] = useState(item.category);
    const [updateQuantity, setUpdateQuantity] = useState(item.quantity);
    const [updatePrice, setUpdatePrice] = useState(item.price);
    const [updateSupplier,setUpdateSupllier] = useState(item.supplier);
    const [updateStatus, setUpdateStatus] = useState(item.status);
    


    UpdateInventoryModal.propTypes = {
        item: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          supplier: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
        }).isRequired,
        onCancel: PropTypes.func.isRequired,
        onUpdated: PropTypes.func.isRequired
      };

    const handleCancel = () => {
        onCancel();
    }
    const handleStatusChange = (event) => {
        setUpdateStatus(event.target.value);
    };
    
    const handleSubmit = (e) => {
        
         e.preventDefault()
         
         const updatedFields = {
            name: updateName,
            category: updateCategory,
            quantity: updateQuantity,
            price: updatePrice,
            supplier: updateSupplier,
            status: updateStatus
        };   
         PatchInventoryItem(item.id, updatedFields)
        .then(() => {
            if(onUpdated){
                onUpdated();
            }
                                onCancel();
        })
        .catch((error) => {
            console.error('Error updating inventory item ', error.message)
        })
    }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
         <form onSubmit={handleSubmit} className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <h1 className="text-2xl font-bold text-center mb-6">Create a new Inventory Item</h1>
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Name</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={updateName}
                    type="text"
                    placeholder="Inventory Name"
                    onChange={(e) => setUpdateName(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Category</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={updateCategory}
                    type="text"
                    placeholder="Inventory Category"
                    onChange={(e) => setUpdateCategory(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Quantity</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={updateQuantity}
                    type="number"
                    onChange={(e) => setUpdateQuantity(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Price</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={updatePrice}
                    type="number"
                    onChange={(e) => setUpdatePrice(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Supplier</label>
                <input
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={updateSupplier}
                    type="text"
                    placeholder="Inventory Supplier"
                    onChange={(e) => setUpdateSupllier(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Inventory Status</label>
                <select
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={updateStatus}
                    onChange={handleStatusChange}
                >
                    <option value="AVAILABLE">Available</option>
                    <option value="OUT_OF_STOCK">Out of Stock</option>
                    <option value="DISCONTINUED">Discontinued</option>
                </select>
                </div>
            
           
                
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               Update
            </button>
            <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleCancel}>
               Cancel
            </button>
           
    
    </div>
    </form>
        </div>
    )

}
export default UpdateInventoryModal;