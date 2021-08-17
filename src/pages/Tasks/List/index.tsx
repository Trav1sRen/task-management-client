import React, { useEffect } from 'react';
import store from '@/store';

const List = () => {
  const { loading, request } = store.useModel('tasks');

  useEffect(() => {
    (async function () {
      await request();
    })();
  });

  return loading ? <p>Loading your tasks...</p> : <></>;
};

export default List;
