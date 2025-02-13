import React, { useState } from "react";
import "./App.css";
import cereal1 from "./assets/cereal1.jpg";
import cereal2 from "./assets/cereal2.jpg";
import cereal3 from "./assets/cereal3.jpg";

const cereals = [
  {
    name: "Choco Crunch",
    price: "$4.99",
    description: "A delicious chocolate-flavored cereal with a crunchy texture.",
    images: [cereal1, cereal2, cereal3],
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <Carousel images={cereals[0].images} />
        <InfoBox cereal={cereals[0]} />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Cereal Prebooking</div>
      <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </header>
  );
}

function Carousel({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="carousel">
      <img src={mainImage} alt="Cereal" className="main-image" />
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className="thumbnail"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

function InfoBox({ cereal }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="info-box">
      <p className="category">📂 Cereal Box</p>
      <h2 className="title">{cereal.name} <span className="subtitle">(Red Box)</span></h2>
      <p className="price">$19.99</p>
      <p className="payment-info">
        Pay over time for orders over <strong>$35.00</strong> with <span className="shop-pay">shop</span> <a href="#">Learn more</a>
      </p>

      <button className="compare-btn">🔄 Add to Quick Compare</button>

      <ul className="features">
        <li>✔ Limited edition collector's item</li>
        <li>✔ Authentic Trump 2024 memorabilia</li>
        <li>✔ Perfect conversation starter</li>
        <li>✔ Shipping After Election</li>
      </ul>

      <div className="quantity-box">
        <p>Quantity</p>
        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <p className="stock-status">In stock</p>
      </div>

      <button className="preorder-btn">🛒 Pre Order</button>

      <div className="payment-icons">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/MasterCard-logo.png" alt="Mastercard" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa_Logo.png" alt="Visa" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/PayPal.svg" alt="PayPal" />
      </div>

      <p className="secure-checkout">Guaranteed safe & secure checkout</p>
    </div>
  );
}


function Footer() {
  return <footer className="footer">© 2025 Cereal Prebooking. All rights reserved.</footer>;
}
