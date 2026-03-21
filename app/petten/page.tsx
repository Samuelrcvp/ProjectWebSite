"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "@/services/firebase/auth";
import type { ApiResponse } from "@/types";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      const idToken = await signIn(email.trim(), password);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
        credentials: "include",
      });

      const data = (await res.json()) as ApiResponse<{ email: string }>;

      if (!data.success) {
        setError(data.error);
        return;
      }

      router.push("/controle/products");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (
        msg.includes("auth/invalid-credential") ||
        msg.includes("auth/wrong-password") ||
        msg.includes("auth/user-not-found")
      ) {
        setError("Email ou senha incorretos.");
      } else {
        setError("Erro ao fazer login. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f0f6]">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Image
            src="/imgs/logoSite.png"
            alt="Carapuça Presentes"
            width={150}
            height={60}
            quality={100}
            className="h-auto"
          />
        </div>

        <h1 className="text-2xl font-bold text-center text-[#9932cc] mb-6">
          Painel Administrativo
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@email.com"
              autoComplete="username"
              disabled={loading}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#9932cc] focus:ring-1 focus:ring-[#9932cc] transition disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={loading}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#9932cc] focus:ring-1 focus:ring-[#9932cc] transition disabled:opacity-50"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2 border border-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#9932cc] text-white font-semibold rounded-lg py-3 transition hover:bg-[#7a1fa8] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
