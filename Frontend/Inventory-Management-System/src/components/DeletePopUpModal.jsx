import DeleteInventoryItem from "./DeleteInventoryItem";
import PropTypes from 'prop-types';
const DeletePopUpModal = ({id,onCancel,onSuccess}) => {

    DeletePopUpModal.propTypes = {
        id: PropTypes.number.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSuccess: PropTypes.func.isRequired
    }

    const handleCancel = () => {
        onCancel();
    }

    const handleDelete =(e) => {
        e.preventDefault()
            DeleteInventoryItem(id)
            .then(() => {
                if(onSuccess){
                    onSuccess();
                }
                onCancel();
            })
            .catch((error) => {
                console.error('Error delete inventory item', error.message)
            })
    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <p>Are you sure you want to Delete this Item</p>
                <div className="mt-4">
                    <button type ="submit" onClick={handleDelete} className="mr-2 py-2 px-4 rounded bg-blue-500 text-white">Delete</button>
                    <button type="button"  onClick={handleCancel} className="py-2 px-4 rounded bg-red-500 text-white">Cancel</button>
                   
                </div>
            </div>

        </div>
    )
}
export default DeletePopUpModal;