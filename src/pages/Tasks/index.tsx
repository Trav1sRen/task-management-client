import React from 'react';
import Header from '@/pages/Tasks/Header';
import styles from './index.module.scss';

const Tasks = () => {
  return (
    <div className={styles.tasksWrapper}>
      <Header />
    </div>
  );
};

export default Tasks;
