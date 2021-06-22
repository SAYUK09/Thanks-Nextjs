import React from "react";
import Link from "next/link";

const projects = () => {
  return (
    <div>
      <h1>PROJECTS</h1>
      <Link href={`/`}>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default projects;
