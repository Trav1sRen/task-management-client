import React from 'react';
import { Search as SearchBox } from '@alifd/next';
import styles from './index.module.scss';
import store from '@/store';
import { NO_STATUS_FILTER } from '@/constants/task';
import * as _ from 'lodash';

const Search = () => {
  const { getTasks } = store.useModelDispatchers('task');
  let { statusDict } = store.useModelState('taskStatus');

  statusDict = _.isEmpty(statusDict) ? JSON.parse(window.localStorage.statusDict) : statusDict;

  const handleSearch = (searchVal: string, filterVal: string) => {
    getTasks({
      search: searchVal === '' ? undefined : searchVal,
      status: filterVal === NO_STATUS_FILTER ? undefined : filterVal,
    });
  };

  const statusFilter = [
    { label: NO_STATUS_FILTER, value: NO_STATUS_FILTER },
    ...Object.values(statusDict).map((statusName: string) => ({ label: statusName, value: statusName })),
  ];

  return (
    <div className={styles.searchWrapper}>
      <SearchBox
        size="large"
        placeholder="Please input the search keyword..."
        filter={statusFilter}
        filterProps={{ autoWidth: false }}
        defaultFilterValue={NO_STATUS_FILTER}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Search;
