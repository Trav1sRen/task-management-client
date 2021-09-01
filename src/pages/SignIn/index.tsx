import React, { useState } from 'react';
import { Box, Divider, Form, Input, Message } from '@alifd/next';
import styles from './index.module.scss';
import { Link, useHistory, useRequest } from 'ice';
import userService from '@/services/user';
import store from '@/store';
import taskService from '@/services/task';

const FormItem = Form.Item;

const SignIn = () => {
  const { update: updateToken } = store.useModelDispatchers('token');
  const { update: updateStatusDict } = store.useModelDispatchers('taskStatus');

  const history = useHistory();

  const { loading, request } = useRequest(userService.signIn, {
    throwOnError: true,
  });

  const { request: requestStatusDict } = useRequest(taskService.getStatusDict);

  const [signInError, setSignInError] = useState('');

  const handleSubmit = async ({ username, password }, validationErr) => {
    if (!validationErr) {
      try {
        const { accessToken } = await request(username, password);
        updateToken({ accessToken });
        window.localStorage.accessToken = accessToken;

        const statusDict = await requestStatusDict(accessToken);
        updateStatusDict({ statusDict });
        window.localStorage.statusDict = JSON.stringify(statusDict);

        history.push('/tasks');
      } catch (error) {
        if (error.response?.status) {
          const {
            response: {
              data: { message },
              status,
            },
          } = error;
          ![500, 404].includes(status) && setSignInError(message);
        }
      }
    }
  };

  return (
    <div className={styles.signInWrapper}>
      <Box className={styles.signInBox}>
        <h1>Hello!</h1>
        <p>Fill in your username and password to sign in.</p>
        <Form>
          <FormItem
            required
            requiredMessage="Please input the username!"
            minLength={6}
            minmaxLengthMessage="Length of username should be over 6"
          >
            <Input name="username" placeholder="Username" />
          </FormItem>
          <FormItem
            required
            requiredMessage="Please input the password!"
            minLength={6}
            minmaxLengthMessage="Length of password should be over 6"
          >
            <Input.Password name="password" placeholder="Password" />
          </FormItem>
          <FormItem>
            <Divider />
          </FormItem>
          {signInError && (
            <FormItem>
              <Message type="error">{signInError}</Message>
            </FormItem>
          )}
          <FormItem>
            <Form.Submit type="primary" validate onClick={handleSubmit} disabled={loading}>
              SIGN IN
            </Form.Submit>
          </FormItem>
        </Form>
        <Link
          to={{
            pathname: '/sign-up',
          }}
          className={styles.signUpLink}
        >
          Don&apos;t have an account? Sign up now!
        </Link>
      </Box>
    </div>
  );
};

export default SignIn;
