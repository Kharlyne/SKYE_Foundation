import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { articlesData } from '../pages/articlesData';
import ArticleSidebar from './ArticleSidebar'; 

import 'swiper/css';
import 'swiper/css/pagination';
import './ArticlesSection.scss';

const ArticlesSection = () => {
  const [openId, setOpenId] = useState(null);
  const [sidebarArticle, setSidebarArticle] = useState(null); 
  const swiperRef = useRef(null);

  const handleReadMore = (e, article) => {
    e.stopPropagation();
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      // Déclenche l'ouverture du panneau latéral sur PC
      setSidebarArticle(article);
    } else {
      // Gère l'accordéon sur mobile
      if (openId === article.id) {
        setOpenId(null);
        if (swiperRef.current) swiperRef.current.autoplay.start();
      } else {
        setOpenId(article.id);
        if (swiperRef.current) swiperRef.current.autoplay.stop();
      }
    }
  };

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
              <article className={`article-card ${openId === article.id ? 'active' : ''}`}>
                <div className="img-container">
                  <img src={article.image} alt={article.title} />
                  <span className="badge">{article.category}</span>
                </div>
                <div className="content">
                  <small>{article.date}</small>
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>
                  
                  {/* Accordéon mobile */}
                  <div className={`details ${openId === article.id ? 'show' : ''}`}>
                    <p>{article.fullContent || article.excerpt}</p> 
                  </div>

                  <button 
                    className="read-more" 
                    onClick={(e) => handleReadMore(e, article)}
                  >
                    {openId === article.id ? 'Réduire' : 'Lire la suite →'}
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Panneau latéral (Off-canvas) pour PC */}
      {sidebarArticle && (
        <ArticleSidebar 
          article={sidebarArticle} 
          onClose={() => setSidebarArticle(null)} 
        />
      )}
    </section>
  );
};

export default ArticlesSection;