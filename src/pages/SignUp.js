// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "../components/Button";
// import { TextField } from "../components/TextField";
// import { signUp } from "../firebase/Firebase";

// export const SignUp = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!firstName || !lastName || !email || !password) {
//       alert("fill out the form completely");
//       return;
//     }

//     try {
//       await signUp(firstName, lastName, email, password);

//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPassword("");

//       navigate("/");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <form
//         style={{
//           backgroundColor: "#fff",
//           borderRadius: "5px",
//           boxShadow: "0 0 10px #0003",
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           padding: "30px",
//           width: "300px",
//         }}
//       >
//         <h1>Sign Up</h1>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <TextField
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <TextField
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <TextField
//           type="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button onClick={handleSubmit}> Sign up</Button>
//         <Link
//           style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
//           to="/sign-in"
//         >
//           Already have an account?
//         </Link>
//       </form>
//     </div>
//   );
// };
