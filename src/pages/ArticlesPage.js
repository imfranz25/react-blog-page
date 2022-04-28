import React from "react";
import {useParams, Link} from 'react-router-dom';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesPage = () => {
  const {name} = useParams();
  const article = articleContent.find(article => article.name === name);

  if(!article) {
    return (
      <div className="no-article">
        <h1 className='not-exist bg-danger text-white text-center py-4'>Article does not exist!</h1>
        <Link to='/articles-list'>
          <h6 className="text-center mt-5">
            <button className='btn btn-warning text-white'>Go Back to Articles</button>
          </h6>
        </Link>
      </div>
    )
  }

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <div className='article-content'>
      <div className='selected-article'>
        <div classname='article-header'>{article.date} &#183; {article.read}</div>
        <h1 className="article-title">{article.title}</h1>
        {article.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
      </div>
      <hr className="my-5" />
      <h2 className="mt-3 py-2 other-articles"><span className="text-warning">O</span>ther Articles</h2>
      <ArticlesList articles={otherArticles} />
    </div>
  )
}

export default ArticlesPage;