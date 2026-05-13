export default function Product({ name, price, image, inStock }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p style={{ color: inStock ? 'green' : 'red' }}>
        {inStock ? price : 'Ausverkauft'}
      </p>
    </div>
  );
}