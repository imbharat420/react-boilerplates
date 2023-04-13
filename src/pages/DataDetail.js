//get params from url
import { useLoaderData } from "react-router-dom";
import { getPost, getPosts } from "../utils/api";

const DataDetail = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export function loader({ params }) {
  const postId = params.id;
  return getPost(postId);
}

export default DataDetail;
