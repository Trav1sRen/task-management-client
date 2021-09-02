interface IState {
  statusDict: { [key: number]: string };
}

export default {
  state: {
    statusDict: {},
  },

  reducers: {
    update: (prevState: IState, payload: IState) => ({ ...prevState, ...payload }),
  },
};
