import React from 'react';
import { Box, Button, Icon } from '@alifd/next';
import styles from './index.module.scss';
import { useHistory } from 'ice';
import store from '@/store';

const Header = () => {
  const { update } = store.useModelDispatchers('token');

  const history = useHistory();

  const handleExitClick = () => {
    window.localStorage.removeItem('accessToken');
    update({ accessToken: '' });
    history.replace('/');
  };

  return (
    <Box direction="row" className={styles.headerWrapper} justify="space-between">
      <h1>Get things done</h1>
      <Box direction="row" align="center">
        <Button type="primary" size="large">
          <Icon type="add" />
          <div className={styles.iconText}>create task</div>
        </Button>
        <Icon type="exit" size="large" className={styles.exitIcon} onClick={handleExitClick} />
      </Box>
    </Box>
  );
};

export default Header;
