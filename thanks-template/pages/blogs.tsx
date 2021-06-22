import Link from "next/link";
import React, { useState } from "react";

export type Query = {
  query: string;
};

const Blogs = () => {
  const [articles, setArticle] = useState();

  async function gql(query: string, variables = {}) {
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return data.json();
  }

  const GET_ARTICLES = `
            query GetUserArticles($page: Int!) {
                user(username: "sayuk") {
                    publication {
                        posts(page: $page) {
                            title
                            brief
                            slug
                        }
                    }
                }
            }
        `;

  gql(GET_ARTICLES, { page: 0 }).then((result) => {
    console.log(result.data.user.publication.posts);
  });
  return (
    <div>
      <h1>Blogs</h1>
      <Link href={`/`}>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default Blogs;
