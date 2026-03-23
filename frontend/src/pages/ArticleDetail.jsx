import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articlesData } from './articlesData';
import './ArticleDetail.scss';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articlesData.find(article => article.id === parseInt(id));

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="container">
          <h1>Article non trouvé</h1>
          <p>L'article que vous recherchez n'existe pas ou a été supprimé.</p>
          <button onClick={() => navigate('/article')} className="back-btn">
            Voir tous les articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="article-detail">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Retour
        </button>

        <div className="article-header">
          <span className="category">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="meta">
            <span className="date">{article.date}</span>
          </div>
        </div>

        <div className="article-image">
          <img src={article.articleImage || article.image} alt={article.title} />
        </div>

        <div className="article-content">
          <p className="excerpt">{article.excerpt}</p>

          <div className="full-content">
            {Array.isArray(article.fullContent) ? (
              article.fullContent.map((block, index) => {
                if (block.type === "paragraph") {
                  return <p key={index}>{block.text}</p>;
                }

                if (block.type === "list") {
                  return (
                    <ul key={index}>
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })
            ) : (
              article.fullContent.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            )}
          </div>
        </div>

        <div className="article-footer">
          <button onClick={() => navigate('/article')} className="more-articles">
            Voir tous les articles
          </button>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;