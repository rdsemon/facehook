import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Field from "../common/Field";

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    navigate("/");
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(handleLogin)}
    >
      <Field label={"Email"} error={errors.email}>
        <input
          className="auth-input"
          name="email"
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
      </Field>
      <Field label={"Password"} error={errors.password}>
        <input
          className="auth-input"
          name="password"
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should not be less then 8 cherecters",
            },
          })}
        />
      </Field>
      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
