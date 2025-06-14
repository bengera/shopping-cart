import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState([
    {
      name: "Skechers Men's Uno Stand on Air Sneaker",
      price: 40,
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
      price: 30,
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
    const checkDuplicate = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );

    if (checkDuplicate) {
      window.alert("This item is already in your cart");
      return;
    }

    if (cartItems.length > 4) {
      window.alert("Shopping cart is full");
      return;
    }

    setCartItems((cartItems) => {
      const updatedCart = [...cartItems, item];
      return updatedCart;
    });
  }

  function handleDeleteItem(id) {
    console.log(id);
    setCartItems((cartItems) =>
      cartItems.filter((cartItem) => cartItem.id !== id)
    );
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
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </>
  );
}

function Products({ productList, handleAddToCart }) {
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

function Cart({ cartItems, setCartItems, handleDeleteItem }) {
  const [quantities, setQuantities] = useState({});
  const totalCost = cartItems.reduce((acc, item) => {
    const quantity = quantities[item.id] || 1;
    return acc + item.price * quantity;
  }, 0);

  function handleIncrease(itemId) {
    const currentQuantity = quantities[itemId] || 1;
    const newVal = currentQuantity + 1;
    setQuantities({ ...quantities, [itemId]: newVal });
  }

  function handleDecrease(itemId) {
    const currentQuantity = quantities[itemId] || 1;
    const newVal = currentQuantity - 1;
    setQuantities({ ...quantities, [itemId]: newVal });
  }

  return (
    <div className="cart">
      <button onClick={() => setCartItems([])} className="img-bin"></button>
      <h3>My Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <li>{item.name}</li>
            <p className="cart-price">£{item.price}</p>

            <div className="cart-quantity-container">
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="cart-btn-delete"
              >
                X
              </button>
              <button
                className="btn-cart-quantity"
                onClick={() => handleDecrease(item.id)}
              >
                -
              </button>
              <input
                type="text"
                value={quantities[item.id] || 1}
                min="1"
                onChange={(e) =>
                  setQuantities({
                    ...quantities,
                    [item.id]: Number(e.target.value),
                  })
                }
              />
              <button
                className="btn-cart-quantity"
                onClick={() => handleIncrease(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </ul>
      {cartItems.length > 0 ? <h3>Total: £{totalCost}</h3> : null}
      {!!cartItems.length && ( // makes boolean out of falsy values
        <button className="btn-checkout">
          {"Proceed to checkout".toUpperCase()}
        </button>
      )}
    </div>
  );
}

export default App;
