import ImageTheme from "../assets/svg/signIn/donut_love.svg";
import { Button } from "../components/ui/button";

import { FormEvent, useRef } from "react";
import { BiLock } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import axios from "axios";
import { URL_BASE_API } from "../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    const loginInfo = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    const request = await axios
      .create({ baseURL: URL_BASE_API })
      .post("/login", loginInfo);

    if (request.status !== 200) {
      return alert("Invalid email or password");
    }

    const { token } = await request.data;
    localStorage.setItem("token", token);
    navigate("/home", { replace: true });
  };
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col gap-5 justify-center items-center">
      <img
        src={ImageTheme}
        className="aspect-video w-5/6 md:w-[420px] lg:w-[500px]"
      />
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Input.Label icon={FaMailBulk} labelText="email" />
          <Input.Root type="email" />
        </div>

        <div className="flex flex-col gap-2">
          <Input.Label icon={BiLock} labelText="password" />
          <Input.Root type="password" />
        </div>

        <Button type="submit">Sign In</Button>
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
