import React from "react";
import { Link } from "react-router-dom";
import { articlesData } from '../pages/articlesData';
import "./ArticlePage.scss";

const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <div className="article-card__image">
        <img src={article.image} alt={article.title} />
      </div>

      <div className="article-card__content">
        <span className="article-card__category">{article.category}</span>
        <p className="article-card__date">{article.date}</p>
        <h3>{article.title}</h3>
        <p className="article-card__excerpt">{article.excerpt}</p>

        <Link to={`/articles/${article.id}`} className="article-card__link">
          Lire l’article
        </Link>
      </div>
    </article>
  );
};

const Articles = () => {
  const featuredArticle = articlesData[0];

  const eventArticles = articlesData.filter(
    (article) => article.category === "Événement"
  );

  const projectArticles = articlesData.filter(
    (article) => article.category === "Projet"
  );

  const newsArticles = articlesData.filter(
    (article) => article.category === "Actualité"
  );

  return (
    <main className="articles-page">
      <section className="articles-hero">
        <div className="container">
          <h1>Nos articles</h1>
          <p>
            Retrouvez ici nos événements, nos projets et nos actualités autour
            de l’inclusion, de l’éducation et de l’accompagnement.
          </p>
        </div>
      </section>

      {featuredArticle && (
        <section className="featured-article">
          <div className="container featured-article__wrapper">
            <div className="featured-article__image">
              <img
                src={featuredArticle.articleImage || featuredArticle.image}
                alt={featuredArticle.title}
              />
            </div>

            <div className="featured-article__content">
              <span className="featured-article__tag">À la une</span>
              <p className="featured-article__meta">
                {featuredArticle.category} · {featuredArticle.date}
              </p>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>

              <Link
                to={`/articles/${featuredArticle.id}`}
                className="featured-article__btn"
              >
                Lire l’article
              </Link>
            </div>
          </div>
        </section>
      )}

      {eventArticles.length > 0 && (
        <section className="articles-section">
          <div className="container">
            <div className="section-heading">
              <h2>Événements</h2>
            </div>

            <div className="articles-grid">
              {eventArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {projectArticles.length > 0 && (
        <section className="articles-section">
          <div className="container">
            <div className="section-heading">
              <h2>Projets</h2>
            </div>

            <div className="articles-grid">
              {projectArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {newsArticles.length > 0 && (
        <section className="articles-section">
          <div className="container">
            <div className="section-heading">
              <h2>Actualités</h2>
            </div>

            <div className="articles-grid">
              {newsArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Articles;