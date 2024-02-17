import LabelInputGroup from "../components/form/LabelInputGroup"
import ImageTheme from '../assets/svg/signIn/donut_love.svg'
import CustomButton from '../components/form/CustomButton'
import styles from '../styles/pages/SignIn.module.css'

import { useRef } from 'react'
import { BiLock } from 'react-icons/bi'
import { FaMailBulk } from 'react-icons/fa'
import { Link } from "react-router-dom"

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <main className={styles.container}>
      <img src={ImageTheme} className={styles.signInImg} />
      <form>
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