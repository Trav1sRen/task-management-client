import React, { useState } from 'react';
import styles from '@/pages/SignUp/index.module.scss';
import { Box, Divider, Form, Input } from '@alifd/next';
import { useRequest } from 'ice';
import user from '../../services/user';

const FormItem = Form.Item;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { request } = useRequest(user.signUp);

  const handleSubmit = async () => {
    // TODO: What is the return type of request()?
    await request(username, password);
  };

  return (
    <div className={styles.signUpWrapper}>
      <Box className={styles.signUpBox}>
        <h1>Join us!</h1>
        <p>Start managing tasks easily.</p>
        <Form>
          <FormItem
            required
            requiredMessage="Please input the username!"
            minLength={6}
            minmaxLengthMessage="Length of username should be over 6"
          >
            <Input name="username" placeholder="Username" onChange={(val) => setUsername(val)} />
          </FormItem>
          <FormItem
            required
            requiredMessage="Please input the password!"
            minLength={6}
            minmaxLengthMessage="Length of password should be over 6"
            pattern={/^(?=.*[A-Z])(?=.*[!@#$&*0-9])(?=.*[a-z]).{6,}$/i}
            patternMessage="Passwords must contain at least 1 upper case letter,
            1 lower case letter and one number OR special character."
            patternTrigger="onBlur"
          >
            <Input.Password name="password" placeholder="Password" onChange={(val) => setPassword(val)} />
          </FormItem>
          <FormItem>
            <Divider />
          </FormItem>
          <FormItem>
            <Form.Submit type="primary" validate onClick={handleSubmit}>
              SIGN UP
            </Form.Submit>
          </FormItem>
        </Form>
      </Box>
    </div>
  );
};

export default SignUp;
