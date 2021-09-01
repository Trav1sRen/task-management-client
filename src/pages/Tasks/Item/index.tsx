import React from 'react';
import { ITask } from '@/types/task';
import { Box, Icon, Select } from '@alifd/next';
import styles from './index.module.scss';
import store from '@/store';

const { Option } = Select;

const Item = ({ id, title, status: statusId, description }: ITask) => {
  const statusDict = JSON.parse(window.localStorage.getItem('statusDict')!);

  const { deleteTask, updateTaskStatus } = store.useModelDispatchers('task');

  const handleDeleteItem = () => deleteTask(id);

  const handleStatusChange = (statusToChange: string) => updateTaskStatus({ id, data: { status: statusToChange } });

  return (
    <Box className={styles.itemWrapper}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Box direction="row" align="center" justify="space-between" className={styles.bottomWrapper}>
        <Select defaultValue={statusDict[statusId]} className={styles.statusSelect} onChange={handleStatusChange}>
          {Object.values(statusDict).map((statusName: string) => (
            <Option key={statusName} value={statusName}>
              {statusName}
            </Option>
          ))}
        </Select>
        <Icon type="ashbin" className={styles.deleteIcon} onClick={handleDeleteItem} />
      </Box>
    </Box>
  );
};

export default Item;
