const jsonServer = require('json-server');

const port = 4000;
const routerPath = './json-server/db.json';
const url = '/api/v1';
const server = jsonServer.create();
const router = jsonServer.router(routerPath);
const middleware = jsonServer.defaults();

const dbPush = (key, data) => {
  const db = router.db.getState();
  db[key].push(data);
  router.db.setState(db);
  router.db.write(db);
};

server.use(middleware);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  // add your authorization logic here
  const findUser = router.db.getState().users.find((user) => (user.token === req.headers.authorization.substr(7)));

  if (req.url === `${url}/users/signup` || req.url === `${url}/users/login` || findUser) {
    next();
  } else {
    res.sendStatus(401);
  }
});

// Create user
server.post(`${url}/users/signup`, (req, res) => {
  if (!router.db.getState().users.some((user) => (user.phone === req.body.phone))) {
    const token = new Date().getTime();

    dbPush('users', { ...req.body, token });
    return res.json({
      status: 'success',
      message: 'Пользователь был успешно создан',
      token,
    });
  }

  return res.status(400).json({
    error: {
      code: 400,
      message: 'Bad request',
    },
  });
});

// Logout user
server.post(`${url}/users/logout`, (req, res) => {
  if (!req.req.headers.authorization) {
    return res.status(400).json({
      error: {
        code: 400,
        message: 'Bad request',
      },
    });
  }

  const findUser = router.db.getState().users.find((user) => (user.token === req.headers.authorization.substr(7)));

  if (findUser) {
    return res.json({
      name: findUser.name,
    });
  }

  return res.status(401).json({
    code: 401,
    message: 'Bad credentials',
  });
});

// Login user
server.post(`${url}/users/login`, (req, res) => {
  if (!req.body.password || !req.body.phone) {
    return res.status(400).json({
      error: {
        code: 400,
        message: 'Bad request',
      },
    });
  }

  const findUser = router.db.getState().users.find((user) => (user.phone === req.body.phone));

  if (!findUser || findUser.password !== req.body.password) {
    return res.status(401).json({
      code: 401,
      message: 'Bad credentials',
    });
  }

  delete findUser.password;

  return res.json({ ...findUser });
});

server.use(url, router);
server.listen(4000, () => {
  global.console.log('\x1b[32m%s\x1b[0m', `JSON Server is running on http://localhost:${port}${url}`);
});
