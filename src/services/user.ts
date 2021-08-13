export default {
  signUp: (username, password) => ({
    url: '/auth/signup',
    method: 'POST',
    data: { username, password },
  }),
};
