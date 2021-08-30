import React, { useEffect } from 'react';
import Header from '@/pages/Tasks/Header';
import styles from './index.module.scss';
import List from '@/pages/Tasks/List';
import Search from '@/pages/Tasks/Search';
import { useRequest } from 'ice';
import taskService from '@/services/task';
import store from '@/store';

const Tasks = () => {
  const { accessToken } = store.useModelState('token');

  const { data, request } = useRequest(taskService.getStatusDict);

  useEffect(() => {
    (async function () {
      const { statusDict } = window.localStorage;

      if (!statusDict) {
        await request(accessToken === '' ? window.localStorage.accessToken : accessToken);
        window.localStorage.setItem('statusDict', data);
      }
    })();
  }, []);

  return (
    <div className={styles.tasksWrapper}>
      <Header />
      <Search />
      <List />
    </div>
  );
};

export default Tasks;
