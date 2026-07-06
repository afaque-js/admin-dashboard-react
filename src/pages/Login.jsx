import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400 px-6">
      <div className="w-full max-w-md rounded-lg border-2 border-white bg-white/70 p-6 text-center shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-800">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 text-left"
        >
          <label htmlFor="username" className="text-sm font-medium text-slate-700">
            Username or Email Address
          </label>
          <input
            id="username"
            placeholder="Username"
            className="w-full rounded border border-slate-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="password" className="text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full rounded border border-slate-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
