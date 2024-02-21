import ForgotPasswordForm from "./ForgotPasswordForm";
import  AuthFormLayout from "./AuthFormLayout";

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Back to{" "}
    <a href="/" className="ms-1 text-primary">
      <span className="font-medium">Login</span>
    </a>
  </p>
);

const RecoverPassword = () => {
  return (
    <AuthFormLayout
      authTitle="Forgot Password"
      helpText="Enter your email address and we'll send you an email with instructions to reset your password."
      bottomLink={<BottomLink />}
    >
      <ForgotPasswordForm />
    </AuthFormLayout>
  );
};

export default RecoverPassword;
