import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

const API_URL = import.meta.env.VITE_API_URL;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "skye2026";

const CLOUDINARY_CLOUD_NAME = "dxypxvdsz";
const CLOUDINARY_UPLOAD_PRESET = "skyefoundation";

const initialForm = {
  title: "",
  excerpt: "",
  content: "",
  category: "Événement",
  date: "",
  image_url: "",
  language: "fr",
  gallery: [],
  published: true,
};

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPasswordInput("");
    }
  };

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/articles`);
      const data = await res.json();
      setArticles(data);
    } catch {
      setErrorMsg("Impossible de charger les articles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) fetchArticles();
  }, [authenticated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const openCloudinaryWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        multiple: false,
        sources: ["local", "url"],
        language: "fr",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setForm((prev) => ({ ...prev, image_url: result.info.secure_url }));
        }
      }
    );
    widget.open();
  };

  const openGalleryWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        multiple: true,
        sources: ["local", "url"],
        language: "fr",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setForm((prev) => ({
            ...prev,
            gallery: [...prev.gallery, result.info.secure_url],
          }));
        }
      }
    );
    widget.open();
  };

  const handleSubmit = async () => {
    if (!form.title || !form.content || !form.excerpt) {
      setErrorMsg("Titre, extrait et contenu sont obligatoires.");
      return;
    }

    setSubmitLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const url = editingId
        ? `${API_URL}/api/articles/${editingId}`
        : `${API_URL}/api/articles`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setSuccessMsg(
        editingId
          ? "Article modifié avec succès !"
          : "Article publié avec succès !"
      );

      setForm(initialForm);
      setEditingId(null);
      fetchArticles();
    } catch {
      setErrorMsg("Erreur lors de l'enregistrement.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleEdit = (article) => {
    setEditingId(article.id);
    setForm({
      title: article.title || "",
      excerpt: article.excerpt || "",
      content: article.content || "",
      category: article.category || "Événement",
      date: article.date || "",
      image_url: article.image_url || "",
      language: article.language || "fr",
      gallery: article.gallery || [],
      published: article.published ?? true,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(initialForm);
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet article ?")) return;

    try {
      await fetch(`${API_URL}/api/articles/${id}`, { method: "DELETE" });
      setArticles((prev) => prev.filter((article) => article.id !== id));
    } catch {
      setErrorMsg("Erreur lors de la suppression.");
    }
  };

  if (!authenticated) {
    return (
      <AdminLogin
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        passwordError={passwordError}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <AdminDashboard
      articles={articles}
      loading={loading}
      form={form}
      setForm={setForm}
      editingId={editingId}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancelEdit={handleCancelEdit}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      submitLoading={submitLoading}
      successMsg={successMsg}
      errorMsg={errorMsg}
      openCloudinaryWidget={openCloudinaryWidget}
      openGalleryWidget={openGalleryWidget}
      onLogout={() => setAuthenticated(false)}
    />
  );
};

export default AdminPage;