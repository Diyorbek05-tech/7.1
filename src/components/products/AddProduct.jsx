import { useDispatch } from "react-redux";
import { addProduct } from "../../store/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      price: form.price.value,
      quantity: form.quantity.value,
      image: form.image.value,
    };
    dispatch(addProduct(data));
    form.reset();
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Mahsulot qo'shish</h2>
      <input
        name="name"
        placeholder="Mahsulot nomi"
        className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
      />
      <input
        name="price"
        type="number"
        placeholder="Narxi"
        className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
      />
      <input
        name="quantity"
        type="number"
        placeholder="Miqdori"
        className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
      />
      <input
        name="image"
        placeholder="Rasm linki"
        className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition font-semibold shadow-md"
      >
        Qo'shish
      </button>
    </form>
  );
};

export default AddProduct;
