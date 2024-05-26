import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../hooks/use-auth";
import { useUserContext } from "../hooks/use-user";
import { Header } from "../components/header";

export function Home() {
  // const authContext = useAuth();
  // const userContext = useUserContext();

  // if (!userContext)
  //   throw new Error("useUserContext must be used within a UserContextProvider");

  // useEffect(() => {
  //   const getUSerInfo = async () => {
  //     const request = await axios
  //       .create({ baseURL: URL_BASE_API })
  //       .get("/user");

  //     if (request.status === 200) {
  //       userContext?.setUser(request.data);
  //     }
  //   };

  //   getUSerInfo();
  // }, [authContext]);

  return (
    <div>
      <Header />
    </div>
  );
}
