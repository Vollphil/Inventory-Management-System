const CreateInventorySuccesModal = ({onCreateAnother, onGoHome}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <p>Inventory Item was successfully created.</p>
                <div className="mt-4">
                    <button onClick={onCreateAnother} className="mr-2 py-2 px-4 rounded bg-blue-500 text-white">Create Another</button>
                    <button onClick={onGoHome} className="py-2 px-4 rounded bg-green-500 text-white">Go Home</button>
                </div>
            </div>
        </div>
    );

}

export default CreateInventorySuccesModal;