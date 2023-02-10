import Link from "next/link";

function ProductsList({ productsapi }) {
  return (
    <>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h1>List of Products</h1>
      {productsapi.map((productapi) => {
        return (
          <div key={productapi.id}>
            <h2>
              {productapi.id} {productapi.title} {productapi.description}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ProductsList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/productsapi");
  const data = await response.json();

  return {
    props: {
      productsapi: data,
    },
  };
}
