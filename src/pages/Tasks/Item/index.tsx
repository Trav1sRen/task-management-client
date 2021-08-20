import React from 'react';
import { ITask, TaskStatus } from '@/types/task';
import { Box, Icon, Select } from '@alifd/next';
import styles from './index.module.scss';

const { Option } = Select;

const Item = ({ id, title, status, description }: ITask) => {
  return (
    <Box className={styles.itemWrapper}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Box direction="row" align="center" justify="space-between" className={styles.bottomWrapper}>
        <Select id="status" defaultValue={status} className={styles.statusSelect}>
          <Option value={TaskStatus.OPEN}>{TaskStatus.OPEN}</Option>
          <Option value={TaskStatus.DONE}>{TaskStatus.DONE}</Option>
          <Option value={TaskStatus.IN_PROGRESS}>{TaskStatus.IN_PROGRESS}</Option>
        </Select>
        <Icon type="ashbin" className={styles.deleteIcon} />
      </Box>
    </Box>
  );
};

export default Item;
