import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation
const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={RegistrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // Simulate API call
          console.log('Form submitted:', values);
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Registration</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="p" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="p" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="p" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default FormikForm;