import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const useAuth = () => {
  try {
    const contextValue = useContext(AuthContext);
    if (!contextValue) console.log("No context value found");
    return contextValue;
  }
  catch (err) {
    console.log(err)
  }
};