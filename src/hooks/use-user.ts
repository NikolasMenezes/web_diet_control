import { useContext } from "react";
import { UserContext } from "../providers/user-provider";

export const useUserContext = () => {
  try {
    const contextValue = useContext(UserContext);

    if (!contextValue) throw new Error("No context user value found");

    return contextValue;
  } catch (error) {
    console.error(error)
  }
}