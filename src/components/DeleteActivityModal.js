import { Box, Modal } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { activityCollection } from "../firebase/Firebase";

export const DeleteActivityModal = ({ open, handleClose, activity }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const activityRef = doc(activityCollection, activity.activityId);
    await deleteDoc(activityRef);
    navigate("/Projects-Events");
  };

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
          overflow: "hidden",
          outline: "none",
        }}
      >
        <div style={{ padding: "36px 40px" }}>
          <h2
            style={{
              color: "#F5F0E8",
              fontSize: 22,
              fontWeight: 800,
              margin: "0 0 10px",
              paddingBottom: 20,
            }}
          >
            Delete this post?
          </h2>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={handleClose}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "transparent",
                color: "#F5F0E8",
                border: "1.5px solid rgba(255,255,255,0.25)",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#0ABFBC")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")
              }
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#e05a5a",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Delete
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
