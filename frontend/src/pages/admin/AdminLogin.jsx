import React from "react";
import "../../styles/admin/AdminLogin.scss";

const AdminLogin = ({
  passwordInput,
  setPasswordInput,
  passwordError,
  onLogin,
}) => {
  return (
    <div className="admin-login">
      <div className="admin-login__box">
        <div className="admin-login__icon">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5bc4a8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <div className="admin-login__title">Espace admin</div>
        <div className="admin-login__subtitle">SKYE Foundation</div>

        <input
          type="password"
          placeholder="Mot de passe"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onLogin()}
          className="admin-login__input"
        />

        {passwordError && (
          <div className="admin-login__error">Mot de passe incorrect</div>
        )}

        <button className="admin-login__button" onClick={onLogin}>
          Accéder
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;