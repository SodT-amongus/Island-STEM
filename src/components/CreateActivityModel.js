import { Box, MenuItem, Modal, Select } from "@mui/material";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { uploadImage } from "../cloudinary";
import { useUserContext } from "../context/UserContext";
import { activityCollection } from "../firebase/Firebase";
import { reverseGeocode } from "../utils/geocode";
import { TextField } from "./TextField";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://i.postimg.cc/52TPMPmm/image.png",
});

const LocationPicker = ({ onLocationPick }) => {
  useMapEvents({
    click(e) {
      onLocationPick(e.latlng);
    },
  });
  return null;
};

export const CreateActivityModal = ({ open, handleClose }) => {
  const { currentUser } = useUserContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [markerPos, setMarkerPos] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [geocoding, setGeocoding] = useState(false);

  const ALAMEDA_CENTER = [37.7692, -122.2616];

  const handleMapClick = async (latlng) => {
    setMarkerPos(latlng);
    setGeocoding(true);
    const name = await reverseGeocode(latlng.lat, latlng.lng);
    setLocationName(
      name || `${latlng.lat.toFixed(5)}, ${latlng.lng.toFixed(5)}`,
    );
    setGeocoding(false);
  };

  const handleSubmit = async () => {
    if (!title || !description || !content || !type) {
      alert("Please fill out all required fields!");
      return;
    }
    setLoading(true);
    try {
      const imageURL = await uploadImage(file);
      await addDoc(activityCollection, {
        title,
        description,
        content,
        type,
        imageURL,
        location: locationName || null,
        coordinates: markerPos
          ? { lat: markerPos.lat, lng: markerPos.lng }
          : null,
        createdAt: serverTimestamp(),
        userId: currentUser.uid,
      });

      setTitle("");
      setDescription("");
      setContent("");
      setType("");
      setFile();
      setMarkerPos(null);
      setLocationName("");
      handleClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          backgroundColor: "#0B2545",
          borderRadius: "10px",
          maxHeight: "90vh",
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
            }}
          >
            Create a Project or Event
          </h2>

          <TextField
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Content..."
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
              color: "white",
              backgroundColor: "rgba(255,255,255,0.07)",
            }}
          >
            <MenuItem value="" disabled>
              Project or Event?
            </MenuItem>
            <MenuItem value="project">Project</MenuItem>
            <MenuItem value="event">Event</MenuItem>
          </Select>

          <div>
            <p style={{ color: "#a8c5e8", fontSize: 13, margin: "0 0 8px" }}>
              Click the map to mark a location for the activity (optional)
            </p>
            <div
              style={{
                borderRadius: 8,
                height: 220,
              }}
            >
              <MapContainer
                center={ALAMEDA_CENTER}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationPicker onLocationPick={handleMapClick} />
                {markerPos && (
                  <Marker
                    position={markerPos}
                    draggable
                    eventHandlers={{
                      dragend(e) {
                        handleMapClick(e.target.getLatLng());
                      },
                    }}
                  />
                )}
              </MapContainer>
            </div>

            {geocoding && (
              <p style={{ color: "white", fontSize: 12, margin: "6px 0 0" }}>
                Fetching address...
              </p>
            )}
            {!geocoding && locationName && (
              <p
                style={{
                  color: "white",
                  fontSize: 12,
                  margin: "6px 0 0",
                }}
              >
                {locationName}
                <span
                  onClick={() => {
                    setMarkerPos(null);
                    setLocationName("");
                  }}
                  style={{
                    color: "#e05a5a",
                    marginLeft: 8,
                    cursor: "pointer",
                    fontWeight: 800,
                  }}
                >
                  ✕ Clear
                </span>
              </p>
            )}
          </div>

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
              }}
            >
              Choose Image
            </div>
            <span
              style={{
                color: "rgba(168,197,232,0.6)",
                fontSize: 13,
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
              disabled={loading}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "transparent",
                color: "#F5F0E8",
                border: "1.5px solid",
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
              disabled={loading}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#F4E04D",
                color: "#0B2545",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {loading ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
