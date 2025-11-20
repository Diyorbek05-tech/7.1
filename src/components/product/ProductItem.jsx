import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setEditProduct, editProduct, setEditData, cancelEdit } from "../../store/productSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { editId, editData } = useSelector(state => state.product);
  const isEditing = editId === product.id;

  const handleSave = () => {
    dispatch(editProduct({ id: product.id, data: editData }));
  };

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col md:flex-row gap-4 items-center bg-white">
      
      {isEditing ? (
        <div className="flex-1 flex flex-col gap-2">
          <input
            value={editData.name}
            onChange={(e) => dispatch(setEditData({ name: e.target.value }))}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Mahsulot nomi"
          />
          <input
            type="number"
            value={editData.price}
            onChange={(e) => dispatch(setEditData({ price: e.target.value }))}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Narxi"
          />
          <input
            type="number"
            value={editData.quantity}
            onChange={(e) => dispatch(setEditData({ quantity: e.target.value }))}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Miqdori"
          />
          <input
            value={editData.image}
            onChange={(e) => dispatch(setEditData({ image: e.target.value }))}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Rasm linki"
          />
        </div>
      ) : (
        <div className="flex-1 flex gap-4 items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-lg shadow"
          />
          <div className="flex flex-col">
            <p className="font-bold text-lg">{product.name}</p>
            <p className="text-gray-700">Narxi: ${product.price}</p>
            <p className="text-gray-700">Miqdori: {product.quantity}</p>
          </div>
        </div>
      )}

      <div className="flex gap-2 mt-2 md:mt-0">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => dispatch(cancelEdit())}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => dispatch(setEditProduct({ id: product.id, data: product }))}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteProduct(product.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
