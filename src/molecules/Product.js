import React, { useState } from "react";

function Product() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "item 1",
      description: "item 1 description will go somewhere here",
      image:
        "https://i.pinimg.com/564x/72/03/68/72036883039a3491283727d23a4adf9f.jpg",
    },
    {
      id: 2,
      name: "item 2",
      description: "item 2 description will go somewhere here",
      image:
        "https://i.pinimg.com/564x/17/cd/83/17cd83ae049294a5089593d929ed87cb.jpg",
    },
    {
      id: 3,
      name: "item 3",
      description: "item 3 description will go somewhere here",
      image:
        "https://i.pinimg.com/564x/00/b7/d0/00b7d02db4640ef0d750c9b6782452d7.jpg",
    },
  ]);

  const addToCart = () => {
    setItems([
      ...items,
      {
        id: items.length,
        name: Math.floor(Math.random() * 10) + 1,
        description: "item description will go somewhere here",
        image: "image will be here",
      },
    ]);
  };

  return (
    <div>
      {items.map((item) => (
        <div className='card' style={{ width: "15rem", color: "black" }}>
          <img class='card-img-top' src={item.image} alt='CardImage'></img>
          <div className='card-body'>
            <h2 key={item.id} className='card-title'>
              {item.name}
            </h2>
            <p className='card-text'>{item.description}</p>
            <button className='btn btn-dark' onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
