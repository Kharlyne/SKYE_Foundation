import React from "react";
import "../../styles/admin/AdminDashboard.scss";
import ArticleForm from "../../components/admin/ArticleForm";
import ArticleList from "../../components/admin/ArticleList";

const AdminDashboard = ({
  articles,
  loading,
  form,
  setForm,
  editingId,
  handleChange,
  handleSubmit,
  handleCancelEdit,
  handleEdit,
  handleDelete,
  submitLoading,
  successMsg,
  errorMsg,
  openCloudinaryWidget,
  openGalleryWidget,
  onLogout,
}) => {
  const eventCount = articles.filter(
    (article) => article.category === "Événement"
  ).length;

  const otherCount = articles.filter(
    (article) => article.category !== "Événement"
  ).length;

  return (
    <div className="admin-dashboard">
      <aside className="admin-dashboard__sidebar">
        <div className="admin-dashboard__logo">
          SKYE <span>Admin</span>
        </div>

        <div className="admin-dashboard__nav-item admin-dashboard__nav-item--active">
          Articles
        </div>

        <button className="admin-dashboard__logout" onClick={onLogout}>
          Déconnexion
        </button>
      </aside>

      <main className="admin-dashboard__main">
        <div className="admin-dashboard__topbar">
          <div>
            <h1 className="admin-dashboard__title">Gestion des articles</h1>
            <p className="admin-dashboard__subtitle">
              Publiez et gérez vos articles
            </p>
          </div>

          <span className="admin-dashboard__badge">Admin connecté</span>
        </div>

        <div className="admin-dashboard__stats">
          <div className="admin-dashboard__stat-card">
            <span>Total articles</span>
            <strong>{articles.length}</strong>
            <small>dans la base de données</small>
          </div>

          <div className="admin-dashboard__stat-card">
            <span>Événements</span>
            <strong>{eventCount}</strong>
            <small>publiés</small>
          </div>

          <div className="admin-dashboard__stat-card">
            <span>Projets / Actualités</span>
            <strong>{otherCount}</strong>
            <small>publiés</small>
          </div>
        </div>

        <div className="admin-dashboard__content">
          <ArticleForm
            form={form}
            setForm={setForm}
            editingId={editingId}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCancelEdit={handleCancelEdit}
            submitLoading={submitLoading}
            successMsg={successMsg}
            errorMsg={errorMsg}
            openCloudinaryWidget={openCloudinaryWidget}
            openGalleryWidget={openGalleryWidget}
          />

          <ArticleList
            articles={articles}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;