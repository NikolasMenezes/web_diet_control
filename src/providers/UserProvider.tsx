import { createContext, useState } from "react";
import { User } from "../types/user";

interface UserContextProps {
  user: User
  setUser: (user: User) => void
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, _setUser] = useState<User>({} as User)

  const setUser = (user: User) => {
    _setUser(user)
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider