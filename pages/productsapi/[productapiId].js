import { useRouter } from "next/router";

function Product({ productapi }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>
        {productapi.id} {productapi.title} {productapi.price}
      </h2>
      <p>{productapi.description}</p>
      <hr />
    </div>
  );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/productsapi/${params.productapiId}`
  );
  const data = await response.json();

  return {
    props: {
      productapi: data,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productapiId: "1" } }],
    fallback: true,
  };
}
