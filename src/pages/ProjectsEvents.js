import { useState } from "react";
import { ActivityCard } from "../components/ActivityCard";
import { CreateActivityModal } from "../components/CreateActivityModel";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NotLoggedIn } from "../components/NotLogged";
import { useActivityContext } from "../context/ActivitiyContext";
import { useUserContext } from "../context/UserContext";
import { Button } from "../components/Button";

export const ProjectsEvents = () => {
  const [openActivity, setOpenActivity] = useState(false);
  const handleCloseActivity = () => setOpenActivity(false);
  const { currentUser } = useUserContext();
  const [openNotLoggedIn, setOpenNotLoggedIn] = useState(false);
  const { activities, activitiesLoading } = useActivityContext();

  const handleCreateActivity = () => {
    if (!currentUser) {
      setOpenNotLoggedIn(true);
    } else {
      setOpenActivity(true);
    }
  };

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
            fontWeight: 710,
            margin: "0 0 12px",
          }}
        >
          Projects & Events
        </h1>
        <p
          style={{
            position: "relative",
            color: "#a8c5e8",
            fontSize: 16,
            maxWidth: 520,
            lineHeight: 2,
          }}
        >
          Explore the Alameda Island STEM community and its innovation
        </p>
        <Button onClick={handleCreateActivity}>
          + Post a Project or Event +
        </Button>
      </div>

      <div
        style={{
          flex: 1,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          padding: "48px 80px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#0B2545", fontSize: 13, fontWeight: 700 }}>
            ALL POSTS
          </span>
          <div
            style={{
              flex: 1,
              height: 2,
              backgroundColor: "#0ABFBC",
              opacity: 0.3,
            }}
          />
          <span
            style={{ color: "#1E6091", fontSize: 13, whiteSpace: "nowrap" }}
          >
            {activities.length} Posts
          </span>
        </div>

        {activities.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 40px",
              color: "#1E6091",
              fontSize: 16,
            }}
          >
            <p>No posts available</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {activities.map((activity) => (
              <div>
                <ActivityCard key={activity.activityId} activity={activity} />
              </div>
            ))}
          </div>
        )}
      </div>

      <CreateActivityModal
        open={openActivity}
        handleClose={handleCloseActivity}
      />
      <NotLoggedIn
        open={openNotLoggedIn}
        handleClose={() => setOpenNotLoggedIn(false)}
      />

      <Footer />
    </div>
  );
};
