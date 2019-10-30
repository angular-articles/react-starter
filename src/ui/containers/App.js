import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  Redirect, Route, Switch, Link,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';

// UI
import SignIn from '../pages/SignIn/SignIn';

// Engine
import { uiActions } from '../../engine/core/ui/actions';
import { userActionAsync } from '../../engine/core/user/saga/actions';
import { selectors } from '../../engine/config/selectors';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App(props) {
  const {
    loading, loadingStatus, history, user, signUp,
  } = props;

  const handleClick = () => {
    loading(!loadingStatus);
  };

  const handleClickLogin = () => {
    signUp({ name: 'Yuri' });
  };

  return (
    <ConnectedRouter history={history}>
      <Link to="/">Base</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/sign-in">Sign in</Link>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
      <div>
        <button onClick={handleClick} type="button">Click me</button>
        <button onClick={handleClickLogin} type="button">Login</button>
        ! - {`${loadingStatus}`} - !
        ! - {`${user}`} - !
      </div>
    </ConnectedRouter>
  );
}

App.propTypes = {
  loadingStatus: PropTypes.bool,
  user: PropTypes.object,
  loading: PropTypes.func,
  signUp: PropTypes.func,
  history: PropTypes.object,
};

App.defaultProps = {
  loadingStatus: false,
};

function mapStateToProps(state) {
  return {
    loadingStatus: selectors.ui.isLoading(state),
    profile: selectors.user.user(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loading: (status) => dispatch(uiActions.loading(status)),
    signUp: (data) => dispatch(userActionAsync.signUp(data)),
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(App);
