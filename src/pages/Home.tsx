import axios from "axios"
import { useEffect } from "react"
import { useAuth } from "../hooks/useAuthContext"
import { URL_BASE_API } from "../constants/api"
import { useUserContext } from "../hooks/useUserContext"

const Home = () => {

  const authContext = useAuth()
  const userContext = useUserContext()

  useEffect(() => {
    const getUSerInfo = async () => {
      const request = await axios.create({baseURL: URL_BASE_API})
      .get("/user")

      if(request.status === 200) {
        userContext?.setUser(request.data)
      }
    }

    getUSerInfo()
  }, [authContext])

  return (
    <div>
      <h1>Home</h1>
      <p>Hi, {userContext?.user.name}</p>
    </div>
  )
}

export default Home