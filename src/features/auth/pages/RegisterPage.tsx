import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start buying and selling on OneXDeal."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;