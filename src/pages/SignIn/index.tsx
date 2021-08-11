import React from 'react';
import { Box, Form, Input } from '@alifd/next';
import styles from './index.module.scss';
import { Link } from 'ice';

const FormItem = Form.Item;

const SignIn = () => {
  const handleSubmit = () => {};

  return (
    <div className={styles.signInWrapper}>
      <Box className={styles.signInBox}>
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
    </div>
  );
};

export default SignIn;
