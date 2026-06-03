import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UpdateActivityModal } from "../components/UpdateActivityModal";
// import { DeleteActivityModal } from "../components/DeleteActivityModal";
import { useActivityContext } from "../context/ActivitiyContext";
import { useUserContext } from "../context/UserContext";

export const ActivityPage = () => {
  const { id } = useParams();
  const { activities, activitiesLoading } = useActivityContext();
  const { currentUser } = useUserContext();
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const activity = activities.find((a) => a.activityId === id);
  const isOwner =
    currentUser && activity && activity.userId === currentUser.uid;

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

  if (!activity) return null;

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
            fontSize: 38,
            fontWeight: 800,
            margin: "0 0 12px",
            lineHeight: 1.1,
            maxWidth: 720,
          }}
        >
          {activity.title}
        </h1>

        {activity.createdAt && (
          <p
            style={{
              position: "relative",
              color: "#a8c5e8",
              fontSize: 14,
              margin: 0,
            }}
          >
            {activity.createdAt.toDate().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>

      <div
        style={{
          maxWidth: 800,
          width: "100%",
          margin: "0 auto",
          padding: "48px 80px 80px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={
            activity.imageURL ||
            "https://st3.depositphotos.com/1670231/35487/v/450/depositphotos_354875708-stock-illustration-technical-drawing-gears-black-background.jpg"
          }
          alt={activity.title}
          style={{
            width: "100%",
            borderRadius: 10,
            objectFit: "cover",
            maxHeight: 420,
            marginBottom: 36,
          }}
        />{" "}
        <p
          style={{
            color: "#1E6091",
            fontSize: 16,

            marginBottom: 24,
            lineHeight: 1.7,
          }}
        >
          {" "}
          Description: <br />
          {activity.description}
        </p>
        <div
          style={{
            height: 2,
            backgroundColor: "#0ABFBC",
            opacity: 0.2,
            marginBottom: 28,
          }}
        />
        <p
          style={{ color: "#0B2545", fontSize: 16, lineHeight: 1.8, margin: 0 }}
        >
          {activity.content}
        </p>
        {isOwner && (
          <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
            <button
              onClick={() => setOpenUpdate(true)}
              style={{
                padding: "12px 28px",
                backgroundColor: "transparent",
                color: "#0B2545",
                border: "1.5px solid rgba(11,37,69,0.25)",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Update
            </button>
            <button
              onClick={() => setOpenDelete(true)}
              style={{
                padding: "12px 28px",
                backgroundColor: "#0B2545",
                color: "#F5F0E8",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        )}
        <UpdateActivityModal
          open={openUpdate}
          handleClose={() => setOpenUpdate(false)}
          activity={activity}
        />
        {/* <DeleteActivityModal open={openDelete} handleClose={() => setOpenDelete(false)} activity={activity} /> */}
      </div>

      <Footer />
    </div>
  );
};
