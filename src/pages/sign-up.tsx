import { FormEvent, useRef } from "react";
import { Button } from "../components/ui/button";
import ImageTheme from "../assets/svg/signUp/sign-up-image.svg";
import axios from "axios";
import { URL_BASE_API } from "../constants/api";
import { Link } from "react-router-dom";
import { BsPersonBadge } from "react-icons/bs";
import { BiLock, BiMailSend } from "react-icons/bi";
import { Input } from "@/components/ui/input";

export function SignUp() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return alert("Passwords don't match");
    }

    const createUserInfo = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      isPremium: false,
    };

    const request = await axios
      .create({ baseURL: URL_BASE_API })
      .post("/user", createUserInfo);

    if (request.status !== 201) {
      return alert("Something went wrong, try again later.");
    }

    alert("Account created successfully");
  };

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
          <form onClick={handleSignUp} className="flex flex-col gap-3 mb-3">
            <h3 className="font-medium text-purple-500 text-center text-xl">
              Sign up
            </h3>
            <div className="flex flex-col gap-2">
              <Input.Label icon={BiMailSend} labelText="email" />
              <Input.Root type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Input.Label icon={BsPersonBadge} labelText="Name" />
              <Input.Root type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Input.Label icon={BiLock} labelText="password" />
              <Input.Root type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Input.Label icon={BiLock} labelText="confirm password" />
              <Input.Root type="password" />
            </div>
            <Button type="submit">Sign Up</Button>
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
