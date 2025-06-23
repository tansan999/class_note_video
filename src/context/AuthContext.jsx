
import { createContext } from "react";

export const AuthContext = createContext({
  user: { uid: "demo-user" } // демо пользователь
});
