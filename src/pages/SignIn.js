import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInFunction } from "../firebase/Firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("please fill the form out completely");
      return;
    } else {
      console.log(email, password);
    }

    try {
      await signInFunction(email, password);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "30px",
          width: "300px",
          boxShadow: "0 0 10px #0003",
          gap: "10px",
        }}
      >
        <h1>Sign in</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          style={{
            backgroundColor: "#4b6bfb",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
            height: "36px",
            padding: "10px 16px",
            width: "100%",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
          href="/sign-up"
        >
          Do not have an account?
        </a>
      </div>
    </div>
  );
};
