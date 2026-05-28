export default function Product({ name, image, lagerBestand, onWareneingang, onWarenausgang }) {
  return (
    <div className="product">
        <h2>{name}</h2>
        <img src={image} alt={name} style={{ height: '200px' }} />
        <p>Lagerbestand: {lagerBestand}</p>
        
        <button style={{ backgroundColor: 'green' }} onClick={onWareneingang}>
           Wareneingang (+1) 
        </button>
        <button style={{ backgroundColor: 'red' }} onClick={onWarenausgang}>
           Warenausgang (-1) 
        </button>
        <br />
        <br />
        
    </div>
  );
}