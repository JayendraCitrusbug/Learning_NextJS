import { useRouter } from "next/router";

function HouseRange() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        Houses in range from {params[0]} to {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Houses upto range of {params[0]}</h1>;
  }

  return <h1>House Details</h1>;
}

export default HouseRange;
