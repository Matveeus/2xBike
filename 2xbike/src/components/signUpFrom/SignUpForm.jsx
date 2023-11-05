/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Alert, Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../../assets/styles/sign-up-form.css';
import { signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../services/firebase';
import Loader from '../Loader';
import useAuthState from '../../hooks/useAuthState';
import arrowDown from '../../assets/images/icons/arrow-down.svg';

export default function SignUpForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleFormChange = () => {
    setLoginForm(!loginForm);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordRepeat] = useState('');
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = e => {
    setPasswordRepeat(e.target.value);
  };

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });
    } catch (err) {
      setError(t('sign-up.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(t('sign-up.error'));
    } finally {
      setIsLoading(false);
    }
  };

  useAuthState();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box className="container">
      <Box>
        <Box className="sign-up-block" id="sign-up-form">
          <h1 className="heading">{t('sign-up.heading').toUpperCase()}</h1>
          <Box className="sign-in-form-part">
            <Box className="form-info-block">
              <img src={arrowDown} alt="arrow down" />
              <p>{t('sign-up.info')}</p>
            </Box>
            <form onSubmit={handleSubmit(loginForm ? handleLogin : handleRegister)}>
              {loginForm ? null : (
                <TextField
                  className="sign-in-form-input"
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
                className="sign-in-form-input"
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
                className="sign-in-form-input"
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
                  className="sign-in-form-input"
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
              <button className="dark-button submit-sign-up" type="submit">
                {t('sign-up.submit-form')}
              </button>
            </form>
          </Box>
        </Box>
        {loginForm ? (
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
        {error && (
          <Alert severity="error" onClose={() => setError('')} sx={{ width: '250px', mt: '10px' }}>
            {error}
          </Alert>
        )}
      </Box>
    </Box>
  );
}
