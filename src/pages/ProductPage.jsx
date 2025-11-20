import AddProduct from "../components/product/AddProduct";
import ProductList from "../components/product/ProductList";

const ProductPage = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Products CRUD</h1>
      
      <div className="mb-6">
        <AddProduct />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPage;
