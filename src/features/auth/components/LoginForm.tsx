import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <form className="space-y-5">
      <Input
        type="email"
        placeholder="Email address"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <Button className="w-full">
        Sign In
      </Button>

      <p className="text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-600"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;