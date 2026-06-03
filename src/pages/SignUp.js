import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { TextField } from "../components/TextField";
import { signUp } from "../firebase/Firebase";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      alert("fill out the form completely");
      return;
    }
    try {
      await signUp(firstName, lastName, email, password);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
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
            Join the Hub
          </h1>

          <form
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
            {error && (
              <p style={{ color: "#ff6b6b", margin: 0, fontSize: 13 }}>
                {error}
              </p>
            )}

            <TextField
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={handleSubmit}>Sign Up</Button>

            <Link
              style={{
                textDecoration: "none",
                color: "rgba(255,255,255,0.75)",
                fontSize: "13px",
                textAlign: "center",
              }}
              to="/sign-in"
            >
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
