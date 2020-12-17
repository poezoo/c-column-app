import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

type Values = {
    email: string;
    password: string;
};

export const Signup: React.FC = () => (
    <section>
        <h1>signup page</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form>
                <label htmlFor="email">email</label>
                <Field id="email" name="enail" placeholder="" />

                <label htmlFor="password">password</label>
                <Field id="password" name="password" placeholder="" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </section>
);
