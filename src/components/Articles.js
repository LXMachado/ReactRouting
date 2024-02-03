import React from "react";
import { useSelector } from "react-redux";
import { selectArticles, filterArticles } from "../features/articles/articlesSlice";
import Search from './Search';
import { Link, useSearchParams } from 'react-router-dom';

export default function Articles() {
  const articles = useSelector(selectArticles);

  // Grab URLSearchParams from useSearchParams Hook
  const { searchParams } = useSearchParams();
  const title = searchParams ? searchParams.get('title') : null;

  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles);

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        {filteredArticles.map(article => (
          <li key={article.slug}>
            {/* Use <Link> component to create links */}
            <Link to={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <Search />
    </main>
  );
}
