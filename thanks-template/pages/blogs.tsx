import Link from "next/link";
import React from "react";

const blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <Link href={`/`}>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default blogs;
