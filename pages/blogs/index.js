import Blog from "@/components/blog";
import Link from "next/link";

function BlogsList({ blogs }) {
  return (
    <div>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h1>Blog Page</h1>

      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <br></br>
            <Blog blog={blog} />
          </div>
        );
      })}
    </div>
  );
}

export default BlogsList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      blogs: data,
    },
  };
}
