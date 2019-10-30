import axios from 'axios';

export const baseUrl = process.env.REACT_APP_API;
export const apiVersion = process.env.REACT_APP_API_VERSION;

const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NzAyMjQ2ODAsImV4cCI6MTU3MDgyOTQ4MCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInBob25lIjoiMzgwNjM5OTk5OTk5In0.gh0t7syCoBp7YW6gf1kgW8yBTsovcy9IBbkhMcoBQPihAJOsDa8dRPQJd8wnnoah2BLkcxWd7ckFxha0MWZXBcOuVHvDAtef0Inc3xVz8luLmu0OR5EPJkA16LZ7Cgww9n_WyokvqRRSa2AZJbmO0ij3sg9YCumbU-ynTwJMKKJzjJcAl1BZik4_nn2drcKm-aPYFbHkLIT54QB4oRJf5Fi8Z5k5a_NtaNJPXVWo2LmkURGL2bYbAgjP8SRBHtiKJcv18nYlgCieQIE7mTF8gQOVOyG1xgr6NTa1bgkqEY45ZUiAkPmnZjOYixK96QvEwbikYw-BxyWy4PGM9-QxmElQfl8cjPIdqEDNvZb6KFGhWFlcVyzRdjebRz9pZ8p_J9HubBSrAF1nT1-ZSwvznOIUBXqqZm6zrqw3QmXtIM-LEXYckb-za9pyA2et1Dy5Dp5ne0jhW2cXaPaWtAGFjl-ZZWjHUOeW-AUp3CQ7_fBKeq2oQWYKIVSKw_zF6paD2AbJr1qnMTbu_xjF1GZS4yJfWCW0FYYAFfec6yGWtQxUIhdSSBmkQuWPxIwFaZJikDPuvG5R9JFMgrsEI90rAxPSpTLk4FoPYXzSLuuQuzoqIq7wgyTtoyS11VYDTwuYjUHjXekACln5qaHuVJR3PHK8nn1SS0mCSu6McIGGEAo';

export const authService = Object.freeze({
  userInfoKey: 'userInfo',
  setToken(token) {
    const userInfo = this.getUserInfo();
    userInfo.token = token;
    this.setUserInfo(userInfo);
  },
  getToken() {
    const userInfo = this.getUserInfo();
    return userInfo.token;
  },
  getUserInfo() {
    const userInfoFromStore = localStorage.getItem(this.userInfoKey) || '{}';
    return JSON.parse(userInfoFromStore);
  },
  setUserInfo(userInfo = {}) {
    const userInfoToStorage = JSON.stringify(userInfo);
    localStorage.setItem(this.userInfoKey, userInfoToStorage);
  },
});

const instance = axios.create({
  baseURL: `${baseUrl}/api/${apiVersion}`,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // https://github.com/axios/axios#handling-errors

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      const { data } = error.response;

      if (data.code >= 400) {
        // TODO dispatch 400 error

        if (data.code === 404) {
          // TODO dispatch 404 error
        }

        if (data.code === 401) {
          // TODO dispatch 401 error
        }
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      // TODO dispatch error inside Server
    }

    // TODO dispatch 500 error
  },
);

instance.interceptors.request.use(
  (config) => {
    const extendedConfig = config;
    // const token = authService.getToken();
    const token = bearerToken;
    if (token) {
      extendedConfig.headers.Authorization = `Bearer ${token}`;
    }
    return extendedConfig;
  },
);

export const api = Object.freeze({
  // Fetch
  user: {
    logout() {},
    // eslint-disable-next-line no-unused-vars
    signUp(userData) {
      return instance.post('/users/signup', {
        name: 'Yuri',
        lastname: 'Kopyl',
        client_type: 1,
        phone: '380637020239',
        password: 'qFAsAET260588',
      });
    },
    signIn(loginData) {
      window.console.log(loginData);
    },
  },
  statistics: {
    getStatistics() { },
  },
});
