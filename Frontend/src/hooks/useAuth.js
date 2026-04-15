import { useMemo } from "react";
import { logout } from "../api/google.auth.api";

export function useAuth() {
  const user = useMemo(() => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return {
        id: payload.userId,
        name: payload.name ?? "User",
        email: payload.email ?? "",
        avatar: payload.avatar ?? null,
      };
    } catch {
      return null;
    }
  }, []);

  return { user, logout };
}