import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <title>Home</title>
      <meta name="description" content="Home description" />
      <main className="container mx-auto">
        <h1>HomePage</h1>
        <button onClick={() => navigate("/blog")}>Go Blog</button>
      </main>
      ;
    </>
  );
};

export default HomePage;
