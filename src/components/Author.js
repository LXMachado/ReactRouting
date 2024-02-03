import React from "react";
import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors/authorsSlice";
import { Link, useParams } from "react-router-dom";

export default function Author() {
  // Extract th `name` parameter from the URL using `useParams()`
  const { name } = useParams();

  const authors = useSelector(selectAuthors);
  const author = authors[name]; // Access the author's data using the `name` variable

  return (
    <main>
      <h1>Articles by {name}</h1>
      <ul>
        {author && author.articles ? (
          author.articles.map(slug => (
            <li key={slug}>
              <Link to={`/articles/${slug}`}>
                {slug}
              </Link>
            </li>
          ))
        ) : (
          <p>No Articles Found...</p>
        )}
      </ul>
    </main>
  );
}
