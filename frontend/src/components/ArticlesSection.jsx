import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useArticles } from '../hooks/useArticles';
import 'swiper/css';
import 'swiper/css/pagination';
import './ArticlesSection.scss';

const ArticlesSection = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const { articles, loading } = useArticles();

  if (loading) return null;

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
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="articles-carousel"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <article className="article-card">
                <div className="img-container">
                  <img src={article.image_url} alt={article.title} />
                  <span className="badge">{article.category}</span>
                </div>
                <div className="content">
                  <small>{article.date}</small>
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>
                  <button className="read-more" onClick={(e) => { e.stopPropagation(); navigate(`/article/${article.id}`); }}>
                    Lire la suite →
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="see-all-btn" onClick={() => navigate('/article')}>Voir tout</button>
      </div>
    </section>
  );
};

export default ArticlesSection;