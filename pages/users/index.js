import User from "@/components/user";
import Link from "next/link";

// function UserList(props) {
function UserList({ users }) {
  return (
    <div>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h1>List of users</h1>

      {users.map((user) => {
        return (
          <>
            <br></br>
            <div key={user.id}>
              <User user={user} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
