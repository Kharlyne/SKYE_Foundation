import React from "react";
import "../../styles/admin/ArticleForm.scss";

const ArticleForm = ({
  form,
  setForm,
  editingId,
  handleChange,
  handleSubmit,
  handleCancelEdit,
  submitLoading,
  successMsg,
  errorMsg,
  openCloudinaryWidget,
  openGalleryWidget,
}) => {
  return (
    <div className="article-form">
      <div className="article-form__title">
        {editingId ? "Modifier l'article" : "Ajouter un article"}
      </div>

      {successMsg && <div className="article-form__success">{successMsg}</div>}
      {errorMsg && <div className="article-form__error">{errorMsg}</div>}

      <div className="article-form__group">
        <label>Titre</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Titre de l'article"
        />
      </div>

      <div className="article-form__group">
        <label>Extrait</label>
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="Courte description visible sur les cartes..."
          className="article-form__textarea article-form__textarea--medium"
        />
      </div>

      <div className="article-form__group">
        <label>Contenu complet</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Contenu de l'article..."
          className="article-form__textarea article-form__textarea--large"
        />
      </div>

      <div className="article-form__row">
        <div className="article-form__group">
          <label>Catégorie</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Événement</option>
            <option>Projet</option>
            <option>Actualité</option>
          </select>
        </div>

        <div className="article-form__group">
          <label>Date</label>
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="ex: 2 Avril 2026"
          />
        </div>
      </div>

      <div className="article-form__row">
        <div className="article-form__group">
          <label>Langue</label>
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
          >
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
          </select>
        </div>

        <div className="article-form__group">
          <label>Statut</label>
          <select
            name="published"
            value={String(form.published)}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                published: e.target.value === "true",
              }))
            }
          >
            <option value="true">Publié</option>
            <option value="false">Brouillon</option>
          </select>
        </div>
      </div>

      <div className="article-form__group">
        <label>Image principale</label>
        <div className="article-form__upload-row">
          <button type="button" onClick={openCloudinaryWidget}>
            Choisir une image
          </button>

          {form.image_url && (
            <img
              src={form.image_url}
              alt="preview"
              className="article-form__preview"
            />
          )}
        </div>
      </div>

      <div className="article-form__group">
        <label>Galerie</label>
        <div className="article-form__gallery">
          <button type="button" onClick={openGalleryWidget}>
            Ajouter des images
          </button>

          {form.gallery.map((url, index) => (
            <div key={index} className="article-form__gallery-item">
              <img src={url} alt="" className="article-form__preview" />
              <button
                type="button"
                className="article-form__remove"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    gallery: prev.gallery.filter((_, i) => i !== index),
                  }))
                }
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="article-form__actions">
        <button
          className="article-form__submit"
          onClick={handleSubmit}
          disabled={submitLoading}
        >
          {submitLoading
            ? "Enregistrement..."
            : editingId
            ? "Enregistrer les modifications"
            : "Publier l'article"}
        </button>

        {editingId && (
          <button className="article-form__cancel" onClick={handleCancelEdit}>
            Annuler
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleForm;