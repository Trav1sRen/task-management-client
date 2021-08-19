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
      <Box direction="row" className={styles.bottomWrapper}>
        <Box align="flex-start" className={styles.bottomBox}>
          <Select id="status" defaultValue={status} className={styles.statusSelect}>
            <Option value={TaskStatus.OPEN}>{TaskStatus.OPEN}</Option>
            <Option value={TaskStatus.DONE}>{TaskStatus.DONE}</Option>
            <Option value={TaskStatus.IN_PROGRESS}>{TaskStatus.IN_PROGRESS}</Option>
          </Select>
        </Box>
        <Box align="flex-end" justify="center" className={styles.bottomBox}>
          <Icon type="ashbin" className={styles.deleteIcon} />
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
