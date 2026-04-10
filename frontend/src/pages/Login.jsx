function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg mb-4"
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;