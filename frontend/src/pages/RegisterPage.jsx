import { Input, Card, Button, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, errors: signupErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data); //esto revisa si el usuario se registro correctamente

    if (user) {
      navigate("/profile");
    }
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        {signupErrors &&
          signupErrors.map((err) => (
            <p key={err} className="text-red-500 text-center">
              {err}
            </p>
          ))}

        <h3 className="text-2xl font-bold text-center">Register</h3>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            placeholder="enter your fullname"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="enter your email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="enter your password"
            {...register("password", {
              required: true,
            })}
          />

          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <Button>Register</Button>

          <div className="flex justify-between my-4">
            <p>Do have an account</p>
            <Link to="/login" className="font-bold text-sky-600">
              Sign in
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
