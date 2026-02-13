"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Wrong password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-red-200 via-red-50 to-red-300">

      <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-red-100 shadow-2xl rounded-2xl p-8 transition hover:shadow-red-200/50 hover:shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-red-600 mb-8 tracking-tight">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-red-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 outline-none rounded-lg p-3 transition text-black placeholder-gray-500 bg-white"
        />


          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-xl shadow-md font-medium tracking-wide"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}
