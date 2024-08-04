import { Input, Card, Button, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {

    const res = await axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true,
    
    }); // Aqui se hace la peticion hacia el backend
    console.log(res);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
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
