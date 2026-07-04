import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
  return (
    <form className="space-y-5">
      <Input placeholder="Full Name" />

      <Input
        type="email"
        placeholder="Email"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <Input
        type="password"
        placeholder="Confirm Password"
      />

      <Button className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-blue-600"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;