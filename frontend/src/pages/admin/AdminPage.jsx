import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'skye2026';

const CLOUDINARY_CLOUD_NAME = 'dxypxvdsz';
const CLOUDINARY_UPLOAD_PRESET = 'skyefoundation';

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Événement',
    date: '',
    image_url: '',
    language: 'fr',
    gallery: [],
    published: true,
  });

  const openCloudinaryWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        multiple: false,
        sources: ['local', 'url'],
        language: 'fr',
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          setForm(f => ({ ...f, image_url: result.info.secure_url }));
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
        sources: ['local', 'url'],
        language: 'fr',
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          setForm(f => ({ ...f, gallery: [...f.gallery, result.info.secure_url] }));
        }
      }
    );
    widget.open();
  };

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPasswordInput('');
    }
  };

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/articles`);
      const data = await res.json();
      setArticles(data);
    } catch {
      setErrorMsg('Impossible de charger les articles.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) fetchArticles();
  }, [authenticated]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.title || !form.content || !form.excerpt) {
      setErrorMsg('Titre, extrait et contenu sont obligatoires.');
      return;
    }
    setSubmitLoading(true);
    setErrorMsg('');
    setSuccessMsg('');
    try {
      const res = await fetch(`${API_URL}/api/articles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSuccessMsg('Article publié avec succès !');
      setForm({ title: '', excerpt: '', content: '', category: 'Événement', date: '', image_url: '', language: 'fr' });
      fetchArticles();
    } catch {
      setErrorMsg('Erreur lors de la publication.');
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cet article ?')) return;
    try {
      await fetch(`${API_URL}/api/articles/${id}`, { method: 'DELETE' });
      setArticles(articles.filter((a) => a.id !== id));
    } catch {
      setErrorMsg('Erreur lors de la suppression.');
    }
  };

  const categoryClass = (cat) => {
    if (cat === 'Événement') return { background: '#e6f1fb', color: '#185fa5' };
    if (cat === 'Projet') return { background: '#e1f5ee', color: '#0f6e56' };
    return { background: '#faeeda', color: '#854f0b' };
  };

  // ─── Lock screen ───────────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div style={styles.lockWrapper}>
        <div style={styles.lockBox}>
          <div style={styles.lockIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5bc4a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div style={styles.lockTitle}>Espace admin</div>
          <div style={styles.lockSub}>SKYE Foundation</div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            style={styles.lockInput}
          />
          {passwordError && <div style={styles.errorText}>Mot de passe incorrect</div>}
          <button style={styles.lockBtn} onClick={handleLogin}>Accéder →</button>
        </div>
      </div>
    );
  }

  // ─── Admin dashboard ───────────────────────────────────────────────────────
  const eventCount = articles.filter(a => a.category === 'Événement').length;
  const otherCount = articles.filter(a => a.category !== 'Événement').length;

  return (
    <div style={styles.admin}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarLogo}>SKYE <span style={{ color: '#5bc4a8' }}>Admin</span></div>
        <SidebarItem icon="file" label="Articles" active />
        <div style={{ marginTop: 'auto' }}>
          <SidebarItem icon="logout" label="Déconnexion" onClick={() => setAuthenticated(false)} />
        </div>
      </div>

      {/* Main */}
      <div style={styles.main}>
        <div style={styles.topBar}>
          <div>
            <div style={styles.pageTitle}>Gestion des articles</div>
            <div style={styles.pageSub}>Publiez et gérez vos articles</div>
          </div>
          <span style={styles.adminBadge}>Admin connecté</span>
        </div>

        {/* Stats */}
        <div style={styles.statsRow}>
          <StatCard label="Total articles" value={articles.length} sub="dans la base de données" />
          <StatCard label="Événements" value={eventCount} sub="publiés" />
          <StatCard label="Projets / Actualités" value={otherCount} sub="publiés" />
        </div>

        {/* Content grid */}
        <div style={styles.contentGrid}>
          {/* Form */}
          <div style={styles.panel}>
            <div style={styles.panelTitle}>Ajouter un article</div>

            {successMsg && <div style={styles.successBanner}>{successMsg}</div>}
            {errorMsg && <div style={styles.errorBanner}>{errorMsg}</div>}

            <FormGroup label="Titre">
              <input name="title" value={form.title} onChange={handleChange} placeholder="Titre de l'article" style={styles.input} />
            </FormGroup>
            <FormGroup label="Extrait">
              <textarea name="excerpt" value={form.excerpt} onChange={handleChange} placeholder="Courte description visible sur les cartes..." style={{ ...styles.input, minHeight: '60px', resize: 'vertical' }} />
            </FormGroup>
            <FormGroup label="Contenu complet">
              <textarea name="content" value={form.content} onChange={handleChange} placeholder="Contenu de l'article..." style={{ ...styles.input, minHeight: '100px', resize: 'vertical' }} />
            </FormGroup>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <FormGroup label="Catégorie">
                <select name="category" value={form.category} onChange={handleChange} style={styles.input}>
                  <option>Événement</option>
                  <option>Projet</option>
                  <option>Actualité</option>
                </select>
              </FormGroup>
              <FormGroup label="Date">
                <input name="date" value={form.date} onChange={handleChange} placeholder="ex: 2 Avril 2026" style={styles.input} />
              </FormGroup>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <FormGroup label="Langue">
                <select name="language" value={form.language} onChange={handleChange} style={styles.input}>
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                </select>
              </FormGroup>
              <FormGroup label="Statut">
                <select name="published" value={form.published} onChange={e => setForm(f => ({ ...f, published: e.target.value === 'true' }))} style={styles.input}>
                  <option value="true">Publié</option>
                  <option value="false">Brouillon</option>
                </select>
              </FormGroup>
            </div>
            <FormGroup label="Image principale">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button type="button" onClick={openCloudinaryWidget} style={styles.uploadBtn}>
                  Choisir une image
                </button>
                {form.image_url && (
                  <img src={form.image_url} alt="preview" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '6px', border: '0.5px solid #ddd' }} />
                )}
              </div>
            </FormGroup>
            <FormGroup label="Galerie (images supplémentaires)">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <button type="button" onClick={openGalleryWidget} style={styles.uploadBtn}>
                  Ajouter des images
                </button>
                {form.gallery.map((url, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                    <img src={url} alt="" style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '6px', border: '0.5px solid #ddd' }} />
                    <button onClick={() => setForm(f => ({ ...f, gallery: f.gallery.filter((_, j) => j !== i) }))}
                      style={{ position: 'absolute', top: '-6px', right: '-6px', width: '16px', height: '16px', borderRadius: '50%', background: '#e24b4a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
                  </div>
                ))}
              </div>
            </FormGroup>
            <button style={styles.submitBtn} onClick={handleSubmit} disabled={submitLoading}>
              {submitLoading ? 'Publication...' : 'Publier l\'article'}
            </button>
          </div>

          {/* Article list */}
          <div style={styles.panel}>
            <div style={styles.panelTitle}>Articles publiés</div>
            {loading && <div style={{ fontSize: '13px', color: '#888' }}>Chargement...</div>}
            {articles.map((article) => (
              <div key={article.id} style={styles.articleItem}>
                <div style={styles.articleThumb}>
                  {article.image_url
                    ? <img src={article.image_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  }
                </div>
                <div style={styles.articleInfo}>
                  <div style={styles.articleName}>{article.title}</div>
                  <div style={styles.articleMeta}>{article.date || '—'}</div>
                  <span style={{ ...styles.catBadge, ...categoryClass(article.category) }}>{article.category}</span>
                </div>
                <button style={styles.delBtn} onClick={() => handleDelete(article.id)} title="Supprimer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6M14 11v6"/>
                  </svg>
                </button>
              </div>
            ))}
            {!loading && articles.length === 0 && (
              <div style={{ fontSize: '13px', color: '#aaa', textAlign: 'center', padding: '2rem 0' }}>Aucun article pour l'instant</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const StatCard = ({ label, value, sub }) => (
  <div style={styles.statCard}>
    <div style={styles.statLabel}>{label}</div>
    <div style={styles.statVal}>{value}</div>
    <div style={styles.statSub}>{sub}</div>
  </div>
);

const FormGroup = ({ label, children }) => (
  <div style={{ marginBottom: '0.9rem' }}>
    <label style={styles.formLabel}>{label}</label>
    {children}
  </div>
);

const SidebarItem = ({ icon, label, active, onClick }) => {
  const icons = {
    file: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
  };
  return (
    <div style={{ ...styles.navItem, ...(active ? styles.navItemActive : {}) }} onClick={onClick}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {icons[icon]}
      </svg>
      {label}
    </div>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = {
  admin: { display: 'flex', minHeight: '100vh', background: '#f4f5f7' },
  sidebar: { width: '220px', background: '#0f2744', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexShrink: 0 },
  sidebarLogo: { color: '#fff', fontSize: '15px', fontWeight: '600', padding: '0 0.5rem 1.2rem', borderBottom: '0.5px solid rgba(255,255,255,0.15)', marginBottom: '0.5rem' },
  navItem: { color: 'rgba(255,255,255,0.6)', fontSize: '13px', padding: '0.55rem 0.75rem', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' },
  navItemActive: { background: 'rgba(91,196,168,0.18)', color: '#5bc4a8' },
  main: { flex: 1, padding: '1.5rem', overflowY: 'auto' },
  topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
  pageTitle: { fontSize: '18px', fontWeight: '500', color: '#1a1a2e' },
  pageSub: { fontSize: '12px', color: '#888', marginTop: '2px' },
  adminBadge: { background: '#e1f5ee', color: '#0f6e56', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '1.5rem' },
  statCard: { background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '10px', padding: '1rem 1.2rem' },
  statLabel: { fontSize: '12px', color: '#888', marginBottom: '4px' },
  statVal: { fontSize: '22px', fontWeight: '500', color: '#1a1a2e' },
  statSub: { fontSize: '11px', color: '#aaa', marginTop: '2px' },
  contentGrid: { display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1rem' },
  panel: { background: '#fff', border: '0.5px solid #e5e5e5', borderRadius: '10px', padding: '1.2rem' },
  panelTitle: { fontSize: '14px', fontWeight: '500', color: '#1a1a2e', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid #e5e5e5' },
  formLabel: { fontSize: '12px', color: '#666', marginBottom: '4px', display: 'block' },
  input: { width: '100%', background: '#f8f8f8', border: '0.5px solid #ddd', borderRadius: '6px', padding: '0.5rem 0.7rem', fontSize: '13px', color: '#1a1a2e', outline: 'none', fontFamily: 'inherit' },
  submitBtn: { width: '100%', background: '#0f2744', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.65rem', fontSize: '13px', cursor: 'pointer', marginTop: '0.25rem' },
  successBanner: { background: '#e1f5ee', color: '#0f6e56', fontSize: '13px', padding: '0.6rem 0.8rem', borderRadius: '6px', marginBottom: '1rem' },
  errorBanner: { background: '#fcebeb', color: '#a32d2d', fontSize: '13px', padding: '0.6rem 0.8rem', borderRadius: '6px', marginBottom: '1rem' },
  articleItem: { display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '0.75rem 0', borderBottom: '0.5px solid #f0f0f0' },
  articleThumb: { width: '44px', height: '44px', borderRadius: '6px', background: '#f4f4f4', flexShrink: 0, border: '0.5px solid #e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  articleInfo: { flex: 1, minWidth: 0 },
  articleName: { fontSize: '13px', fontWeight: '500', color: '#1a1a2e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  articleMeta: { fontSize: '11px', color: '#aaa', marginTop: '2px' },
  catBadge: { display: 'inline-block', fontSize: '10px', padding: '2px 7px', borderRadius: '10px', marginTop: '3px' },
  delBtn: { width: '26px', height: '26px', borderRadius: '5px', border: '0.5px solid #e5e5e5', background: 'transparent', color: '#aaa', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  lockWrapper: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f5f7' },
  lockBox: { textAlign: 'center', width: '280px', background: '#fff', borderRadius: '14px', padding: '2.5rem 2rem', border: '0.5px solid #e5e5e5' },
  lockIcon: { width: '48px', height: '48px', background: '#0f2744', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' },
  lockTitle: { fontSize: '16px', fontWeight: '500', color: '#1a1a2e', marginBottom: '0.3rem' },
  lockSub: { fontSize: '12px', color: '#aaa', marginBottom: '1.2rem' },
  lockInput: { width: '100%', background: '#f8f8f8', border: '0.5px solid #ddd', borderRadius: '6px', padding: '0.55rem 0.8rem', fontSize: '13px', marginBottom: '0.75rem', textAlign: 'center', letterSpacing: '0.15em', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' },
  lockBtn: { width: '100%', background: '#0f2744', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.6rem', fontSize: '13px', cursor: 'pointer' },
  uploadBtn: { background: '#f0f4ff', color: '#0f2744', border: '0.5px solid #c0ccee', borderRadius: '6px', padding: '0.5rem 0.9rem', fontSize: '13px', cursor: 'pointer' },
};

export default AdminPage;