import React from 'react';
import { Box, Button, Icon } from '@alifd/next';
import styles from './index.module.scss';
import { useHistory } from 'ice';
import store from '@/store';

const Header = () => {
  const { update: updateToken } = store.useModelDispatchers('token');
  const { update: updateStatusDict } = store.useModelDispatchers('taskStatus');

  const history = useHistory();

  const handleExit = () => {
    window.localStorage.removeItem('accessToken');
    updateToken({ accessToken: '' });

    window.localStorage.removeItem('statusDict');
    updateStatusDict({ statusDict: {} });

    history.replace('/');
  };

  const handleCreateTask = () => history.push('/tasks/create');

  return (
    <Box direction="row" className={styles.headerWrapper} justify="space-between">
      <h1>Get things done</h1>
      <Box direction="row" align="center">
        <Button type="primary" size="large" onClick={handleCreateTask}>
          <Icon type="add" />
          <div className={styles.iconText}>create task</div>
        </Button>
        <Icon type="exit" size="large" className={styles.exitIcon} onClick={handleExit} />
      </Box>
    </Box>
  );
};

export default Header;
