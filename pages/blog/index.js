import Post from "@/components/post";
import Link from "next/link";

function Blog({ posts }) {
  return (
    <div>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h1>Blog Page</h1>

      {posts.map((post) => {
        return (
          <>
            <br></br>
            <div key={post.id}>
              <Post post={post} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
