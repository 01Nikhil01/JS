import AuthFormLayout from "./components/AuthFormLayout";
import PageTitle from "./components/PageTitle";

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Please come back and
    <a href="/" className="ms-1 text-primary">
      <span className="font-medium">Login</span>
    </a>
  </p>
);

const Logout = () => {
  return (
    <AuthFormLayout
      authTitle="Logout"
      helpText="We are Sorry to see you go, please come back soon. 😢"
      bottomLink={<BottomLink />}
    >
      <PageTitle title="Logout" />
      <div></div>
    </AuthFormLayout>
  );
};

export default Logout;
