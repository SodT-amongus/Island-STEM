import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useActivityContext } from "../context/ActivitiyContext";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const { activities, activitiesLoading } = useActivityContext();
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const ALAMEDA_CENTER = [37.7652, -122.2416];

  const mappableEvents = activities.filter(
    (a) => a.type === "event" && a.coordinates?.lat && a.coordinates?.lng,
  );

  if (activitiesLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#F5F0E8",
        }}
      >
        <span style={{ color: "#1E6091", fontSize: 15 }}>Loading...</span>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#F5F0E8",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <div
        style={{
          position: "relative",
          backgroundColor: "#0B2545",
          padding: "60px 80px 50px",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            position: "relative",
            color: "#F5F0E8",
            fontSize: 42,
            fontWeight: 800,
          }}
        >
          Event Map
        </h1>
        <p
          style={{
            position: "relative",
            color: "#a8c5e8",
            fontSize: 16,
            maxWidth: 520,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          Find STEM events or local resources around the island.
        </p>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          padding: "40px 80px",
          boxSizing: "border-box",
          gap: 28,
        }}
      >
        <div
          style={{
            flex: 1,
            borderRadius: 10,
            overflow: "hidden",
            border: "1px solid rgba(11,37,69,0.1)",
            minHeight: 500,
            boxShadow: "0 4px 20px rgba(11,37,69,0.08)",
          }}
        >
          <MapContainer
            center={ALAMEDA_CENTER}
            zoom={13}
            style={{ height: "100%", width: "100%", minHeight: 500 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
};
