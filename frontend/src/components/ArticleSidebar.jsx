import React from 'react';
import './ArticleSidebar.scss';

const ArticleSidebar = ({ article, onClose }) => {
  if (!article) return null;

  // Priorité : Si gallery existe, on l'utilise. Sinon, on utilise image seule.
  const imagesToShow = article.gallery || [article.image];

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose}></div>
      
      <aside className="article-sidebar">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        {/* Conteneur des images : elles seront côte à côte grâce au CSS */}
        <div className="sidebar-header-grid">
          {imagesToShow.map((img, index) => (
            <div key={index} className="img-wrapper">
              <img src={img} alt={`${article.title} - ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <div className="sidebar-content">
          <span className="badge">{article.category}</span>
          <small>{article.date}</small>
          <h2>{article.title}</h2>
          
          <div className="text-content">
            <p>{article.fullContent}</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ArticleSidebar;