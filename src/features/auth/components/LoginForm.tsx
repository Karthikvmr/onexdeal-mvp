import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/store/hooks";
import { loginSuccess } from "../store/authSlice";
import { tokenStorage } from "../utils/token";

import {
  loginSchema,
  type LoginFormData,
} from "../schemas/loginSchema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {

    const navigate = useNavigate();
const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
  const fakeToken = "demo-access-token";

  tokenStorage.set(fakeToken);

  dispatch(
    loginSuccess({
      accessToken: fakeToken,
      user: {
        id: 1,
        name: "Karthik",
        email: "karthik@example.com",
      },
    })
  );

  navigate("/dashboard");
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <Input
          placeholder="Email address"
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="mt-2 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-sm text-blue-600"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-3 text-slate-500">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        type="button"
      >
        Continue with Google
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