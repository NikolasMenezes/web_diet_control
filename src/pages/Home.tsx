import { useEffect } from "react"
import { useAuth } from "../hooks/useAuthContext"
import axios from "axios"
import { URL_BASE_API } from "../constants/api"

const Home = () => {

  const authContext = useAuth()

  useEffect(() => {

  }, [authContext])

  return (
    <div>Home</div>
  )
}

export default Home