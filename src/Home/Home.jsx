import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

export default function Home() {
  const user = useContext(AuthContext);
  return <div>this is home {user ? user.name : ""}</div>;
}
