export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

import Link from "next/link";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Add validation schema
const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
}).required();

// Add type for form data
type FormData = yup.InferType<typeof schema>;

export default function SignIn() {
  // Initialize react-hook-form with yup resolver
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Sign in to your account</h1>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register('email')}
                className={`form-input w-full py-2 ${errors.email ? 'border-red-500' : ''}`}
                type="email"
                placeholder="corybarker@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register('password')}
                className={`form-input w-full py-2 ${errors.password ? 'border-red-500' : ''}`}
                type="password"
                autoComplete="on"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
              Sign In
            </button>
          </div>
        </form>
        {/* Bottom link */}
        <div className="mt-6 text-center">
          <Link
            className="text-sm text-gray-700 underline hover:no-underline"
            href="/reset-password"
          >
            Forgot password
          </Link>
        </div>
      </>
    </>
  );
}
