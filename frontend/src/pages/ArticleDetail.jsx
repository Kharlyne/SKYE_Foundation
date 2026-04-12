import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useArticle } from '../hooks/useArticles';
import ArticleGallery from '../components/articles/ArticleGallery';
import './ArticleDetail.scss';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { article, loading } = useArticle(id);

  if (loading) {
    return (
      <div className="container">
        <p>Chargement...</p>
      </div>
    );
  }

  if (!article || article.error) {
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

  const renderContent = () => {
    let parsed = article.content;

    try {
      parsed = JSON.parse(article.content);
    } catch {}

    if (Array.isArray(parsed)) {
      return parsed.map((block, index) => {
        if (block.type === 'paragraph') {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === 'list') {
          return (
            <ul key={index}>
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }

        return null;
      });
    }

    return String(parsed)
      .split('\n')
      .map((p, i) => <p key={i}>{p}</p>);
  };

  const parsedGallery =
    typeof article.gallery === 'string'
      ? JSON.parse(article.gallery || '[]')
      : article.gallery || [];

  const images = [article.image_url, ...parsedGallery].filter(Boolean);

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

        <ArticleGallery images={images} />

        <div className="article-content">
          <p className="excerpt">{article.excerpt}</p>
          <div className="full-content">{renderContent()}</div>
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