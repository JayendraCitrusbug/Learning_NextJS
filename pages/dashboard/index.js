import { useState, useEffect } from "react";
import Link from "next/link";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  async function fetchDashboardData() {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    setDashboardData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h1>Dashboard</h1>
      <h3>Posts - {dashboardData.posts}</h3>
      <h3>Likes - {dashboardData.likes}</h3>
      <h3>Followers - {dashboardData.followers}</h3>
      <h3>Following - {dashboardData.following}</h3>
    </div>
  );
}

export default Dashboard;
