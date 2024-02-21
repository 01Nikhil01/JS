import AuthFormLayout from "./components/AuthFormLayout";
import PageTitle from "./components/PageTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LuCopy, LuLock, LuMail, LuShield, LuUser } from "react-icons/lu";
import PasswordFormInput from "./components/PasswordFormInput";
import TextFormInput from "./components/TextFormInput";

const loginFormSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

const LoginForm = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "user@coderthemes.com",
      password: "password",
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextFormInput
          name="email"
          control={control}
          type="email"
          className="bg-white"
          placeholder="Enter your email"
          label="Email"
          containerClassName="mb-6"
          fullWidth
        />

        <PasswordFormInput
          name="password"
          control={control}
          label="Password"
          labelClassName="block text-sm font-medium text-default-900 mb-2"
          containerClassName="mb-1"
          fullWidth
        />

        <a
          href="/"
          className="float-right text-end text-sm text-default-600 underline"
        >
          Forgot Password?
        </a>

        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
          // disabled={loading}
        >
          Log In
        </button>
      </form>

      <div className="mt-6 flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 rounded-lg border border-dashed border-primary">
          <div className="flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2">
            <div className="inline-flex items-center gap-2">
              <LuUser size={22} />
              <p className="text-base text-default-900">User</p>
            </div>
            <button
              className="flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-sm text-white transition-all hover:bg-primary-600"
              // onClick={() => changeUserRole("user")}
            >
              <LuCopy />
              Use
            </button>
          </div>
          <p className="p-2 px-4">
            <span className="flex items-center gap-2 text-sm">
              <LuMail size={18} /> user@coderthemes.com
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm">
              <LuLock size={18} /> password
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-dashed border-primary">
          <div className="flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2">
            <div className="inline-flex items-center gap-2">
              <LuShield size={22} />
              <p className="text-base text-default-900">Administator</p>
            </div>
            <button
              className="flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-sm text-white transition-all hover:bg-primary-600"
              // onClick={() => changeUserRole("admin")}
            >
              <LuCopy />
              Use
            </button>
          </div>
          <p className="p-2 px-4">
            <span className="flex items-center gap-2 text-sm">
              <LuMail size={18} /> admin@coderthemes.com
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm">
              <LuLock size={18} /> password
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Don’t have an account ?{" "}
    <a href="/" className="ms-1 text-primary">
      <span className="font-medium">Register</span>
    </a>
  </p>
);

const Login = () => {
  return (
    <AuthFormLayout
      authTitle="Login"
      helpText="Enter your credentials to access Yum."
      bottomLink={<BottomLink />}
      hasThirdPartyAuth
    >
      <PageTitle title="Login" />
      <LoginForm />
    </AuthFormLayout>
  );
};

export default Login;
