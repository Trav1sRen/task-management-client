import React, { useState } from 'react';
import styles from '@/pages/SignUp/index.module.scss';
import { Box, Divider, Form, Input, Message } from '@alifd/next';
import { useHistory, useRequest } from 'ice';
import user from '../../services/user';

const FormItem = Form.Item;

const SignUp = () => {
  const history = useHistory();

  const [signUpError, setSignUpError] = useState('');

  const { loading, request } = useRequest(user.signUp, {
    throwOnError: true,
  });

  const handleSubmit = async ({ username, password }, validationErr) => {
    if (!validationErr) {
      try {
        await request(username, password);
        history.push('/');
      } catch (error) {
        if (error.response?.status) {
          const {
            response: {
              data: { message },
              status,
            },
          } = error;
          ![500, 404].includes(status) && setSignUpError(message);
        }
      }
    }
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
            <Input name="username" placeholder="Username" />
          </FormItem>
          <FormItem
            required
            requiredMessage="Please input the password!"
            minLength={6}
            minmaxLengthMessage="Length of password should be over 6"
            pattern={/^(?=.*[A-Z])(?=.*[!@#$&*0-9])(?=.*[a-z]).{6,}$/}
            patternMessage="Passwords must contain at least 1 upper case letter,
            1 lower case letter and one number OR special character."
            patternTrigger="onBlur"
          >
            <Input.Password name="password" placeholder="Password" />
          </FormItem>
          <FormItem>
            <Divider />
          </FormItem>
          {signUpError && (
            <FormItem>
              <Message type="error">{signUpError}</Message>
            </FormItem>
          )}
          <FormItem>
            <Form.Submit type="primary" validate onClick={handleSubmit} disabled={loading}>
              SIGN UP
            </Form.Submit>
          </FormItem>
        </Form>
      </Box>
    </div>
  );
};

export default SignUp;
