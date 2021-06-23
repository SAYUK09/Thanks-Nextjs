import Link from "next/link";
import React, { useEffect, useState } from "react";

export type Query = {
  query: string;
};

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  type Blog = {
    title: string;
    slug: string;
    brief: string;
    _id: string;
  };

  async function gql(query: any, variables = {}) {
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
                            _id
                            title
                            brief
                            slug
                        }
                    }
                }
            }
        `;

  useEffect(() => {
    gql(GET_ARTICLES, { page: 0 }).then((result) => {
      console.log(result.data.user.publication.posts);
      setArticles(result.data.user.publication.posts);
    });
  }, []);



  return (
    <div>
      <h1>Blogs</h1>
      <Link href={`/`}>
        <a>Back to Home</a>
      </Link>

      {articles &&
        articles.map((post: Blog) => {
          return <h1 key={post._id}>{post.title}</h1>;
        })}
    </div>
  );
};

export default Blogs;
