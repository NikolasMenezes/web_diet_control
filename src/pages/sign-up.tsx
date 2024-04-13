import { FormEvent, useRef } from "react";
import LabelInputGroup from "../components/ui/input/input-label";
import { Button } from "../components/ui/button";
import { FaRegUser } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdLockOutline, MdLockReset } from "react-icons/md";
import axios from "axios";
import { URL_BASE_API } from "../constants/api";
import { Link } from "react-router-dom";

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
    <main>
      <form onClick={handleSignUp}>
        <h3>Sign Up</h3>
        <LabelInputGroup
          icon={<FaRegUser />}
          inputType="email"
          reference={nameRef}
          labelText="Name"
        />
        <LabelInputGroup
          icon={<CiMail />}
          inputType="email"
          reference={emailRef}
          labelText="Email"
        />
        <LabelInputGroup
          icon={<MdLockOutline />}
          inputType="password"
          reference={passwordRef}
          labelText="Your password"
        />
        <LabelInputGroup
          icon={<MdLockReset />}
          inputType="password"
          reference={confirmPasswordRef}
          labelText="Confirm password"
        />
        <Button type="submit">Sign Up</Button>
      </form>

      <Link
        to="/"
        className="hover:underline hover:text-violet-600 duration-200"
      >
        Already have an account? Sign In
      </Link>
    </main>
  );
}
