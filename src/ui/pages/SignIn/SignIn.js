import React from 'react';
import * as PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// Helpers
import cx from 'classnames';

// UI
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import styles from './SignIn.jss';

function SignIn(props) {
  const { t } = props;
  const classes = makeStyles(styles)();
  const rootClassNames = cx(classes.root);

  return (
    <Grid container component="main" className={rootClassNames}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('Вход')}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label={t('Номер телефона')}
              name="phone"
              autoComplete="phone"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={t('Пароль')}
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('Запомнить меня')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {t('Войти')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#link" variant="body2">
                  {t('Забыли пароль?')}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#link" variant="body2">
                  {t('У вас нет аккаунта?')} {'Зарегистрироваться'}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                  Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

SignIn.propTypes = {
  t: PropTypes.func,
};

SignIn.defaultProps = {};

export default withTranslation()(SignIn);
