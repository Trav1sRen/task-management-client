interface IState {
  accessToken: string;
}

export default {
  state: {
    accessToken: '',
  },

  reducers: {
    update: (prevState: IState, payload: IState) => ({ ...prevState, ...payload }),
  },
};
