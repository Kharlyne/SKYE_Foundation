import React from "react";
import { Link } from "react-router-dom";
import { useArticles } from '../hooks/useArticles';
import "./ArticlePage.scss";

const ArticleCard = ({ article }) => (
  <article className="article-card">
    <div className="article-card__image">
      <img src={article.image_url} alt={article.title} />
    </div>
    <div className="article-card__content">
      <span className="article-card__category">{article.category}</span>
      <p className="article-card__date">{article.date}</p>
      <h3>{article.title}</h3>
      <p className="article-card__excerpt">{article.excerpt}</p>
      <Link to={`/article/${article.id}`} className="article-card__link">Lire l'article</Link>
    </div>
  </article>
);

const Articles = () => {
  const { articles, loading } = useArticles();

  if (loading) return <div className="container"><p>Chargement...</p></div>;

  const featuredArticle = articles[0];
  const eventArticles = articles.filter(a => a.category === "Événement");
  const projectArticles = articles.filter(a => a.category === "Projet");
  const newsArticles = articles.filter(a => a.category === "Actualité");

  return (
    <main className="articles-page">
      <section className="articles-hero">
        <div className="container">
          <h1>Nos articles</h1>
          <p>Retrouvez ici nos événements, nos projets et nos actualités autour de l'inclusion, de l'éducation et de l'accompagnement.</p>
        </div>
      </section>

      {featuredArticle && (
        <section className="featured-article">
          <div className="container featured-article__wrapper">
            <div className="featured-article__image">
              <img src={featuredArticle.image_url} alt={featuredArticle.title} />
            </div>
            <div className="featured-article__content">
              <span className="featured-article__tag">À la une</span>
              <p className="featured-article__meta">{featuredArticle.category} · {featuredArticle.date}</p>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <Link to={`/article/${featuredArticle.id}`} className="featured-article__btn">Lire l'article</Link>
            </div>
          </div>
        </section>
      )}

      {eventArticles.length > 0 && (
        <section className="articles-section"><div className="container">
          <div className="section-heading"><h2>Événements</h2></div>
          <div className="articles-grid">{eventArticles.map(a => <ArticleCard key={a.id} article={a} />)}</div>
        </div></section>
      )}

      {projectArticles.length > 0 && (
        <section className="articles-section"><div className="container">
          <div className="section-heading"><h2>Projets</h2></div>
          <div className="articles-grid">{projectArticles.map(a => <ArticleCard key={a.id} article={a} />)}</div>
        </div></section>
      )}

      {newsArticles.length > 0 && (
        <section className="articles-section"><div className="container">
          <div className="section-heading"><h2>Actualités</h2></div>
          <div className="articles-grid">{newsArticles.map(a => <ArticleCard key={a.id} article={a} />)}</div>
        </div></section>
      )}
    </main>
  );
};

export default Articles;