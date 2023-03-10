import Link from "next/link";
import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }

  return (
    <div>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h1>Docs Home Page</h1>
    </div>
  );
}

export default Doc;
