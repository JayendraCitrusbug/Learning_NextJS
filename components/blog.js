function Blog({ blog }) {
  return (
    <>
      <p>
        {blog.id} : {blog.userId} - {blog.title}
      </p>
    </>
  );
}

export default Blog;
