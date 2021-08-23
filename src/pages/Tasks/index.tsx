import React from 'react';
import Header from '@/pages/Tasks/Header';
import styles from './index.module.scss';
import List from '@/pages/Tasks/List';
import Search from '@/pages/Tasks/Search';

const Tasks = () => {
  return (
    <div className={styles.tasksWrapper}>
      <Header />
      <Search />
      <List />
    </div>
  );
};

export default Tasks;
