import { useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts } from "../utils/api";

const Data = ({ posts }) => {
  const loaderData = useLoaderData();
  console.log({ loaderData });
  return (
    <div>
      <Posts posts={loaderData} />
    </div>
  );
};

export function loader() {
  return getPosts();
}

export default Data;
