import { Link } from "react-router-dom";
const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/data/${post.id}`}>{post.title}</Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
