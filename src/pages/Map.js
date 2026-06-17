import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useActivityContext } from "../context/ActivitiyContext";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const FlyTo = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) map.flyTo([coords.lat, coords.lng], 15, { duration: 1 });
  }, [coords, map]);
  return null;
};

delete L.Icon.Default.prototype._getIconUrl;

const customIcon = new L.Icon({
  iconUrl: "https://i.postimg.cc/52TPMPmm/image.png",
  iconRetinaUrl: "https://i.postimg.cc/52TPMPmm/image.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

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
          backgroundColor: "#0B2545",
          padding: "60px 80px",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
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
          }}
        >
          Find local STEM events and resources in Alameda.
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

            {selected && <FlyTo coords={selected.coordinates} />}

            {mappableEvents.map((event) => (
              <Marker
                key={event.activityId}
                position={[event.coordinates.lat, event.coordinates.lng]}
                eventHandlers={{ click: () => setSelected(event) }}
              >
                <Popup>
                  <div style={{ minWidth: 180 }}>
                    <strong style={{ fontSize: 14, color: "#0B2545" }}>
                      {event.title}
                    </strong>
                    <p
                      style={{
                        margin: "6px 0 4px",
                        fontSize: 12,
                        color: "#1E6091",
                      }}
                    >
                      {event.description}
                    </p>
                    <p
                      style={{ margin: "0 0 8px", fontSize: 11, color: "#888" }}
                    >
                      Location: {event.location}
                    </p>
                    <button
                      onClick={() =>
                        navigate(`/activities/${event.activityId}`)
                      }
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                        padding: "6px 12px",
                        fontSize: 12,
                        cursor: "pointer",
                        width: "100%",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
};
