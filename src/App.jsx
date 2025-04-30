import { useState } from "react";

const data = [
  {
    name: "Skechers Men's Uno Stand on Air Sneaker",
    price: 19.99,
    image: "sketchers.jpg",
    id: "0c74664f-9c77-40fe-ae8c-6b9ff69044f8",
  },
  {
    name: "Unisex's Rebound V6 Sneaker",
    price: 30,
    image: "puma.jpg",
    id: "f8899973-7ce4-4c4b-8b02-6054eb01391e",
  },
  {
    name: "Men's Caldrone Low-top Sneaker",
    price: 25,
    image: "vans.jpg",
    id: "959f3321-330f-401a-9976-3f34ed310548",
  },
];

function App() {
  const [productList, setProductList] = useState(data);
  return (
    <div className="App">
      {productList.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="image" />
          <h2 className="item">{item.name}</h2>
          <p className="price">{item.price}</p>
          <button type="button">Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;

// Men's Ward Sneaker
