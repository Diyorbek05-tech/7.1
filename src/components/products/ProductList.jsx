import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products } = useSelector(state => state.product);

  if (products.length === 0) return <p className="text-gray-500">Mahsulot mavjud emas</p>;

  return (
    <div className="flex flex-col gap-2">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
