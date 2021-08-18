import React, { useEffect } from 'react';
import store from '@/store';

const List = () => {
  const [{ tasks }, { getTasks }] = store.useModel('task');
  const {
    getTasks: { isLoading, error },
  } = store.useModelEffectsState('task');

  useEffect(() => {
    (async function () {
      await getTasks({});
    })();
  });

  return <></>;
};

export default List;
