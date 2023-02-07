import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>&nbsp;&nbsp;
      <Link href="/docs">Docs</Link>&nbsp;&nbsp;
      <Link href="/houses">Houses</Link>&nbsp;&nbsp;
      <Link href="/product">Products</Link>&nbsp;&nbsp;
      <Link href="/profile">Profile</Link>&nbsp;&nbsp;
      <Link href="/about">About</Link>&nbsp;&nbsp;
    </div>
  );
}

export default Home;
