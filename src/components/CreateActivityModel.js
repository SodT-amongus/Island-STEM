import { Box, MenuItem, Modal, Select } from "@mui/material";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { uploadImage } from "../cloudinary";
import { useUserContext } from "../context/UserContext";
import { activityCollection } from "../firebase/Firebase";
import { Button } from "./Button";
import { TextField } from "./TextField";

export const CreateActivityModal = ({ open, handleClose }) => {
  const { currentUser } = useUserContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async () => {
    if (!title || !description || !content || !type) {
      alert("Please fill out all the fields!");
      return;
    }
    const imageURL = await uploadImage(file);
    await addDoc(activityCollection, {
      title,
      description,
      content,
      type,
      imageURL,
      createdAt: serverTimestamp(),
      userId: currentUser.uid,
    });
    setTitle("");
    setDescription("");
    setContent("");
    setType("");
    setFile();
    handleClose();
  };

  return (
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
          outline: "none",
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
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            Create a Project or Event
          </h2>

          <TextField
            placeholder="Title..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            placeholder="Description..."
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            placeholder="Content..."
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
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
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                padding: "9px 16px",
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 6,
                color: "#a8c5e8",
                fontSize: 13,
                whiteSpace: "nowrap",
              }}
            >
              Choose Image
            </div>
            <span
              style={{
                color: "rgba(168,197,232,0.6)",
                fontSize: 13,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {file ? file.name : "No file chosen"}
            </span>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <button
              onClick={handleClose}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "transparent",
                color: "#F5F0E8",
                border: "1px solid rgba(255,255,255,0.25)",
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
                backgroundColor: "#F4E04D",
                color: "#0B2545",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Post
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
