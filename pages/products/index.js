import Link from "next/link";

function ProductList({ productId = 100 }) {
  return (
    <div>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>Product 3</Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
    </div>
  );
}

export default ProductList;
