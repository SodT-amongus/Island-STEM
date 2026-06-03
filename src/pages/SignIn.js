import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInFunction } from "../firebase/Firebase";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "90vh",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            filter: "grayscale(50%) brightness(70%) opacity(90%)",
          }}
          src="https://i.postimg.cc/HkRfRXvG/image.png"
          alt="FRC"
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: 40,
              margin: 0,
              textAlign: "center",
            }}
          >
            Sign In
          </h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "36px 32px",
              width: "320px",
            }}
          >
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
            <Button onClick={handleSubmit}>Sign In</Button>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "13px",
                color: "white",
                textAlign: "center",
              }}
              href="/sign-up"
            >
              Do not have an account?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
