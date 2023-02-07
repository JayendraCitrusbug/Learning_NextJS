import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing the order !");
    router.push("/product")
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>&nbsp;&nbsp;
      <Link href="/docs">Docs</Link>&nbsp;&nbsp;
      <Link href="/houses">Houses</Link>&nbsp;&nbsp;
      <Link href="/product">Products</Link>&nbsp;&nbsp;
      <button onClick={handleClick}>Place Order</button>&nbsp;&nbsp;
      <Link href="/profile">Profile</Link>&nbsp;&nbsp;
      <Link href="/about">About</Link>&nbsp;&nbsp;
    </div>
  );
}

export default Home;
