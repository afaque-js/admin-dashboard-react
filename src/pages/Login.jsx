import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400 px-6">
      <div className="w-full max-w-md rounded-lg border-2 border-white bg-white/70 p-6 text-center shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-800">
          Login / Sign Up
        </h2>
        <form
          onSubmit={handleSignup}
          className="mt-6 flex flex-col gap-3 text-left"
        >
          <label
            htmlFor="username"
            className="text-sm font-medium text-slate-700"
          >
            Username or Email Address
          </label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username or Email"
            className="w-full rounded border border-slate-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded border border-slate-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleLogin}
              className="mt-2 w-1/2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Login
            </button>
            <button
              type="submit"
              className="mt-2 w-1/2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
