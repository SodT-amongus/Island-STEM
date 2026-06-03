import { Box, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotLoggedIn = ({ open, handleClose }) => {
  const navigate = useNavigate();
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 420,
          backgroundColor: "#0B2545",
          borderRadius: "10px",
          p: 0,
          overflow: "hidden",
          outline: "none",
        }}
      >
        <div style={{ padding: "36px 40px" }}>
          <h2
            style={{
              color: "#F5F0E8",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Account required for this feature
          </h2>
          <p
            style={{
              color: "#a8c5e8",
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            Sign in or create an account to post projects, events, and
            communicate with our community.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => navigate("/sign-in")}
              style={{
                padding: "12px",
                backgroundColor: "#F4E04D",
                color: "#0B2545",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              style={{
                padding: "12px",
                backgroundColor: "transparent",
                color: "#F5F0E8",
                border: "1.5px solid rgba(255,255,255,0.25)",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
