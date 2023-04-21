import { useContext } from "react";
import { AuthContext } from "../../src/providers/AuthProviders";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>loading...</div>;
  }
  if (user) {
    return <children></children>;
  }
  return <Navigate to="/login"></Navigate>;
}
