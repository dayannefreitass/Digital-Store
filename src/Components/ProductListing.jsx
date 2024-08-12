const ProductListing = ({ products }) => {
    return (
      <div className="product-listing">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        ))}
      </div>
    );
  };
  