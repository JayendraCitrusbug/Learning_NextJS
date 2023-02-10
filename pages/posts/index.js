import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p>
                {post.id} {post.title}
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
