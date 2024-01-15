import useFetch from "./useFetch";
import Products from "./Products";

const PrintProduct = () => {
  const { error, isPending, data: products } = useFetch('http://localhost:9090/products')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { products && <Products products={products} /> }
    </div>
  );
}

export default PrintProduct;