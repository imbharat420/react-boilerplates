import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { getSlowPosts } from "../utils/api";
import Posts from "../components/Posts";
const Data = () => {
  const loaderData = useLoaderData();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading blog posts.</p>}
        >
          {(loadedPosts) => {
            console.log("loadedPosts", loadedPosts);
            return <Posts blogPosts={loadedPosts} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export const loader = () => {
  return defer({ posts: getSlowPosts() });
};

export default Data;
