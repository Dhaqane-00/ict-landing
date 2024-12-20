"use client"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Name is too short')
    .max(35, 'Name is too long')
    .required('Required !'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required !'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required !'),
});

export default function SignUp() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div className="space-y-4">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Full name
                </label>
                <Field
                  id="name"
                  name="name"
                  className="form-input w-full py-2"
                  type="text"
                  placeholder="Corey Barker"
                />
                {errors.name && touched.name && (
                  <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
              </div>

              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  className="form-input w-full py-2"
                  type="email"
                  placeholder="corybarker@email.com"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>

              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  className="form-input w-full py-2"
                  type="password"
                  autoComplete="on"
                  placeholder="••••••••"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                )}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button 
                type="submit"
                className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
              >
                Register
              </button>
              <div className="text-center text-sm italic text-gray-400">Or</div>
              <button className="btn w-full bg-gradient-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
                Continue with GitHub
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By signing up, you agree to the{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="#0"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}
