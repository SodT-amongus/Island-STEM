import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ActivityCard } from "../components/ActivityCard";
import { useActivityContext } from "../context/ActivitiyContext";

export const Home = () => {
  const { activities, activitiesLoading } = useActivityContext();
  const navigate = useNavigate();

  const featuredProjects = !activitiesLoading
    ? activities
        .filter((a) => a.type === "project")
        .sort(
          (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0),
        )
        .slice(0, 3)
    : [];

  const featuredEvent = !activitiesLoading
    ? activities
        .filter((a) => a.type === "event")
        .sort(
          (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0),
        )[0] || null
    : null;

  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>
      <Header />

      {/* Hero */}
      <div style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
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
            gap: 16,
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: 50,
              margin: 0,
              textAlign: "center",
            }}
          >
            The Digital STEM hub for Alameda Island
          </h1>
          <p
            style={{
              color: "white",
              fontSize: 16,
              maxWidth: 500,
              textAlign: "center",
              margin: 0,
            }}
          >
            An online platform for residents of Alameda Island to educate,
            share, and learn to make STEM accessible, available, and affordable.
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 80px 0",
          boxSizing: "border-box",
        }}
      >
        {/* Discover */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
            padding: "56px 0",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: "#0B2545",
                fontSize: 30,
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              Discover what Alameda is building
            </h2>
            <p
              style={{
                color: "#1E6091",
                fontSize: 15,
                lineHeight: 1.8,
                margin: "0 0 24px",
                maxWidth: 420,
              }}
            >
              Explore projects shared by Alameda locals. See what's already out
              there and trailblaze on. Post your STEM project or upcoming event
              as well as pictures and information for others to see as well.
            </p>
            <button
              onClick={() => navigate("/Projects-Events")}
              style={{
                padding: "12px 26px",
                backgroundColor: "#0ABFBC",
                color: "#0B2545",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Discover Projects
            </button>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: 24,
                backgroundColor: "#0B2545",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 64, position: "relative" }}>🔎</span>
            </div>
          </div>
        </div>

        <div style={{ height: 2, backgroundColor: "lightgray" }} />

        {/* Explore / Map */}
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 60,
            padding: "56px 0",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: "#0B2545",
                fontSize: 30,
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              Explore/Find events happening near you
            </h2>
            <p
              style={{
                color: "#1E6091",
                fontSize: 15,
                lineHeight: 1.8,
                margin: "0 0 24px",
                maxWidth: 420,
              }}
            >
              Every event with a location appears on our interactive map. Click
              a pin to see details and plan your next STEM outing on Alameda
              Island.
            </p>
            <button
              onClick={() => navigate("/interactive-map")}
              style={{
                padding: "12px 26px",
                backgroundColor: "#E8734A",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                transition: "transform 0.15s",
              }}
            >
              Look into the Map
            </button>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: 24,
                backgroundColor: "#0B2545",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 64, position: "relative" }}>🗺️</span>
            </div>
          </div>
        </div>

        <div style={{ height: 2, backgroundColor: "lightgray" }} />

        <div style={{ padding: "60px 0 80px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                color: "#0B2545",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              Featured Event
            </span>
            <div
              style={{
                flex: 1,
                height: 2,
                backgroundColor: "#F4E04D",
                opacity: 0.5,
              }}
            />
            <span
              onClick={() => navigate("/interactive-map")}
              style={{
                color: "#1E6091",
                fontSize: 13,
              }}
            >
              View on map →
            </span>
          </div>

          {activitiesLoading ? (
            <p style={{ color: "#1E6091", fontSize: 14 }}>Loading...</p>
          ) : !featuredEvent ? (
            <div
              style={{
                textAlign: "center",
                padding: "48px 0",
                color: "#1E6091",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 10, opacity: 0.4 }}>
                📅
              </div>
              <p style={{ margin: 0 }}>No events posted yet — be the first!</p>
            </div>
          ) : (
            <div style={{ maxWidth: 360 }}>
              <ActivityCard activity={featuredEvent} />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
