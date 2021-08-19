import React from 'react';
import Header from '@/pages/Tasks/Header';
import styles from './index.module.scss';
import List from '@/pages/Tasks/List';

const Tasks = () => {
  return (
    <div className={styles.tasksWrapper}>
      <Header />
      <List />
    </div>
  );
};

export default Tasks;
