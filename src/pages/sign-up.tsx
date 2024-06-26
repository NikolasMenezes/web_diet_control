import { Button } from "../components/ui/button";
import ImageTheme from "../assets/svg/signUp/sign-up-image.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonBadge } from "react-icons/bs";
import { BiLock, BiMailSend } from "react-icons/bi";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { userService } from "@/infra/services/api/user";
import { useToast } from "@/hooks/use-toast";

const createUserSchema = z
  .object({
    email: z.string().email({ message: "Please provide an valid email" }),
    name: z.string().min(1, { message: "Please provide your name" }),
    password: z
      .string()
      .min(8, { message: "Password needs to contain at least 8 chars" })
      .max(24),
    confirmPassword: z
      .string()
      .min(8, { message: "Password needs to contain at least 8 chars" })
      .max(24),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type CreateUserSchemaType = z.infer<typeof createUserSchema>;

export function SignUp() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(createUserSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: userService.create,
    mutationKey: ["create-user"],
    onSuccess: () => {
      reset();
      toast({
        title: "Success!",
        description: "Account created succesfully!",
        type: "background",
        variant: "success",
      });
      setTimeout(() => navigate("/", { replace: true }), 2000);
    },
    onError: (data) => {
      toast({
        title: "Oops! Something went wrong!",
        description: data.message,
        type: "background",
        variant: "destructive",
      });
    },
  });

  async function handleSignUp({ email, name, password }: CreateUserSchemaType) {
    await mutateAsync({ email, name, password, isPremium: false });
  }

  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-100 flex items-center justify-center">
      <div
        id="container"
        className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-60 p-8 h-3/4 max-w-7xl w-3/4 "
      >
        <img
          src={ImageTheme}
          className="aspect-square w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        />
        <div>
          <form
            onClick={handleSubmit(handleSignUp)}
            className="flex flex-col gap-3 mb-3"
          >
            <h3 className="font-medium text-purple-500 text-center text-xl">
              Sign up
            </h3>
            <div className="flex flex-col gap-2">
              <Input.Label icon={BiMailSend} labelText="email" />
              <Input.Root {...register("email")} type="email" />
              {errors?.email?.message && (
                <Input.Error>{errors.email.message}</Input.Error>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Input.Label icon={BsPersonBadge} labelText="Name" />
              <Input.Root {...register("name")} type="text" />
              {errors?.name?.message && (
                <Input.Error>{errors.name.message}</Input.Error>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Input.Label icon={BiLock} labelText="password" />
              <Input.Root {...register("password")} type="password" />
              {errors?.password?.message && (
                <Input.Error>{errors.password.message}</Input.Error>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Input.Label icon={BiLock} labelText="confirm password" />
              <Input.Root {...register("confirmPassword")} type="password" />
              {errors?.confirmPassword?.message && (
                <Input.Error>{errors.confirmPassword.message}</Input.Error>
              )}
            </div>
            <Button type="submit" className={isPending ? "animate-spin" : ""}>
              Sign Up
            </Button>
          </form>

          <Link
            to="/"
            className="hover:underline hover:text-violet-600 duration-200"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
