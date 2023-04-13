import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is home</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
