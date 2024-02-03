import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { selectArticles } from '../features/articles/articlesSlice';
import { Link, useParams } from 'react-router-dom';

export default function Category() {
  const categories = useSelector(selectCategories);
  const articles = useSelector(selectArticles);
  const { name } = useParams(); // Extract the 'name' parameter from the URL

  const categoryArticles = categories[name] || []; // Get articles related to the category

  return (
    <div>
      <h2>Articles Related to {name}</h2>
      <ul>
        {categoryArticles.map(articleSlug => (
          <li key={articleSlug}>
            <Link to={`/articles/${articleSlug}`}>
              {articles[articleSlug] ? articles[articleSlug].title : 'Article Title'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
