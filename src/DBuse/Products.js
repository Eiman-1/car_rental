

const Products = ({ products }) => {
  return (
    <div >
      {products.map(p => (
        <div  key={p.id} >
            <h2>{ p.name }</h2>
            <p>Quantity:{ p.quantity }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Products;