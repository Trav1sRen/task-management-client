export default {
  signUp: (username, password) => ({
    url: '/auth/signup',
    method: 'POST',
    data: { username, password },
  }),

  signIn: (username, password) => ({
    url: '/auth/signin',
    method: 'POST',
    data: { username, password },
  }),
};
