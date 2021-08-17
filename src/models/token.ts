interface IState {
  accessToken: string;
}

export default {
  state: {
    accessToken: '',
  },

  reducers: {
    setAccessToken: (prevState: IState, payload: IState) => ({ ...prevState, ...payload }),
  },
};
