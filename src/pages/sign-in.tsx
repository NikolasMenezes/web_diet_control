import ImageTheme from "../assets/svg/signIn/donut_love.svg";
import { Button } from "../components/ui/button";
import { BiLock } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/infra/services/api/auth";
import { httpClientFactory } from "@/infra/factory/http-client-factory";

const loginSchema = z.object({
  email: z.string().email({ message: "Please provide an valid email" }),
  password: z.string().min(1, { message: "Insert your password" }),
});

type loginSchemaType = z.infer<typeof loginSchema>;

export function SignIn() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: authService.login,
    mutationKey: ["login"],
    onMutate: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col gap-5 justify-center items-center">
      <img
        src={ImageTheme}
        className="aspect-video w-5/6 md:w-[420px] lg:w-[500px]"
      />
      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <Input.Label icon={FaMailBulk} labelText="email" />
          <Input.Root {...register("email")} type="email" />
          {errors?.email?.message && (
            <Input.Error>{errors.email.message}</Input.Error>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Input.Label icon={BiLock} labelText="password" />
          <Input.Root type="password" {...register("password")} />
          {errors?.password?.message && (
            <Input.Error>{errors.password.message}</Input.Error>
          )}
        </div>

        <Button type="submit" className={isPending ? "animate-spin" : ""}>
          Sign In
        </Button>
      </form>

      <Link
        to="/signup"
        className="hover:underline hover:text-violet-600 duration-200"
      >
        Don't have an account? Sign Up
      </Link>
    </main>
  );
}
