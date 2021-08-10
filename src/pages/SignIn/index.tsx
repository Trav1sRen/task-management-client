import React from 'react';
import { Box, Form, Input } from '@alifd/next';
import { Link } from 'ice';
import styles from './index.module.scss';

const FormItem = Form.Item;

const SignIn = () => {
  const handleSubmit = () => {};

  return (
    <Box align="center" justify="center" className={styles.signInWrapper}>
      <h1>Hello!</h1>
      <p>Fill in your username and password to sign in.</p>
      <Form>
        <FormItem required requiredMessage="Please input your username!">
          <Input name="username" placeholder="Username" />
        </FormItem>
        <FormItem required requiredMessage="Please input your password!">
          <Input.Password name="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Form.Submit type="primary" validate onClick={handleSubmit}>
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
  );
};

export default SignIn;
