import LabelInputGroup from "../components/form/LabelInputGroup"
import ImageTheme from '../assets/svg/signIn/donut_love.svg'
import CustomButton from '../components/form/CustomButton'
import styles from '../styles/pages/SignIn.module.css'

import { FormEvent, useRef } from 'react'
import { BiLock } from 'react-icons/bi'
import { FaMailBulk } from 'react-icons/fa'
import axios from "axios"
import { URL_BASE_API } from "../constants/api"
import { Link, useNavigate } from "react-router-dom"

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()

    const loginInfo = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    }

    const request = await axios.create({ baseURL: URL_BASE_API }).post("/login", loginInfo)

    if (request.status !== 200) {
      return alert("Invalid email or password")
    }

    const { token } = await request.data
    localStorage.setItem("token", token)
    navigate("/home", { replace: true })
  }
  return (
    <main className={styles.container}>
      <img src={ImageTheme} className={styles.signInImg} />
      <form onSubmit={handleLogin}>
        <h3 className={styles.mainTitle}>Login</h3>
        <LabelInputGroup icon={<FaMailBulk />} inputType="email" reference={emailRef} labelText="Email" />
        <LabelInputGroup icon={<BiLock />} inputType="password" reference={passwordRef} labelText="Password" />
        <CustomButton isDarkMode={false} type="submit">Sign In</CustomButton>
      </form>

      <Link to="/signup" className={"link"}>Don't have an account? Sign Up</Link>
    </main>
  )
}

export default SignIn