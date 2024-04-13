import LabelInputGroup from "../components/ui/input/input-label";
import ImageTheme from "../assets/svg/signIn/donut_love.svg";
import { Button } from "../components/ui/button";

import { FormEvent, useRef } from "react";
import { BiLock } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import axios from "axios";
import { URL_BASE_API } from "../constants/api";
import { Link, useNavigate } from "react-router-dom";

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
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-100">
      <img src={ImageTheme} />
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <LabelInputGroup
          icon={<FaMailBulk />}
          inputType="email"
          reference={emailRef}
          labelText="Email"
        />
        <LabelInputGroup
          icon={<BiLock />}
          inputType="password"
          reference={passwordRef}
          labelText="Password"
        />
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
