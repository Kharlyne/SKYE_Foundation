import React from "react";
import "../../styles/admin/ArticleList.scss";

const getCategoryClass = (category) => {
  if (category === "Événement") return "event";
  if (category === "Projet") return "project";
  return "news";
};

const ArticleList = ({ articles, loading, onEdit, onDelete }) => {
  return (
    <div className="article-list">
      <div className="article-list__title">Articles publiés</div>

      {loading && <div className="article-list__empty">Chargement...</div>}

      {!loading &&
        articles.map((article) => (
          <div key={article.id} className="article-list__item">
            <div className="article-list__thumb">
              {article.image_url ? (
                <img src={article.image_url} alt={article.title} />
              ) : (
                <span>—</span>
              )}
            </div>

            <div className="article-list__info">
              <div className="article-list__name">{article.title}</div>
              <div className="article-list__meta">{article.date || "—"}</div>
              <span
                className={`article-list__badge ${getCategoryClass(article.category)}`}
              >
                {article.category}
              </span>
            </div>

            <button
              className="article-list__edit"
              onClick={() => onEdit(article)}
            >
              Modifier
            </button>

            <button
              className="article-list__delete"
              onClick={() => onDelete(article.id)}
            >
              Supprimer
            </button>
          </div>
        ))}

      {!loading && articles.length === 0 && (
        <div className="article-list__empty">Aucun article pour l'instant</div>
      )}
    </div>
  );
};

export default ArticleList;