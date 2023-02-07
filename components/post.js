function Post({ post }) {
  return (
    <>
      <p>{post.id} : {post.userId} - {post.title}</p>
    </>
  );
}

export default Post;
