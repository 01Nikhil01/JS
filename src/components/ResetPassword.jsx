import  AuthFormLayout from "./AuthFormLayout";
import ResetPasswordForm from "./ResetPasswordForm";

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Back to{" "}
    <a href="/" className="ms-1 text-primary">
      <span className="font-medium">Login</span>
    </a>
  </p>
);

const ResetPassword = () => {
  return (
    <AuthFormLayout
      authTitle="Reset Password"
      helpText="Create a new strong password"
      bottomLink={<BottomLink />}
      hasThirdPartyAuth
    >
      <ResetPasswordForm />
    </AuthFormLayout>
  );
};

export default ResetPassword;
