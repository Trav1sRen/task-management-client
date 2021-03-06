import React, { useEffect } from 'react';
import store from '@/store';
import { ITask } from '@/types/task';
import Item from '@/pages/Tasks/Item';

const List = () => {
  const [{ tasks }, { getTasks }] = store.useModel('task');

  useEffect(() => {
    (async function () {
      await getTasks({});
    })();
  }, []);

  return (
    <ul>
      {tasks.map((task: ITask) => (
        <li key={task.id}>
          <Item {...task} />
        </li>
      ))}
    </ul>
  );
};

export default List;
