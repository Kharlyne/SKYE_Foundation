import { useEffect, useState } from "react";
import "../../styles/articles/ArticleGallery.scss";

const ArticleGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!images.length) return null;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  return (
    <>
      <div className="article-gallery">
        <div className="article-gallery__viewer">
          {images.length > 1 && (
            <button
              className="article-gallery__nav article-gallery__nav--left"
              onClick={goPrev}
              aria-label="Image précédente"
              type="button"
            >
              ‹
            </button>
          )}

          <img
            src={images[currentIndex]}
            alt={`Illustration ${currentIndex + 1}`}
            className="article-gallery__image"
            onClick={() => openLightbox(currentIndex)}
          />

          {images.length > 1 && (
            <button
              className="article-gallery__nav article-gallery__nav--right"
              onClick={goNext}
              aria-label="Image suivante"
              type="button"
            >
              ›
            </button>
          )}

          {images.length > 1 && (
            <div className="article-gallery__counter">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="article-gallery__thumbs">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniature ${index + 1}`}
                className={`article-gallery__thumb ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="article-lightbox" onClick={closeLightbox}>
          <button
            className="article-lightbox__close"
            onClick={closeLightbox}
            type="button"
            aria-label="Fermer"
          >
            ×
          </button>

          {images.length > 1 && (
            <button
              className="article-lightbox__nav article-lightbox__nav--left"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              type="button"
              aria-label="Image précédente"
            >
              ‹
            </button>
          )}

          <img
            src={images[currentIndex]}
            alt={`Illustration ${currentIndex + 1}`}
            className="article-lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              className="article-lightbox__nav article-lightbox__nav--right"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              type="button"
              aria-label="Image suivante"
            >
              ›
            </button>
          )}

          {images.length > 1 && (
            <div className="article-lightbox__counter">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ArticleGallery;