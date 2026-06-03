import { Box, MenuItem, Modal, Select } from "@mui/material";
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { activityCollection } from "../firebase/Firebase";
import { TextField } from "./TextField";

export const UpdateActivityModal = ({ open, handleClose, activity }) => {
  const [activityData, setActivityData] = useState({ ...activity });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivityData({ ...activityData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      !activityData.title ||
      !activityData.description ||
      !activityData.content ||
      !activityData.type
    ) {
      alert("Please fill out all fields");
      return;
    }
    const activityRef = doc(activityCollection, activityData.activityId);
    await deleteDoc(activityRef);
    await setDoc(activityRef, {
      title: activityData.title,
      description: activityData.description,
      content: activityData.content,
      type: activityData.type,
      createdAt: activityData.createdAt,
      imageURL: activityData.imageURL || "",
      userId: activityData.userId,
      updatedAt: serverTimestamp(),
    });
    handleClose();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 460,
            backgroundColor: "#0B2545",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "36px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <h2
              style={{
                color: "#F5F0E8",
                fontSize: 22,
                fontWeight: 800,
                margin: 0,
              }}
            >
              Update Activity
            </h2>

            <TextField
              type="text"
              name="title"
              placeholder="Title..."
              value={activityData.title}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="description"
              placeholder="Description..."
              value={activityData.description}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="content"
              placeholder="Content..."
              value={activityData.content}
              onChange={handleChange}
            />
            <Select
              name="type"
              value={activityData.type}
              onChange={handleChange}
              displayEmpty
              sx={{
                height: 42,
                borderRadius: "6px",
                fontSize: 14,
                color: "#F5F0E8",
                backgroundColor: "rgba(255,255,255,0.07)",
              }}
            >
              <MenuItem value="" disabled>
                Project or Event?
              </MenuItem>
              <MenuItem value="project">Project</MenuItem>
              <MenuItem value="event">Event</MenuItem>
            </Select>

            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
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
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                style={{
                  flex: 1,
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
                Update
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
