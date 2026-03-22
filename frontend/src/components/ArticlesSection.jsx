import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { articlesData } from '../pages/articlesData';
import ArticleDetail from '../pages/ArticleDetail';


import 'swiper/css';
import 'swiper/css/pagination';
import './ArticlesSection.scss';

const ArticlesSection = () => {
  
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const handleReadMore = (e, article) => {
    e.stopPropagation();

    //redirige vers la page de l'article
    navigate(`/article/${article.id}`);
  };

  const handleSeeAll = () => {
    navigate ('/article');   // Redirection vers la page de tous les articles
  }

  return (
    <section className="articles-section">
      <div className="container">
        <h3>Nos dernières publications</h3>
        
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          touchStartPreventDefault={false}
          preventClicks={false}
          preventClicksPropagation={false}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="articles-carousel"
        >
           {articlesData.map((article) => (
            <SwiperSlide key={article.id}>
              <article className="article-card">
                <div className="img-container">
                  <img src={article.image} alt={article.title} />
                  <span className="badge">{article.category}</span>
                </div>
                <div className="content">
                  <small>{article.date}</small>
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>

                  <button 
                    className="read-more" 
                    onClick={(e) => handleReadMore(e, article)}
                  >
                    Lire la suite →
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

      <button className="see-all-btn" onClick={handleSeeAll}>
          Voir tout
        </button>
      </div>
      
      
    </section>
  );
};

export default ArticlesSection;