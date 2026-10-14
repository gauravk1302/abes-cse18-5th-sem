import React from 'react';

const Product = ({ products }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "15px",
      padding: "20px",
      backgroundColor: "#f2f2f2"
    }}>

      {products.map((product) => (
        <div key={product.id} style={{
          border: "2px solid black",
          borderRadius: "8px",
          padding: "15px",
          textAlign: "center",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column"
        }}>

          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "contain",
              backgroundColor: "#eaf4ff"
            }}
          />

          <h3 style={{ color: "black" }}>
            {product.title}
          </h3>

          <p style={{
            color: "#555",
            fontSize: "14px",
            lineHeight: "1.4",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            flexGrow: 1
          }}>
            {product.description}
          </p>

          <h2 style={{ color: "green" }}>
            ${product.price}
          </h2>

          <p style={{
            backgroundColor: "#eeeeee",
            padding: "8px",
            borderRadius: "5px"
          }}>
            ⭐ Rating: {product.rating}
          </p>

          <button style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  );
};

export default Product;