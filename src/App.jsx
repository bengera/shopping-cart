import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState([
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
    {
      name: "KNU Skool VN0009QC6BT1 Col Nero Bianco",
      price: 15,
      image: "vans-2.jpg",
      id: "54d287c7-6482-481e-a4eb-eee82aab1bd4",
    },
    {
      name: "Jazzin Plush Foam Comfort Sneaker",
      price: 24.99,
      image: "rocket.jpg",
      id: "e7427267-d319-4061-96ae-3e65f87c3cfd",
    },
    {
      name: "WARD V CANVAS VN0A4BUD, Trainers Unisex Kids",
      price: 20,
      image: "vans-3.jpg",
      id: "7ed11f80-36aa-4002-a0ba-ac22a386aaf3",
    },
  ]);

  function handleAddToCart(item) {
    // if (cartItems.length > 4) window.alert("Shopping cart is full"); // limit cart size

    setCartItems((cartItems) => {
      const updatedCart = [...cartItems, item];
      return updatedCart;
    });
  }

  return (
    <>
      <h1>Buy Sneakers Today</h1>
      <div className="App">
        <Products
          productList={productList}
          setProductList={setProductList}
          handleAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
        <Cart cartItems={cartItems} />
      </div>
    </>
  );
}

function Products({ productList, handleAddToCart, cartItems }) {
  const cartNumItems = cartItems.length;
  return (
    <>
      {productList.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="image" />
          <h2 className="item">{item.name}</h2>
          <div className="price-content">
            {item.price <= 15 ? (
              <p className="price discount">£{item.price}</p>
            ) : (
              <p className="price">£{item.price}</p>
            )}
            {item.price <= 15 ? <small>Discounted ❗</small> : ""}
          </div>

          <button onClick={() => handleAddToCart(item)} type="button">
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
}

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h3>My Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <li>{item.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;

// Men's Ward Sneaker
