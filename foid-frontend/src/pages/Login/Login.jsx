import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Login.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
const navigate = useNavigate();

const [form, setForm] = useState({ email: '', password: '', remember: false });
const [errors, setErrors] = useState({});
const [showPassword, setShowPassword] = useState(false);
const [loading, setLoading] = useState(false);
const [serverError, setServerError] = useState('');

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setServerError('');
};

const validate = () => {
    const found = {};
    if (!form.email.trim()) found.email = 'Enter your email address.';
    else if (!EMAIL_PATTERN.test(form.email)) found.email = 'Enter a valid email, like name@example.com.';
    if (!form.password) found.password = 'Enter your password.';
    else if (form.password.length < 6) found.password = 'Password must be at least 6 characters.';
    return found;
};

const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate();
    if (Object.keys(found).length > 0) {
    setErrors(found);
    return;
    }

    setLoading(true);
    setServerError('');

    try {
      // TODO: replace this fake delay with your real login API call, e.g.
      // await axios.post('/api/auth/login', { email: form.email, password: form.password });
    await new Promise((resolve) => setTimeout(resolve, 800));

      navigate('/'); // go to Home after a successful login
    } catch (err) {
    setServerError('Email or password is incorrect. Try again.');
    } finally {
    setLoading(false);
    }
};
return (
    <main className="login-page">
    <div className="login-card">
        {/* LEFT: brand panel (hidden on mobile) */}
        <aside className="login-brand">
        <img src="/foid-assets/logo1.png" alt="FOID Logo" />
        <h2>FOID</h2>
        <p>Log in to keep up with Education, Events and everything happening at FOID.</p>
        </aside>

        {/* RIGHT: form */}
        <section className="login-form-area">
        <h1>Welcome back</h1>
        <p className="login-subtitle">Log in to your FOID account.</p>

        <form onSubmit={handleSubmit} noValidate>
            {serverError && (
            <p className="login-alert" role="alert">{serverError}</p>
            )}

            <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={errors.email ? 'has-error' : ''}
            />
            {errors.email && <span id="email-error" className="login-error">{errors.email}</span>}
            </div>
            <div className="login-field">
            <label htmlFor="password">Password</label>
            <div className="password-wrap">
                <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className={errors.password ? 'has-error' : ''}
                />
                <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
            </div>
            {errors.password && <span id="password-error" className="login-error">{errors.password}</span>}
            </div>

            <label className="login-remember">
            <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
            />
            Remember me
            </label>

            <button type="submit" className="login-submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>

        <p className="login-switch">
            New to FOID? <Link to="/signup">Sign Up</Link>
        </p>
        </section>
    </div>
    </main>
    );
};

export default Login;
