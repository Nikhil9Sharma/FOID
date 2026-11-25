import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './SignUp.css';

const API_URL = 'http://localhost:3000/api/users'; // same endpoint as your JoiningForm

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\-\s\d]{7,20}$/;

const emptyForm = {
firstName: '',
lastName: '',
dob: '',
phone: '',
address: '',
state: '',
zipCode: '',
country: '',
email: '',
password: '',
confirmPassword: '',
};

// One reusable field (defined outside SignUp so inputs don't lose focus on re-render)
const Field = ({ name, label, type = 'text', placeholder, autoComplete, max, form, errors, onChange, trailing }) => (
<div className="signup-field">
    <label htmlFor={name}>{label}</label>
    <div className="signup-input-wrap">
    <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        max={max}
        value={form[name]}
        onChange={onChange}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className={errors[name] ? 'has-error' : ''}
    />
    {trailing}
    </div>
    {errors[name] && <span id={`${name}-error`} className="signup-error">{errors[name]}</span>}
</div>
);

const SignUp = () => {
const navigate = useNavigate();

const [form, setForm] = useState(emptyForm);
const [errors, setErrors] = useState({});
const [showPassword, setShowPassword] = useState(false);
const [loading, setLoading] = useState(false);
const [serverError, setServerError] = useState('');

const today = new Date().toISOString().split('T')[0];

const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setServerError('');
};

const validate = () => {
    const found = {};
    if (!form.firstName.trim()) found.firstName = 'Enter your first name.';
    if (!form.lastName.trim()) found.lastName = 'Enter your last name.';

    if (!form.dob) found.dob = 'Select your date of birth.';
    else if (form.dob > today) found.dob = 'Date of birth cannot be in the future.';

    if (!form.phone.trim()) found.phone = 'Enter your mobile number.';
    else if (!PHONE_PATTERN.test(form.phone)) found.phone = 'Enter a valid mobile number.';

    if (!form.address.trim()) found.address = 'Enter your address.';
    if (!form.state.trim()) found.state = 'Enter your state.';
    if (!form.zipCode.trim()) found.zipCode = 'Enter your zip / pin code.';
    if (!form.country.trim()) found.country = 'Enter your country.';

    if (!form.email.trim()) found.email = 'Enter your email address.';
    else if (!EMAIL_PATTERN.test(form.email)) found.email = 'Enter a valid email, like name@example.com.';

    if (!form.password) found.password = 'Create a password.';
    else if (form.password.length < 8) found.password = 'Password must be at least 8 characters.';

    if (!form.confirmPassword) found.confirmPassword = 'Re-enter your password.';
    else if (form.confirmPassword !== form.password) found.confirmPassword = 'Passwords do not match.';

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
      const { confirmPassword, ...data } = form; // don't send confirmPassword
    await axios.post(API_URL, data);
      navigate('/login'); // account created, go to Login
    } catch (error) {
    setServerError(
        error.response?.data?.error || 'Could not create your account. Try again.'
    );
    } finally {
    setLoading(false);
    }
};

const fieldProps = { form, errors, onChange: handleChange };

const passwordToggle = (
    <button
    type="button"
    className="signup-toggle"
    onClick={() => setShowPassword((prev) => !prev)}
    aria-label={showPassword ? 'Hide passwords' : 'Show passwords'}
    >
    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
    </button>
);

return (
    <main className="signup-page">
    <div className="signup-card">
        {/* LEFT: brand panel (hidden on tablet and mobile) */}
        <aside className="signup-brand">
        <img src="/foid-assets/logo1.png" alt="FOID Logo" />
        <h2>Join FOID</h2>
        <p>Create an account to follow Education, Events and everything happening at FOID.</p>
        </aside>

        {/* RIGHT: form */}
        <section className="signup-form-area">
        <h1>Create your account</h1>
        <p className="signup-subtitle">Fill in your details to join FOID.</p>

        <form onSubmit={handleSubmit} noValidate>
            {serverError && <p className="signup-alert" role="alert">{serverError}</p>}

            <div className="signup-row">
            <Field {...fieldProps} name="firstName" label="First Name" placeholder="Enter your first name" autoComplete="given-name" />
            <Field {...fieldProps} name="lastName" label="Last Name" placeholder="Enter your last name" autoComplete="family-name" />
            </div>

            <div className="signup-row">
            <Field {...fieldProps} name="dob" label="Date of Birth" type="date" max={today} autoComplete="bday" />
            <Field {...fieldProps} name="phone" label="Mobile No." type="tel" placeholder="+91 98765 43210" autoComplete="tel" />
            </div>

            <div className="signup-row one">
            <Field {...fieldProps} name="address" label="Address" placeholder="Enter your full address" autoComplete="street-address" />
            </div>

            <div className="signup-row three">
            <Field {...fieldProps} name="state" label="State" autoComplete="address-level1" />
            <Field {...fieldProps} name="zipCode" label="Zip / Pin Code" autoComplete="postal-code" />
            <Field {...fieldProps} name="country" label="Country" autoComplete="country-name" />
            </div>

            <div className="signup-row one">
            <Field {...fieldProps} name="email" label="Email ID" type="email" placeholder="name@example.com" autoComplete="email" />
            </div>

            <div className="signup-row">
            <Field
                {...fieldProps}
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                trailing={passwordToggle}
            />
            <Field
                {...fieldProps}
                name="confirmPassword"
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Re-enter your password"
                autoComplete="new-password"
            />
            </div>

            <button type="submit" className="signup-submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
            </button>
        </form>

        <p className="signup-switch">
            Already have an account? <Link to="/login">Login</Link>
        </p>
        </section>
    </div>
    </main>
);
};

export default SignUp;