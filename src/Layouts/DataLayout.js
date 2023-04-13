import { Outlet } from "react-router-dom";

const DataLayout = () => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "3px",
        width: "90%",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          borderBottom: "1px solid #ccc",
          paddingBottom: "1rem",
        }}
      >
        Blog Posts
      </h1>
      <article>
        <Outlet />
      </article>
    </div>
  );
};

export default DataLayout;
