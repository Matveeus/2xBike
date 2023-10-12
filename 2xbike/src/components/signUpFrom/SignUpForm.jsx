import React, { useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../../assets/styles/sign-up-form.css';
import arrowDown from '../../assets/images/icons/arrow-down.svg';

export default function SignUpForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

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

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = e => {
    setPasswordRepeat(e.target.value);
  };

  const onSubmit = () => {
    console.log(name, email, password, passwordConfirm);
  };

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#010020',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#010020',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#010020',
        },
        '&:hover fieldset': {
          borderColor: '#010020',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#010020',
        },
      },
    },
  })(TextField);

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <CssTextField
                className="sign-in-form-input"
                type="text"
                placeholder={t('sign-up.name-placeholder')}
                onChange={handleNameChange}
                {...register('name', {
                  required: t('sign-up.name-req'),
                })}
                error={!!errors?.name}
                helperText={!!errors.name && errors.name.message}
                fullWidth
              />
              <CssTextField
                className="sign-in-form-input"
                type="email"
                placeholder={t('sign-up.email-placeholder')}
                onChange={handleEmailChange}
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
              />
              <CssTextField
                className="sign-in-form-input"
                type={showPassword ? 'text' : 'password'}
                placeholder={t('sign-up.password-placeholder')}
                onChange={handlePasswordChange}
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
              />
              <CssTextField
                className="sign-in-form-input"
                type={showPassword ? 'text' : 'password'}
                placeholder={t('sign-up.confirm-password-placeholder')}
                onChange={handlePasswordConfirmChange}
                {...register('passwordConfirm', {
                  required: t('sign-up.password-confirm-req'),
                  validate: value => value === password,
                })}
                error={!!errors.passwordConfirm}
                helperText={!!errors.passwordConfirm && errors.passwordConfirm.message}
                fullWidth
              />
              <button className="dark-button submit-sign-up" type="submit">
                {t('sign-up.submit-form')}
              </button>
            </form>
          </Box>
        </Box>
        <Box className="have-account">
          <p>{t('sign-up.have-account')}</p>
          <span>{t('sign-up.have-account-log-in')}</span>
        </Box>
      </Box>
    </Box>
  );
}
