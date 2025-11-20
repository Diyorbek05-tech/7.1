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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="name"
        placeholder="Mahsulot nomi"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="price"
        type="number"
        placeholder="Narxi"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="quantity"
        type="number"
        placeholder="Miqdori"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="image"
        placeholder="Rasm linki"
        className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Qo'shish
      </button>
    </form>
  );
};

export default AddProduct;
