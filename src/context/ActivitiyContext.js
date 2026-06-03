import { onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { activityCollection } from "../firebase/Firebase";

const ActivityContext = createContext();

export const ActivityContextProvider = (props) => {
  const { children } = props;
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getLiveUpdates = onSnapshot(
      activityCollection,
      (collectionSnapshot) => {
        const activityData = collectionSnapshot.docs.map((activityDoc) => ({
          activityId: activityDoc.id,
          ...activityDoc.data(),
        }));

        setActivities(activityData);
      },
    );

    return () => getLiveUpdates();
  }, []);

  return (
    <ActivityContext.Provider value={{ activities }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivityContext = () => {
  return useContext(ActivityContext);
};
