"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { type ReactNode } from "react";
import { type Client } from "@/features/client/types/client.types";
import { useRouter, usePathname } from "next/navigation";

type AuthContextType = {
  client: Client | null;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  client: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState<Client | null>(null);
  const router = useRouter();
  const pathname = usePathname(); // pega a rota corrente

  useEffect(() => {
    const stored = localStorage.getItem("client");

    if (stored) {
      const [parsed] = JSON.parse(stored);
      setClient(parsed);
    }

  }, []);

  const login = () => {
    const testUser: Client = {
      id: "1",
      name: "Usuário",
      email: "email@email.com",
      phone: "1234-5678",
      address: "Rua Exemplo, 123",
    };

    localStorage.setItem("client", JSON.stringify([testUser]));
    setClient(testUser);
    router.push(pathname) // garante que esteja na rota onde o usuário estava
  };

  const logout = () => {
    localStorage.removeItem("client");
    setClient(null);
    router.push("/") // retorna à home
  };

  return (
    <AuthContext.Provider value={{ client, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);