import React from 'react';
import { Box, Form, Input } from '@alifd/next';
import styles from './index.module.scss';
import store from '@/store';
import { ICreateTaskDto } from '@/types/task';
import { useHistory } from 'ice';

const FormItem = Form.Item;

const CreateTask = () => {
  const {
    createTask: { isLoading },
  } = store.useModelEffectsState('task');
  const { createTask } = store.useModelDispatchers('task');

  const history = useHistory();

  const handleSubmit = (formValues: ICreateTaskDto, validationErr) => {
    if (!validationErr) {
      createTask(formValues);
      history.replace('/tasks');
    }
  };

  return (
    <div className={styles.createTaskWrapper}>
      <Box align="flex-start" className={styles.createTaskBox}>
        <h1>Create a new task</h1>
        <p>Provide information about the task you wish to complete.</p>
        <Form className={styles.createTaskForm}>
          <FormItem required requiredMessage="Task title is required!">
            <Input name="title" placeholder="Title" aria-label="Title" />
          </FormItem>
          <FormItem required requiredMessage="Task description is required!">
            <Input.TextArea name="description" placeholder="Description" aria-label="Description" />
          </FormItem>
          <FormItem>
            <Form.Submit type="primary" validate onClick={handleSubmit} disabled={isLoading}>
              CREATE TASK
            </Form.Submit>
          </FormItem>
        </Form>
      </Box>
    </div>
  );
};

export default CreateTask;
