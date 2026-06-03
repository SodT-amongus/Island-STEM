import { useNavigate } from "react-router-dom";

export const ActivityCard = ({ activity }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/activities/${activity.activityId}`)}
      style={{
        width: "100%",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        border: "1px solid rgba(11,37,69,0.1)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 0.15s, box-shadow 0.15s",
        boxShadow: "0 2px 8px rgba(11,37,69,0.06)",
      }}
    >
      <div
        style={{
          height: 200,
          width: "100%",
          backgroundImage: activity.imageURL
            ? `url(${activity.imageURL})`
            : "none",
          backgroundColor: activity.imageURL ? "transparent" : "#0B2545",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!activity.imageURL && (
          <span style={{ fontSize: 36, opacity: 0.3 }}>
            {activity.type === "event" ? "📅" : "🔧"}
          </span>
        )}
      </div>

      <div
        style={{
          padding: "16px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              backgroundColor:
                activity.type === "event"
                  ? "rgba(244,224,77,0.2)"
                  : "rgba(10,191,188,0.15)",
              color: activity.type === "event" ? "#8a7200" : "#0ABFBC",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: 4,
            }}
          >
            {activity.type}
          </span>
          {activity.createdAt && (
            <span style={{ color: "#1E6091", fontSize: 12 }}>
              {activity.createdAt.toDate().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        <h2
          style={{
            color: "#0B2545",
            fontSize: 17,
            fontWeight: 700,
            margin: 0,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            lineHeight: 1.35,
          }}
        >
          {activity.title}
        </h2>

        <p
          style={{
            color: "#1E6091",
            fontSize: 13,
            margin: 0,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            lineHeight: 1.6,
          }}
        >
          {activity.description}
        </p>
      </div>
    </div>
  );
};
