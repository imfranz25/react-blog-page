import React from "react";
import {Link} from 'react-router-dom';

const ArticlesList = ({articles}) => (
  <div className="list-container">
    {articles.map((article, key) => (
      <Link key={key} to={`/articles-page/${article.name}`} className="article card px-1 py-3 mb-5">
        <div classname='article-header'>{article.date} &#183; {article.read} read</div>
        <h2 className="article-titles"><span className='hash me-3'>#</span>{article.title}</h2>
        <p>{article.content[0].substring(0, 100)}...</p>
      </Link>
    ))}
  </div>
)

export default ArticlesList;