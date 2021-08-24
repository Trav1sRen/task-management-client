import React from 'react';
import { Search as SearchBox } from '@alifd/next';
import { TaskStatus } from '@/types/task';
import styles from './index.module.scss';
import store from '@/store';

const Search = () => {
  const { getTasks } = store.useModelDispatchers('task');

  const handleSearch = (searchVal: string, filterVal: TaskStatus) => {
    getTasks({
      search: searchVal === '' ? undefined : searchVal,
      status: filterVal === TaskStatus.NO_STATUS ? undefined : filterVal,
    });
  };

  const statusFilter = [
    { label: TaskStatus.NO_STATUS, value: TaskStatus.NO_STATUS },
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
        filterProps={{ autoWidth: false }}
        defaultFilterValue={TaskStatus.NO_STATUS}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Search;
