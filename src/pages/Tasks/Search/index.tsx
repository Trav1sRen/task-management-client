import React from 'react';
import { Search as SearchBox } from '@alifd/next';
import { TaskStatus } from '@/types/task';
import styles from './index.module.scss';

const Search = () => {
  const statusFilter = [
    { label: TaskStatus.OPEN, value: TaskStatus.OPEN },
    { label: TaskStatus.IN_PROGRESS, value: TaskStatus.IN_PROGRESS },
    { label: TaskStatus.DONE, value: TaskStatus.DONE },
  ];

  return (
    <div className={styles.searchWrapper}>
      <SearchBox
        size="large"
        placeholder="Please input the search keyword..."
        filter={statusFilter}
        defaultFilterValue="No Status Filter"
      />
    </div>
  );
};

export default Search;
