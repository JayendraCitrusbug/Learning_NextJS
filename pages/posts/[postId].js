import { useRouter } from "next/router";

function Post(post) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <p>
        {post.post.id} {post.post.title}
      </p>
      <p>{post.post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  console.log(`Generating page for /posts/${params.postId}`);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: true,
  };
}
