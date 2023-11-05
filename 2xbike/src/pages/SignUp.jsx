import React, { useState } from 'react';
import { Alert, Box, IconButton, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import auth from '../services/firebase';
import useAuthState from '../hooks/useAuthState';
import HeaderLogin from '../components/header/HeaderLogin';
import bikes from '../assets/images/sign-up-bikes.png';
import '../assets/styles/signup.css';

export default function SignUp() {
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const [emailReset, setEmailReset] = useState('');
  const [emailReseted, setEmailReseted] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleFormChange = () => {
    if (resetForm === true) {
      setResetForm(false);
    }
    setLoginForm(!loginForm);
  };

  const handleFormChange2 = () => {
    setResetForm(true);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordRepeat] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleEmailResetChange = e => {
    setEmailReset(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = e => {
    setPasswordRepeat(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });
    } catch (err) {
      setError(err.message);
    } finally {
      console.log('Matveeus is watching you !');
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(t('sign-up.error'));
    } finally {
      console.log('Matveeus is watching you !');
    }
  };

  const triggerResetEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, emailReset);
      setEmailReseted(true);
    } catch (err) {
      console.log(err.message);
    }

    console.log('Password reset email sent');
  };

  useAuthState();
  return (
    <>
      <HeaderLogin />
      <Box className="container">
        <Box className="account-sign-up-inner">
          <Box className="inner-account-inner">
            {resetForm ? (
              <>
                <h2>{t('sign-up.reset-account')}</h2>
                {emailReseted ? (
                  <h3>
                    {t('sign-up.reseted-account-log-in')} {emailReset}
                  </h3>
                ) : (
                  <h3>{t('sign-up.reset-account-log-in')}</h3>
                )}
              </>
            ) : loginForm ? (
              <>
                <h2>{t('sign-up.welcome-up')}</h2>
                <h3>{t('sign-up.welcome-down')}</h3>
              </>
            ) : (
              <>
                <h2>{t('sign-up.create-up')}</h2>
                <h3>{t('sign-up.create-down')}</h3>
              </>
            )}
            {resetForm ? (
              <form onSubmit={handleSubmit(triggerResetEmail)}>
                <TextField
                  variant="standard"
                  className="sign-in-form-input-account"
                  type="email"
                  placeholder={t('sign-up.email-placeholder')}
                  {...register('email', {
                    required: t('sign-up.email-req'),
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: t('sign-up.email-invalid'),
                    },
                  })}
                  error={!!errors?.email}
                  helperText={!!errors.email && errors.email.message}
                  fullWidth
                  onChange={handleEmailResetChange}
                />
                <button className="dark-button submit-sign-up-account" type="submit">
                  {t('sign-up.submit-form')}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit(loginForm ? handleLogin : handleRegister)}>
                {loginForm ? null : (
                  <TextField
                    variant="standard"
                    className="sign-in-form-input-account"
                    type="text"
                    placeholder={t('sign-up.name-placeholder')}
                    {...register('name', {
                      required: t('sign-up.name-req'),
                    })}
                    error={!!errors?.name}
                    helperText={!!errors.name && errors.name.message}
                    fullWidth
                    onChange={handleNameChange}
                  />
                )}
                <TextField
                  variant="standard"
                  className="sign-in-form-input-account"
                  type="email"
                  placeholder={t('sign-up.email-placeholder')}
                  {...register('email', {
                    required: t('sign-up.email-req'),
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: t('sign-up.email-invalid'),
                    },
                  })}
                  error={!!errors?.email}
                  helperText={!!errors.email && errors.email.message}
                  fullWidth
                  onChange={handleEmailChange}
                />
                <TextField
                  variant="standard"
                  className="sign-in-form-input-account"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('sign-up.password-placeholder')}
                  {...register('password', {
                    required: t('sign-up.password-req'),
                    minLength: { value: 6, message: t('sign-up.password-length') },
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.password}
                  helperText={!!errors.password && errors.password.message}
                  fullWidth
                  onChange={handlePasswordChange}
                />
                {loginForm ? null : (
                  <TextField
                    variant="standard"
                    className="sign-in-form-input-account"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('sign-up.confirm-password-placeholder')}
                    {...register('passwordConfirm', {
                      required: t('sign-up.password-confirm-req'),
                      validate: passwordConfirm === password,
                    })}
                    error={!!errors.passwordConfirm}
                    helperText={!!errors.passwordConfirm && errors.passwordConfirm.message}
                    fullWidth
                    onChange={handlePasswordConfirmChange}
                  />
                )}
                <button onClick={handleFormChange2} type="button" className="forgot-password">
                  {t('sign-up.forgot')}
                </button>
                <button className="dark-button submit-sign-up-account" type="submit">
                  {t('sign-up.submit-form')}
                </button>
              </form>
            )}

            {!loginForm ? (
              <Box className="have-account">
                <p>{t('sign-up.have-account')}</p>
                <button type="button" onClick={handleFormChange}>
                  {t('sign-up.have-account-log-in')}
                </button>
              </Box>
            ) : (
              <Box className="have-account">
                <p>{t('sign-up.not-have-account')}</p>
                <button type="button" onClick={handleFormChange}>
                  {t('sign-up.not-have-account-log-in')}
                </button>
              </Box>
            )}
          </Box>
          {isMobile ? null : <img className="sign-up-bikes-image" src={bikes} alt="bikes" />}
        </Box>
      </Box>
      {error && (
        <Alert
          severity="error"
          onClose={() => setError('')}
          sx={{ width: '250px', position: 'absolute', bottom: '10px', left: '10px' }}
        >
          {error}
        </Alert>
      )}
    </>
  );
}
