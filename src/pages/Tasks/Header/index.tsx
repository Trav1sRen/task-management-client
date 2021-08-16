import React from 'react';
import { Box, Button, Icon } from '@alifd/next';
import styles from './index.module.scss';

const Header = () => {
  return (
    <Box direction="row" className={styles.headerWrapper}>
      <Box align="flex-start" className={styles.headerBox}>
        <h1>Get things done</h1>
      </Box>
      <Box direction="row" align="center" justify="flex-end" className={styles.headerBox}>
        <Button type="primary" size="large">
          <Icon type="add" />
          <div className={styles.iconText}>create task</div>
        </Button>
        <Icon type="exit" size="large" className={styles.exitIcon} />
      </Box>
    </Box>
  );
};

export default Header;
