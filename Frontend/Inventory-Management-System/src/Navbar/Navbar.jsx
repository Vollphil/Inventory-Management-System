import { Link } from "react-router-dom";
const Navbar = () => {



    return(
    
        <nav className="bg-indigo-700 shadow-lg">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-3xl font-bold p-3">INVENTORY MANAGEMENT SYSTEM</Link>
                <ul className="text-gray-400 text-xl">
                    <li className="inline-block">
                    <Link to="/createInventory" className="p-3 hover:text-white">Create Inventory</Link>
                    </li>
                    {/* Add other list items here */}
                </ul>
            </div>
        </div>
    </nav>

    
    )
}
export default Navbar;