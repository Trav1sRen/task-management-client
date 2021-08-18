import React, { useEffect } from 'react';
import store from '@/store';

const List = () => {
  const [{ tasks }, { getTasks }] = store.useModel('tasks');

  useEffect(() => {
    (async function () {
      await getTasks();
    })();
  });

  return <></>;
};

export default List;
